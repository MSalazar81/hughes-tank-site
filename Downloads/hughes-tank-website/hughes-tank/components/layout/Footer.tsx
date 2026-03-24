import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, Twitter, Youtube, ArrowRight } from 'lucide-react';

const productLinks = [
  { name: 'UL 142 Tanks', href: '/products/ul-142' },
  { name: 'Fireguard® UL-2085', href: '/products/fireguard' },
  { name: 'Flameshield®', href: '/products/flameshield' },
  { name: 'Permatank®', href: '/products/permatank' },
  { name: 'ACT-100-U', href: '/products/act100u' },
  { name: 'Farm Tanks', href: '/products/farm-tanks' },
  { name: 'Containment Pans', href: '/products/containment-pans' },
  { name: 'Accessories', href: '/products/accessories' },
];

const resourceLinks = [
  { name: 'Tank Finder Tool', href: '/tank-finder' },
  { name: 'Build-A-Tank', href: '/build-a-tank' },
  { name: 'Tank Spec Sheets', href: '/resources/specs' },
  { name: 'Tank Chart Generator', href: '/resources/tank-charts' },
  { name: 'Compliance Guide', href: '/resources/compliance' },
  { name: 'Blog & News', href: '/blog' },
  { name: 'Projects Gallery', href: '/projects' },
];

const companyLinks = [
  { name: 'About Hughes Tank', href: '/about' },
  { name: 'Leadership Team', href: '/about#team' },
  { name: 'Careers', href: '/about#careers' },
  { name: 'Certifications', href: '/about#certifications' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms & Conditions', href: '/terms' },
];

export function Footer() {
  return (
    <footer className="bg-steel-950 border-t border-steel-800">
      {/* CTA band */}
      <div className="bg-brand-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl text-white font-bold">Ready to get started?</h3>
            <p className="text-orange-100 text-sm mt-1">Get a custom quote in 24 hours — guaranteed.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/quote" className="btn-primary bg-white text-brand-700 hover:bg-orange-50">
              REQUEST A QUOTE
            </Link>
            <Link href="/build-a-tank" className="btn-outline border-white text-white hover:bg-white hover:text-brand-700">
              BUILD-A-TANK
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-brand-500 flex items-center justify-center font-display font-black text-white text-sm">HT</div>
              <div>
                <span className="font-display font-bold text-white text-lg tracking-wide leading-none block">HUGHES TANK</span>
                <span className="text-brand-400 text-[9px] tracking-widest uppercase font-mono">COMPANY</span>
              </div>
            </div>
            <p className="text-steel-400 text-sm leading-relaxed mb-6 max-w-sm">
              Innovators in fuel storage tank manufacturing since our founding. Robotic fabrication, UL-listed products, custom configurations, and industry-leading lead times.
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:9723668684" className="flex items-center gap-2 text-steel-300 hover:text-brand-400 transition-colors font-mono">
                <Phone size={14} /> 972-366-8684
              </a>
              <a href="mailto:sales@hughestank.com" className="flex items-center gap-2 text-steel-300 hover:text-brand-400 transition-colors font-mono">
                <Mail size={14} /> sales@hughestank.com
              </a>
              <div className="flex items-start gap-2 text-steel-400 font-mono">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>2900 N FM 157<br />Venus, TX 76084</span>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              {[
                { Icon: Facebook, href: 'https://www.facebook.com/hughestankcompany/' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/company/hughes-tank-company-inc/' },
                { Icon: Instagram, href: 'https://www.instagram.com/hughestankcompany/' },
                { Icon: Twitter, href: 'https://x.com/HughesTankCo' },
                { Icon: Youtube, href: 'https://www.youtube.com/@HughesTankCompany/videos' },
              ].map(({ Icon, href }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 bg-steel-800 border border-steel-700 flex items-center justify-center text-steel-400 hover:border-brand-500 hover:text-brand-400 transition-colors">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm tracking-widest uppercase mb-4">Products</h4>
            <ul className="space-y-2">
              {productLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-steel-400 hover:text-brand-400 text-sm transition-colors flex items-center gap-1 group">
                    <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-3 group-hover:ml-0" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm tracking-widest uppercase mb-4">Resources</h4>
            <ul className="space-y-2">
              {resourceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-steel-400 hover:text-brand-400 text-sm transition-colors flex items-center gap-1 group">
                    <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-3 group-hover:ml-0" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm tracking-widest uppercase mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-steel-400 hover:text-brand-400 text-sm transition-colors flex items-center gap-1 group">
                    <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-3 group-hover:ml-0" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-3 border border-steel-700 bg-steel-900">
              <p className="text-steel-400 text-xs font-mono mb-1">HOURS OF OPERATION</p>
              <p className="text-steel-200 text-xs">Mon–Fri: 8am – 4:30pm</p>
              <p className="text-steel-400 text-xs mt-1 font-mono">Loading: 7am–2:30pm</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-steel-800 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-steel-500 text-xs font-mono">
            © {new Date().getFullYear()} Hughes Tank Company. All rights reserved.
          </p>
          <p className="text-steel-600 text-xs font-mono">
            UL Listed · STI Certified · Venus, Texas
          </p>
        </div>
      </div>
    </footer>
  );
}
