# Hughes Tank Company Website

A state-of-the-art Next.js 14 website for Hughes Tank Company — built for maximum SEO, lead capture, and customer experience.

## 🚀 Features

- **SEO Machine** — Structured data (JSON-LD), full sitemap, robots.txt, optimized meta tags, semantic HTML on every page
- **Tank Finder Tool** — 5-question guided questionnaire that recommends the right tank product
- **Build-A-Tank Configurator** — Interactive tank builder with live spec lookup and price estimator
- **Lead Capture Forms** — Multi-field quote request form on homepage, contact page, and quote page
- **E-Commerce Shop** — Accessories store with cart functionality (pumps, meters, nozzles, hoses, vents)
- **Admin Dashboard** — Password-protected backend to manage products and quote requests (no code needed)
- **Full Product Pages** — Dedicated pages for UL 142, Fireguard®, Flameshield®, Permatank®, ACT-100-U, Farm Tanks
- **Blog / Resources** — SEO-rich article section for content marketing
- **Mega Menu Navigation** — Desktop mega-menu with product categories + mobile responsive menu
- **Dark industrial design** — Custom fonts (Oswald + Barlow), brand orange accent, steel color palette

---

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Fonts**: Oswald (display) + Barlow (body)
- **Icons**: Lucide React
- **Deployment**: Vercel

---

## 📁 Project Structure

```
hughes-tank/
├── app/
│   ├── layout.tsx          # Root layout, SEO metadata, fonts
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles + Tailwind
│   ├── sitemap.ts          # Auto-generated XML sitemap
│   ├── robots.ts           # robots.txt
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── quote/              # Quote request page
│   ├── shop/               # Accessories e-commerce
│   ├── blog/               # Blog listing
│   ├── tank-finder/        # Tank Finder interactive tool
│   ├── build-a-tank/       # Tank Configurator
│   ├── admin/              # Admin dashboard (password protected)
│   └── products/
│       ├── page.tsx        # All products listing
│       └── ul-142/         # UL 142 product detail page
│           └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky navbar with mega menu
│   │   └── Footer.tsx      # Full footer with links + CTA
│   ├── sections/
│   │   ├── QuickQuoteForm.tsx    # Lead capture form
│   │   └── TankFinderTeaser.tsx  # Homepage tank finder section
│   └── ui/
│       └── Toaster.tsx     # Toast notifications
├── tailwind.config.js
├── next.config.js
├── vercel.json
└── package.json
```

---

## ⚡ Quick Start

### 1. Clone / Download

```bash
# If you received this as a zip, extract it first
# Or clone from your GitHub repo:
git clone https://github.com/YOUR_USERNAME/hughes-tank.git
cd hughes-tank
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deploy to Vercel

Since you already use Vercel, this is straightforward:

### Option A: GitHub Integration (Recommended)

1. Push this project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Hughes Tank website"
   git remote add origin https://github.com/YOUR_USERNAME/hughes-tank.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Done! Your site is live.

### Option B: Vercel CLI

```bash
npm install -g vercel
vercel --prod
```

---

## 🔐 Admin Dashboard

The admin panel is at `/admin`. 

**Demo password**: `admin123`

> ⚠️ **Important**: Before going live, replace the simple password check in `app/admin/page.tsx` with a proper auth system. Options:
> - [NextAuth.js](https://next-auth.js.org/) — Free, open source
> - [Clerk](https://clerk.com/) — Easy to set up, free tier available
> - [Auth0](https://auth0.com/)

---

## 📧 Setting Up Quote Email Notifications

To get email notifications when someone submits a quote form:

1. Install Resend or SendGrid:
   ```bash
   npm install resend
   ```

2. Create `app/api/quote/route.ts`:
   ```typescript
   import { Resend } from 'resend';
   const resend = new Resend(process.env.RESEND_API_KEY);
   
   export async function POST(req: Request) {
     const data = await req.json();
     await resend.emails.send({
       from: 'quotes@hughestank.com',
       to: 'sales@hughestank.com',
       subject: `New Quote Request – ${data.tankType}`,
       html: `<p>From: ${data.name} (${data.email})</p><p>Tank: ${data.tankType} – ${data.capacity} gal</p>`,
     });
     return Response.json({ ok: true });
   }
   ```

3. Add `RESEND_API_KEY` to your Vercel environment variables.

---

## 🗺️ Pages Overview

| Page | URL | Purpose |
|------|-----|---------|
| Homepage | `/` | Hero, products overview, tank finder teaser, quote form |
| Products | `/products` | All products listing |
| UL 142 | `/products/ul-142` | Full specs, dimensions table, certifications |
| Tank Finder | `/tank-finder` | 5-question guided recommendation tool |
| Build-A-Tank | `/build-a-tank` | Interactive configurator + price estimate |
| Quote | `/quote` | Dedicated quote request page |
| Shop | `/shop` | Accessories e-commerce |
| Blog | `/blog` | SEO article listing |
| About | `/about` | Company story, certifications, facility |
| Contact | `/contact` | Contact info + quote form + map |
| Admin | `/admin` | Product + quote management dashboard |

---

## 🎨 Branding Customization

When you're ready to add your branding:

1. **Colors** — Update `tailwind.config.js` brand colors to match your palette
2. **Logo** — Replace `HT` initials in `Navbar.tsx` with your actual logo image
3. **Hero Image** — Add a real tank photo to `public/images/hero-bg.jpg`
4. **Photos** — Add product photos to `public/images/products/`
5. **Font** — Change `Oswald` and `Barlow` in `app/layout.tsx` if desired

---

## 📈 SEO Checklist

- [x] JSON-LD structured data (Organization schema)
- [x] Dynamic `<title>` and `<meta description>` per page
- [x] XML sitemap at `/sitemap.xml`
- [x] robots.txt at `/robots.txt`
- [x] Open Graph tags for social sharing
- [x] Twitter Card meta tags
- [x] Canonical URLs
- [x] Semantic HTML headings (H1 → H2 → H3)
- [x] Keyword-rich product page copy
- [x] Blog section for content marketing
- [ ] Add Google Analytics (add to `app/layout.tsx`)
- [ ] Submit sitemap to Google Search Console
- [ ] Add real product photos (improves engagement signals)

---

## 📞 Support

For help with customization or additional features, contact your developer.

**Hughes Tank Company**  
2900 N FM 157 · Venus, TX 76084  
📞 972-366-8684  
📧 sales@hughestank.com
