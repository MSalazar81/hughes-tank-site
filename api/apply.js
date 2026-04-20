// Vercel serverless function: POST /api/apply
// Receives career application (including resume file as base64), sends email via Resend.

export default async function handler(req, res) {
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

  const {
    first_name, last_name, email, phone,
    position, years_experience, start_date,
    current_employer, cover_letter,
    resume, honeypot,
  } = req.body || {};

  // Spam honeypot
  if (honeypot) return res.status(200).json({ success: true });

  // Required fields
  if (!first_name || !last_name || !email || !phone || !position || !years_experience) {
    return res.status(400).json({ error: 'Please complete all required fields.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }
  if (!resume || !resume.data || !resume.name) {
    return res.status(400).json({ error: 'Please attach your resume.' });
  }
  // Resume size limit (base64 is ~33% larger than binary, so 7 MB base64 ≈ 5 MB file)
  if (resume.data.length > 7 * 1024 * 1024) {
    return res.status(400).json({ error: 'Resume too large. Please upload under 5 MB.' });
  }
  // Resume type check
  const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
  if (resume.type && !allowedTypes.includes(resume.type)) {
    return res.status(400).json({ error: 'Resume must be a PDF, DOC, or DOCX file.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY not set');
    return res.status(500).json({ error: 'Application service not configured.' });
  }

  const fullName = `${first_name} ${last_name}`;
  const subject = `[CAREERS] ${position} — ${fullName}`;

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; max-width: 640px; margin: 0 auto;">
      <div style="background: #0D1B3E; color: white; padding: 24px 28px; border-radius: 6px 6px 0 0;">
        <div style="font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; opacity: 0.7; margin-bottom: 6px;">New Career Application</div>
        <h2 style="margin: 0; font-size: 22px;">${escapeHtml(position)}</h2>
        <p style="margin: 8px 0 0 0; opacity: 0.85; font-size: 14px;">From ${escapeHtml(fullName)}</p>
      </div>
      <div style="background: #F8F9FC; padding: 24px 28px; border-radius: 0 0 6px 6px;">

        <h3 style="margin: 0 0 14px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; color: #5A6A88;">Contact</h3>
        <table style="width:100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;">
          <tr><td style="padding:8px 0; color:#5A6A88; width:160px;"><strong>Full Name:</strong></td><td style="padding:8px 0;">${escapeHtml(fullName)}</td></tr>
          <tr><td style="padding:8px 0; color:#5A6A88;"><strong>Email:</strong></td><td style="padding:8px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding:8px 0; color:#5A6A88;"><strong>Phone:</strong></td><td style="padding:8px 0;"><a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></td></tr>
        </table>

        <h3 style="margin: 0 0 14px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; color: #5A6A88;">Position &amp; Experience</h3>
        <table style="width:100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;">
          <tr><td style="padding:8px 0; color:#5A6A88; width:160px;"><strong>Applying For:</strong></td><td style="padding:8px 0;"><strong>${escapeHtml(position)}</strong></td></tr>
          <tr><td style="padding:8px 0; color:#5A6A88;"><strong>Years Experience:</strong></td><td style="padding:8px 0;">${escapeHtml(years_experience)}</td></tr>
          ${start_date ? `<tr><td style="padding:8px 0; color:#5A6A88;"><strong>Available to Start:</strong></td><td style="padding:8px 0;">${escapeHtml(start_date)}</td></tr>` : ''}
          ${current_employer ? `<tr><td style="padding:8px 0; color:#5A6A88;"><strong>Current Employer:</strong></td><td style="padding:8px 0;">${escapeHtml(current_employer)}</td></tr>` : ''}
        </table>

        ${cover_letter ? `
        <h3 style="margin: 0 0 14px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; color: #5A6A88;">Cover Letter</h3>
        <div style="background: white; padding: 16px; border-radius: 4px; border: 1px solid #DDE2EE; white-space: pre-wrap; font-size: 14px; line-height: 1.6; margin-bottom: 24px;">${escapeHtml(cover_letter)}</div>
        ` : ''}

        <div style="margin-top: 20px; padding: 16px; background: rgba(26,58,140,0.06); border-left: 3px solid #1A3A8C; font-size: 13px; color: #0D1B3E;">
          <strong>📎 Resume attached:</strong> ${escapeHtml(resume.name)} (${(resume.size / 1024).toFixed(1)} KB)
          <br><span style="font-size: 12px; color: #5A6A88;">Reply directly to this email to contact ${escapeHtml(first_name)}.</span>
        </div>
      </div>
      <p style="margin: 16px 0 0 0; font-size: 11px; color: #8A9BB5; text-align: center;">
        Submitted via hughestank.com/careers · ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago', dateStyle: 'medium', timeStyle: 'short' })} CT
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
        from: 'Hughes Tank Careers <noreply@hughestank.com>',
        to: ['hr@hughestank.com'],
        reply_to: email,
        subject,
        html,
        attachments: [
          {
            filename: resume.name,
            content: resume.data, // base64 string
          },
        ],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Resend error:', response.status, errText);
      return res.status(502).json({ error: 'Failed to submit application. Please email hr@hughestank.com directly.' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Send error:', err);
    return res.status(500).json({ error: 'Failed to submit application. Please email hr@hughestank.com directly.' });
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
