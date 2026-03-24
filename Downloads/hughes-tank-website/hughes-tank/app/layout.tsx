import type { Metadata } from 'next';
import { Oswald, Barlow, Roboto_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/Toaster';

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
});
const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-barlow',
  display: 'swap',
});
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hughestank.com'),
  title: {
    default: 'Hughes Tank Company | Custom Steel Fuel Storage Tanks – Venus, TX',
    template: '%s | Hughes Tank Company',
  },
  description:
    'Hughes Tank Company manufactures UL 142, Fireguard® UL-2085, Flameshield®, Permatank®, ACT-100-U, and farm fuel storage tanks. Custom builds, fast delivery, robotic fabrication. Venus, TX.',
  keywords: [
    'fuel storage tanks',
    'custom steel tanks',
    'UL 142 tanks',
    'fireguard tanks',
    'above ground storage tanks',
    'double wall fuel tanks',
    'farm fuel tanks',
    'Texas tank manufacturer',
    'Hughes Tank Company',
    'petroleum storage tanks',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hughestank.com',
    siteName: 'Hughes Tank Company',
    title: 'Hughes Tank Company | Custom Fuel Storage Tanks',
    description:
      'UL 142, Fireguard®, Flameshield®, Permatank® & more. Robotic fabrication, custom configs, fast lead times. Venus, TX.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Hughes Tank Company' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@HughesTankCo',
    creator: '@HughesTankCo',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: 'https://hughestank.com' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${barlow.variable} ${robotoMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0f172a" />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Hughes Tank Company',
              url: 'https://hughestank.com',
              logo: 'https://hughestank.com/logo.png',
              telephone: '+1-972-366-8684',
              email: 'sales@hughestank.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '2900 N FM 157',
                addressLocality: 'Venus',
                addressRegion: 'TX',
                postalCode: '76084',
                addressCountry: 'US',
              },
              sameAs: [
                'https://www.facebook.com/hughestankcompany/',
                'https://www.linkedin.com/company/hughes-tank-company-inc/',
                'https://www.instagram.com/hughestankcompany/',
              ],
            }),
          }}
        />
      </head>
      <body className="bg-steel-950 text-white font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
