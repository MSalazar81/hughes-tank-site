// GitHub OAuth proxy for Decap CMS
// Route: /api/auth and /api/callback
//
// Setup steps (one-time):
// 1. Go to GitHub → Settings → Developer settings → OAuth Apps → New OAuth App
//      Application name: Hughes Tank CMS
//      Homepage URL:     https://hughestank.com
//      Callback URL:     https://hughestank.com/api/callback
// 2. Note the Client ID and generate a Client Secret
// 3. In Vercel → Project → Settings → Environment Variables, add:
//      GITHUB_OAUTH_CLIENT_ID     = <Client ID from step 2>
//      GITHUB_OAUTH_CLIENT_SECRET = <Client Secret from step 2>

import { randomBytes } from 'crypto';

export default async function handler(req, res) {
  const url = req.url || '';
  const isCallback = url.includes('/callback');

  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GITHUB_OAUTH_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return res.status(500).send('OAuth not configured. Set GITHUB_OAUTH_CLIENT_ID and GITHUB_OAUTH_CLIENT_SECRET in Vercel environment variables.');
  }

  // Step 1: redirect user to GitHub authorize URL
  if (!isCallback) {
    const state = randomBytes(16).toString('hex');
    const params = new URLSearchParams({
      client_id: clientId,
      redirect_uri: `https://${req.headers.host}/api/callback`,
      scope: 'repo,user',
      state,
    });
    res.setHeader('Set-Cookie', `oauth_state=${state}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`);
    return res.redirect(302, `https://github.com/login/oauth/authorize?${params}`);
  }

  // Step 2: callback — exchange code for token
  const { code, state } = req.query;

  // Verify state to prevent CSRF
  const cookies = (req.headers.cookie || '').split(';').map(c => c.trim().split('='));
  const stateCookie = cookies.find(c => c[0] === 'oauth_state');
  if (!stateCookie || stateCookie[1] !== state) {
    return sendResult(res, 'error', { message: 'Invalid state — possible CSRF attempt' });
  }

  if (!code) {
    return sendResult(res, 'error', { message: 'No code returned from GitHub' });
  }

  try {
    const tokenResp = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });
    const tokenData = await tokenResp.json();

    if (tokenData.error || !tokenData.access_token) {
      return sendResult(res, 'error', { message: tokenData.error_description || 'Failed to get access token' });
    }

    // Verify the user has write access to the repo (security check)
    const repoCheck = await fetch('https://api.github.com/repos/MSalazar81/hughes-tank-site', {
      headers: {
        'Authorization': `token ${tokenData.access_token}`,
        'Accept': 'application/vnd.github+json',
        'User-Agent': 'Hughes-Tank-CMS',
      },
    });
    if (!repoCheck.ok) {
      return sendResult(res, 'error', {
        message: 'You do not have access to the Hughes Tank Company website repository. Contact your administrator to be added as a collaborator.'
      });
    }
    const repoData = await repoCheck.json();
    if (!repoData.permissions || !repoData.permissions.push) {
      return sendResult(res, 'error', {
        message: 'Your GitHub account does not have write access to the website repository. Contact your administrator.'
      });
    }

    // Success — return the token to Decap CMS
    return sendResult(res, 'success', {
      token: tokenData.access_token,
      provider: 'github',
    });
  } catch (err) {
    console.error('OAuth callback error:', err);
    return sendResult(res, 'error', { message: 'Authentication failed: ' + err.message });
  }
}

function sendResult(res, status, payload) {
  // Decap CMS expects a postMessage from the popup window
  const message = `authorization:github:${status}:${JSON.stringify(payload)}`;
  const html = `<!DOCTYPE html><html><head><title>Authentication</title></head><body>
<script>
(function() {
  function receiveMessage(e) {
    window.opener.postMessage(${JSON.stringify(message)}, e.origin);
    window.removeEventListener('message', receiveMessage, false);
  }
  window.addEventListener('message', receiveMessage, false);
  window.opener.postMessage('authorizing:github', '*');
})();
</script>
<p style="font-family:sans-serif;text-align:center;padding:40px;color:#0D1B3E">
  ${status === 'success' ? 'Authentication successful. You can close this window.' : 'Authentication failed: ' + payload.message}
</p>
</body></html>`;
  res.setHeader('Content-Type', 'text/html');
  // Clear the state cookie
  res.setHeader('Set-Cookie', 'oauth_state=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0');
  return res.status(200).send(html);
}
