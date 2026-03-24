'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Phone, Menu, X, ArrowRight, ShoppingCart } from 'lucide-react';

const products = [
  {
    name: 'UL 142',
    desc: 'Single & double-wall aboveground',
    href: '/products/ul-142',
    icon: '🛢️',
    cert: 'UL 142',
  },
  {
    name: 'Fireguard® UL-2085',
    desc: 'Two-hour fire-rated protection',
    href: '/products/fireguard',
    icon: '🔥',
    cert: 'UL 2085',
  },
  {
    name: 'Flameshield®',
    desc: 'Secondary containment system',
    href: '/products/flameshield',
    icon: '🛡️',
    cert: 'UL 142',
  },
  {
    name: 'Permatank®',
    desc: 'Fiberglass-coated underground',
    href: '/products/permatank',
    icon: '⚙️',
    cert: 'ACT-100',
  },
  {
    name: 'ACT-100-U',
    desc: 'Underground steel with fiberglass',
    href: '/products/act100u',
    icon: '🏗️',
    cert: 'STI',
  },
  {
    name: 'Farm Tanks',
    desc: 'Agricultural & rural fuel storage',
    href: '/products/farm-tanks',
    icon: '🌾',
    cert: 'UL 142',
  },
  {
    name: 'Containment Pans',
    desc: 'Secondary containment solutions',
    href: '/products/containment-pans',
    icon: '🔩',
    cert: '',
  },
  {
    name: 'Accessories',
    desc: 'Pumps, meters, vents & more',
    href: '/products/accessories',
    icon: '🔧',
    cert: '',
  },
];

const resources = [
  { name: 'Tank Finder', desc: 'Which tank is right for you?', href: '/tank-finder' },
  { name: 'Build-A-Tank', desc: 'Custom configure & price', href: '/build-a-tank' },
  { name: 'Tank Spec Sheets', desc: 'Drawings & specifications', href: '/resources/specs' },
  { name: 'Tank Chart Generator', desc: 'Gauge & volume charts', href: '/resources/tank-charts' },
  { name: 'Compliance Guide', desc: 'UL, EPA, NFPA overview', href: '/resources/compliance' },
  { name: 'Blog & News', desc: 'Industry insights', href: '/blog' },
];

export function Navbar() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  useEffect(() => { setMobileOpen(false); setOpen(null); }, [pathname]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-steel-900 border-b border-steel-800 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-9">
          <p className="text-steel-400 text-xs font-mono">
            📍 2900 N FM 157, Venus, TX 76084 &nbsp;|&nbsp; Mon–Fri 8am–4:30pm
          </p>
          <div className="flex items-center gap-4">
            <a href="mailto:sales@hughestank.com" className="text-steel-400 hover:text-brand-400 text-xs font-mono transition-colors">
              sales@hughestank.com
            </a>
            <a href="tel:9723668684" className="flex items-center gap-1 text-brand-400 hover:text-brand-300 text-xs font-mono font-semibold transition-colors">
              <Phone size={11} /> 972-366-8684
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        ref={navRef}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-steel-950/98 backdrop-blur-md shadow-xl shadow-black/40 border-b border-steel-800' : 'bg-steel-950'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 bg-brand-500 flex items-center justify-center font-display font-black text-white text-sm">
                HT
              </div>
              <div>
                <span className="font-display font-bold text-white text-lg tracking-wide leading-none block">
                  HUGHES TANK
                </span>
                <span className="text-brand-400 text-[9px] tracking-widest uppercase font-mono leading-none">
                  COMPANY
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Products dropdown */}
              <button
                onClick={() => setOpen(open === 'products' ? null : 'products')}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-display tracking-wide transition-colors ${
                  open === 'products' ? 'text-brand-400' : 'text-steel-300 hover:text-white'
                }`}
              >
                PRODUCTS
                <ChevronDown size={14} className={`transition-transform ${open === 'products' ? 'rotate-180' : ''}`} />
              </button>

              <Link href="/tank-finder" className="px-3 py-2 text-sm font-display tracking-wide text-steel-300 hover:text-white transition-colors">
                TANK FINDER
              </Link>
              <Link href="/build-a-tank" className="px-3 py-2 text-sm font-display tracking-wide text-steel-300 hover:text-white transition-colors">
                BUILD-A-TANK
              </Link>

              {/* Resources dropdown */}
              <button
                onClick={() => setOpen(open === 'resources' ? null : 'resources')}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-display tracking-wide transition-colors ${
                  open === 'resources' ? 'text-brand-400' : 'text-steel-300 hover:text-white'
                }`}
              >
                RESOURCES
                <ChevronDown size={14} className={`transition-transform ${open === 'resources' ? 'rotate-180' : ''}`} />
              </button>

              <Link href="/shop" className="px-3 py-2 text-sm font-display tracking-wide text-steel-300 hover:text-white transition-colors">
                SHOP
              </Link>
              <Link href="/about" className="px-3 py-2 text-sm font-display tracking-wide text-steel-300 hover:text-white transition-colors">
                ABOUT
              </Link>
              <Link href="/contact" className="px-3 py-2 text-sm font-display tracking-wide text-steel-300 hover:text-white transition-colors">
                CONTACT
              </Link>
            </div>

            {/* CTA buttons */}
            <div className="hidden lg:flex items-center gap-2">
              <Link href="/shop" className="relative p-2 text-steel-400 hover:text-white transition-colors">
                <ShoppingCart size={18} />
              </Link>
              <Link href="/quote" className="btn-primary text-xs py-2 px-4">
                GET A QUOTE
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-steel-300 hover:text-white transition-colors"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Products mega menu */}
        {open === 'products' && (
          <div className="absolute left-0 right-0 bg-steel-900 border-t border-steel-700 shadow-2xl z-50">
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="grid grid-cols-4 gap-4">
                {products.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="flex items-start gap-3 p-3 hover:bg-steel-800 transition-colors group"
                    onClick={() => setOpen(null)}
                  >
                    <span className="text-2xl mt-0.5">{p.icon}</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display font-semibold text-white text-sm group-hover:text-brand-400 transition-colors">
                          {p.name}
                        </span>
                        {p.cert && <span className="tag-cert">{p.cert}</span>}
                      </div>
                      <p className="text-steel-400 text-xs mt-0.5">{p.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="border-t border-steel-700 mt-6 pt-4 flex items-center gap-4">
                <Link href="/products" className="btn-outline text-xs py-1.5 px-4" onClick={() => setOpen(null)}>
                  VIEW ALL PRODUCTS
                </Link>
                <Link href="/tank-finder" className="text-brand-400 hover:text-brand-300 text-xs font-mono flex items-center gap-1 transition-colors" onClick={() => setOpen(null)}>
                  Not sure which tank? Use our Tank Finder <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Resources dropdown */}
        {open === 'resources' && (
          <div className="absolute right-0 w-72 bg-steel-900 border border-steel-700 shadow-2xl z-50 mt-0">
            <div className="p-4">
              {resources.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="flex flex-col p-3 hover:bg-steel-800 transition-colors group"
                  onClick={() => setOpen(null)}
                >
                  <span className="font-display font-semibold text-white text-sm group-hover:text-brand-400 transition-colors">
                    {r.name}
                  </span>
                  <span className="text-steel-400 text-xs">{r.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-steel-950 overflow-y-auto lg:hidden pt-16">
          <div className="px-4 py-6 space-y-1">
            <p className="text-brand-400 text-xs font-mono tracking-widest uppercase mb-4">Products</p>
            {products.map((p) => (
              <Link key={p.href} href={p.href} className="flex items-center justify-between p-3 border border-steel-800 hover:border-brand-700 transition-colors group">
                <div className="flex items-center gap-3">
                  <span>{p.icon}</span>
                  <span className="font-display text-white text-sm">{p.name}</span>
                </div>
                <ArrowRight size={14} className="text-steel-600 group-hover:text-brand-400 transition-colors" />
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              {[
                { href: '/tank-finder', label: 'Tank Finder' },
                { href: '/build-a-tank', label: 'Build-A-Tank' },
                { href: '/shop', label: 'Shop Accessories' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="block p-3 border border-steel-800 font-display text-steel-200 hover:text-brand-400 transition-colors text-sm">
                  {item.label.toUpperCase()}
                </Link>
              ))}
            </div>
            <div className="pt-4">
              <Link href="/quote" className="btn-primary w-full justify-center text-sm py-3">
                GET A QUOTE
              </Link>
              <a href="tel:9723668684" className="btn-ghost w-full justify-center text-sm py-3 mt-2">
                <Phone size={14} /> CALL 972-366-8684
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
