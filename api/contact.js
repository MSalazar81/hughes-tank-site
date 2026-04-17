// Vercel serverless function: POST /api/contact
// Receives form data, sends email via Resend.
// Reads RESEND_API_KEY from env (set in Vercel dashboard).

export default async function handler(req, res) {
  // CORS — only allow our own origin
  const allowed = [
    'https://hughestank.com',
    'https://www.hughestank.com',
    'https://hughestank-site.vercel.app',
    'http://localhost:8000',
    'http://localhost:3000',
  ];
  const origin = req.headers.origin || '';
  if (allowed.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // Validate
  const {
    name, email, phone, company,
    delivery_location, purchase_timeline,
    message, honeypot,
    source = 'contact-form',
    quote_data, // optional: configurator quote details
  } = req.body || {};

  // Spam honeypot — real users won't fill the hidden field
  if (honeypot) return res.status(200).json({ success: true });

  if (!name || !email || !message) {
    return res.status(400).json({
      error: 'Missing required fields: name, email, message'
    });
  }

  // Basic email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY not set');
    return res.status(500).json({ error: 'Email service not configured' });
  }

  // Build email content
  const subject = source === 'quote-request'
    ? `Quote Request from ${name}${company ? ' — ' + company : ''}`
    : `Contact Form: ${name}${company ? ' (' + company + ')' : ''}`;

  let html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #0D1B3E; color: white; padding: 24px; border-radius: 6px 6px 0 0;">
        <h2 style="margin: 0; font-size: 20px;">${subject}</h2>
        <p style="margin: 4px 0 0 0; opacity: 0.7; font-size: 13px;">Submitted via hughestank.com</p>
      </div>
      <div style="background: #F8F9FC; padding: 24px; border-radius: 0 0 6px 6px;">
        <table style="width:100%; border-collapse: collapse; font-size: 14px;">
          <tr><td style="padding:8px 0; color:#5A6A88; width:140px;"><strong>Name:</strong></td><td style="padding:8px 0;">${escapeHtml(name)}</td></tr>
          <tr><td style="padding:8px 0; color:#5A6A88;"><strong>Email:</strong></td><td style="padding:8px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          ${phone ? `<tr><td style="padding:8px 0; color:#5A6A88;"><strong>Phone:</strong></td><td style="padding:8px 0;"><a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></td></tr>` : ''}
          ${company ? `<tr><td style="padding:8px 0; color:#5A6A88;"><strong>Company:</strong></td><td style="padding:8px 0;">${escapeHtml(company)}</td></tr>` : ''}
          ${delivery_location ? `<tr><td style="padding:8px 0; color:#5A6A88;"><strong>Delivery Location:</strong></td><td style="padding:8px 0;">${escapeHtml(delivery_location)}</td></tr>` : ''}
          ${purchase_timeline ? `<tr><td style="padding:8px 0; color:#5A6A88;"><strong>Timeline:</strong></td><td style="padding:8px 0;">${escapeHtml(purchase_timeline)}</td></tr>` : ''}
        </table>
        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #DDE2EE;">
          <strong style="color: #5A6A88; display: block; margin-bottom: 8px;">Message:</strong>
          <div style="background: white; padding: 16px; border-radius: 4px; border: 1px solid #DDE2EE; white-space: pre-wrap;">${escapeHtml(message)}</div>
        </div>
        ${quote_data ? `<div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #DDE2EE;">
          <strong style="color: #5A6A88; display: block; margin-bottom: 8px;">Quote Configuration:</strong>
          <pre style="background: white; padding: 16px; border-radius: 4px; border: 1px solid #DDE2EE; font-size: 12px; overflow-x:auto;">${escapeHtml(JSON.stringify(quote_data, null, 2))}</pre>
        </div>` : ''}
      </div>
      <p style="margin: 16px 0 0 0; font-size: 11px; color: #8A9BB5; text-align: center;">
        Reply directly to this email to respond to ${escapeHtml(name)}.
      </p>
    </div>
  `;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Hughes Tank Website <noreply@hughestank.com>',
        to: ['sales@hughestank.com'],
        reply_to: email,
        subject,
        html,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Resend error:', response.status, errText);
      return res.status(502).json({ error: 'Failed to send message. Please call us at 972-366-8684.' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Send error:', err);
    return res.status(500).json({ error: 'Failed to send message. Please call us at 972-366-8684.' });
  }
}

function escapeHtml(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
