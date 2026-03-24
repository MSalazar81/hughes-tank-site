import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Award, Zap, Clock, Shield, ChevronRight, Star, Phone } from 'lucide-react';
import { QuickQuoteForm } from '@/components/sections/QuickQuoteForm';
import { TankFinderTeaser } from '@/components/sections/TankFinderTeaser';

export const metadata: Metadata = {
  title: 'Hughes Tank Company | Custom Steel Fuel Storage Tanks – Venus, TX',
  description:
    'Hughes Tank Company manufactures UL 142, Fireguard® UL-2085, Flameshield®, Permatank®, ACT-100-U, and farm fuel storage tanks in Venus, TX. Robotic fabrication, custom builds, fast delivery.',
};

const products = [
  {
    name: 'UL 142',
    short: 'Aboveground Steel',
    desc: 'Single & double-wall aboveground fuel storage tanks for flammable and combustible liquids.',
    href: '/products/ul-142',
    cert: 'UL 142',
    color: 'from-blue-900/40 to-blue-950/20',
    border: 'border-blue-700/30',
    badgeColor: 'bg-blue-900/50 border-blue-700/50 text-blue-300',
  },
  {
    name: 'Fireguard®',
    short: 'UL-2085 Fire-Rated',
    desc: 'Two-hour fire-rated protection with 75-gallon thermal mass insulation. Industry gold standard.',
    href: '/products/fireguard',
    cert: 'UL 2085',
    color: 'from-red-900/40 to-red-950/20',
    border: 'border-red-700/30',
    badgeColor: 'bg-red-900/50 border-red-700/50 text-red-300',
  },
  {
    name: 'Flameshield®',
    short: 'Secondary Containment',
    desc: 'STI-P3® listed secondary containment tank with interstitial monitoring capability.',
    href: '/products/flameshield',
    cert: 'STI-P3',
    color: 'from-orange-900/40 to-orange-950/20',
    border: 'border-orange-700/30',
    badgeColor: 'bg-orange-900/50 border-orange-700/50 text-orange-300',
  },
  {
    name: 'Permatank®',
    short: 'Underground Storage',
    desc: 'Fiberglass-clad underground steel tanks. ACT-100 certified, corrosion-resistant.',
    href: '/products/permatank',
    cert: 'ACT-100',
    color: 'from-green-900/40 to-green-950/20',
    border: 'border-green-700/30',
    badgeColor: 'bg-green-900/50 border-green-700/50 text-green-300',
  },
  {
    name: 'Farm Tanks',
    short: 'Agricultural Fuel',
    desc: 'Purpose-built above-ground fuel storage for farms, ranches, and rural operations.',
    href: '/products/farm-tanks',
    cert: 'UL 142',
    color: 'from-yellow-900/40 to-yellow-950/20',
    border: 'border-yellow-700/30',
    badgeColor: 'bg-yellow-900/50 border-yellow-700/50 text-yellow-300',
  },
  {
    name: 'ACT-100-U',
    short: 'Underground Fiberglass',
    desc: 'STI ACT-100 underground steel tanks with fiberglass reinforced polyester coating.',
    href: '/products/act100u',
    cert: 'STI ACT-100',
    color: 'from-purple-900/40 to-purple-950/20',
    border: 'border-purple-700/30',
    badgeColor: 'bg-purple-900/50 border-purple-700/50 text-purple-300',
  },
];

const stats = [
  { value: '25+', label: 'Years Manufacturing', icon: Award },
  { value: '5,000+', label: 'Tanks Delivered', icon: CheckCircle },
  { value: '24hr', label: 'Quote Turnaround', icon: Clock },
  { value: '100%', label: 'UL Listed Products', icon: Shield },
];

const features = [
  { icon: Zap, title: 'Robotic Fabrication', desc: 'State-of-the-art robotic welding ensures consistency and precision on every tank.' },
  { icon: Shield, title: 'UL Listed & Certified', desc: 'All tanks carry UL, STI, and applicable certifications. Built above industry standards.' },
  { icon: Clock, title: 'Fast Lead Times', desc: 'Efficient manufacturing means your tank ships faster than the competition.' },
  { icon: CheckCircle, title: 'Air-Tested Every Time', desc: 'Every tank is plumbed on our yard and air pressure tested before it leaves.' },
];

const testimonials = [
  {
    text: 'Hughes Tank delivered our Fireguard tank ahead of schedule. Quality was outstanding and their team walked us through every spec.',
    name: 'Mike D.', role: 'Fleet Manager, DFW Logistics', stars: 5,
  },
  {
    text: 'Best pricing on UL 142 double-wall we could find in Texas. They were easy to work with and delivery was smooth.',
    name: 'Sarah K.', role: 'Operations Director, South Texas Fuels', stars: 5,
  },
  {
    text: "We've ordered from Hughes Tank three times now. Always on spec, always on time. They're our go-to for fuel storage.",
    name: 'James R.', role: 'Project Manager, Southwest Construction', stars: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-steel-950">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid-white opacity-40" />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-steel-950 via-steel-950/90 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-steel-950 to-transparent" />

        {/* Accent lines */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-500 via-brand-500/20 to-transparent" />

        {/* Hero image placeholder - replace with actual tank image */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-steel-900 to-transparent">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-steel-800 text-[200px] font-display font-black opacity-20 select-none">
              HT
            </div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <div className="max-w-2xl">
            <div className="section-label mb-6">Texas-Based Manufacturer Since 1999</div>

            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] mb-6">
              BUILT TO
              <br />
              <span className="text-brand-500">HOLD.</span>
              <br />
              <span className="text-steel-400">BUILT TO</span>
              <br />
              LAST.
            </h1>

            <p className="text-steel-300 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              Custom UL-listed fuel storage tanks manufactured in Venus, TX. Robotic precision, above-code quality, and faster delivery than anyone in the industry.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link href="/products" className="btn-primary">
                EXPLORE TANKS <ArrowRight size={16} />
              </Link>
              <Link href="/build-a-tank" className="btn-outline">
                BUILD YOUR TANK
              </Link>
              <Link href="/tank-finder" className="btn-ghost">
                TANK FINDER
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-4">
              {['UL LISTED', 'STI CERTIFIED', 'FLAMESHIELD®', 'FIREGUARD®'].map((cert) => (
                <span key={cert} className="tag-cert">{cert}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="absolute bottom-0 left-0 right-0 bg-steel-900/80 backdrop-blur-sm border-t border-steel-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-steel-700">
              {stats.map(({ value, label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-3 py-4 px-6">
                  <Icon size={20} className="text-brand-500 shrink-0" />
                  <div>
                    <div className="font-display text-2xl text-white font-bold">{value}</div>
                    <div className="text-steel-400 text-xs font-mono">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── QUICK QUOTE BAND ────────────────────────────────────────────── */}
      <section className="bg-brand-600 py-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white/20 flex items-center justify-center">
              <Phone size={18} className="text-white" />
            </div>
            <div>
              <p className="text-white font-display font-semibold">Need a Quote Fast?</p>
              <p className="text-orange-100 text-sm">Call us or submit online — response within 24 hours.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <a href="tel:9723668684" className="btn-primary bg-white text-brand-700 hover:bg-orange-50 text-xs">
              <Phone size={14} /> 972-366-8684
            </a>
            <Link href="/quote" className="btn-outline border-white text-white hover:bg-white hover:text-brand-700 text-xs">
              ONLINE QUOTE
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS GRID ───────────────────────────────────────────────── */}
      <section className="py-24 bg-steel-950" id="products">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="section-label mb-3">What We Manufacture</div>
              <h2 className="font-display text-5xl text-white font-bold">
                STEEL TANKS<br />
                <span className="text-steel-500">FOR EVERY APPLICATION</span>
              </h2>
            </div>
            <Link href="/products" className="btn-outline self-start md:self-auto">
              ALL PRODUCTS <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((p, i) => (
              <Link
                key={p.name}
                href={p.href}
                className={`group relative p-6 border ${p.border} bg-gradient-to-br ${p.color} hover:border-brand-500/50 transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`tag-cert ${p.badgeColor}`}>{p.cert}</span>
                  </div>
                  <ChevronRight size={16} className="text-steel-600 group-hover:text-brand-400 transition-colors" />
                </div>
                <h3 className="font-display text-2xl text-white font-bold mb-1">{p.name}</h3>
                <p className="text-brand-400 text-xs font-mono tracking-wide mb-3">{p.short}</p>
                <p className="text-steel-400 text-sm leading-relaxed">{p.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-brand-400 text-xs font-mono group-hover:gap-2 transition-all">
                  VIEW SPECS <ArrowRight size={10} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TANK FINDER TEASER ──────────────────────────────────────────── */}
      <TankFinderTeaser />

      {/* ─── WHY HUGHES TANK ─────────────────────────────────────────────── */}
      <section className="py-24 bg-steel-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-4">Why Choose Us</div>
              <h2 className="font-display text-5xl text-white font-bold mb-6">
                ENGINEERED<br />
                <span className="text-brand-500">ABOVE STANDARD.</span>
              </h2>
              <p className="text-steel-400 text-lg leading-relaxed mb-8">
                At Hughes Tank Company, we combine cutting-edge robotic fabrication with decades of hands-on expertise. Every tank that leaves our Venus, TX facility has been built, plumbed, and air-tested to exceed UL specifications.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {features.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="p-4 border border-steel-700 bg-steel-950/50">
                    <Icon size={20} className="text-brand-500 mb-2" />
                    <h4 className="font-display text-white text-sm font-semibold mb-1">{title}</h4>
                    <p className="text-steel-400 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              {/* Decorative stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { n: '500+', label: 'Tank configurations available' },
                  { n: '48hr', label: 'Average shop turnaround' },
                  { n: '100%', label: 'Air tested before delivery' },
                  { n: 'UL', label: 'Listed on every product' },
                ].map((s) => (
                  <div key={s.label} className="p-6 border border-steel-700 bg-steel-950 text-center">
                    <div className="font-display text-4xl text-brand-500 font-bold">{s.n}</div>
                    <p className="text-steel-400 text-xs mt-1 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-6 border border-brand-700/50 bg-brand-900/20">
                <p className="text-brand-300 font-mono text-xs mb-2">LOCATION</p>
                <p className="font-display text-white text-lg">2900 N FM 157 · Venus, TX 76084</p>
                <p className="text-steel-400 text-sm mt-1">Serving the entire United States</p>
                <Link href="/contact" className="btn-primary mt-4 text-xs">
                  GET DIRECTIONS <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BUILD-A-TANK CTA ─────────────────────────────────────────────── */}
      <section className="py-20 bg-steel-950 diagonal-clip-reverse">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="section-label justify-center mb-4">Interactive Configurator</div>
          <h2 className="font-display text-6xl text-white font-bold mb-4">
            BUILD YOUR TANK.<br />
            <span className="text-brand-500">GET REAL SPECS.</span>
          </h2>
          <p className="text-steel-400 text-lg max-w-2xl mx-auto mb-8">
            Use our interactive Tank Configurator to spec out your exact tank — capacity, type, fittings, pumping packages — and send us your build sheet for a fast quote.
          </p>
          <Link href="/build-a-tank" className="btn-primary text-base px-8 py-4">
            START BUILDING <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-steel-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-label justify-center mb-4">Customer Reviews</div>
          <h2 className="font-display text-4xl text-white font-bold text-center mb-12">WHAT OUR CUSTOMERS SAY</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="p-6 border border-steel-700 bg-steel-950 relative">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={14} className="text-brand-500 fill-brand-500" />
                  ))}
                </div>
                <p className="text-steel-300 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="border-t border-steel-700 pt-4">
                  <p className="text-white font-display font-semibold text-sm">{t.name}</p>
                  <p className="text-steel-500 text-xs font-mono">{t.role}</p>
                </div>
                <div className="absolute top-6 right-6 text-5xl font-display text-steel-800 select-none">"</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QUICK QUOTE SECTION ─────────────────────────────────────────── */}
      <section className="py-24 bg-steel-950" id="quote">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="section-label mb-4">Lead Capture</div>
              <h2 className="font-display text-5xl text-white font-bold mb-4">
                GET A QUOTE<br />
                <span className="text-brand-500">IN 24 HOURS.</span>
              </h2>
              <p className="text-steel-400 text-base mb-6 leading-relaxed">
                Tell us about your project and we'll get back to you with pricing and lead time within one business day. Guaranteed.
              </p>
              <div className="space-y-3">
                {[
                  'All tank types and sizes',
                  'Custom pumping & metering packages',
                  'Containment pans & accessories',
                  'Volume pricing for multiple units',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-steel-300 text-sm">
                    <CheckCircle size={14} className="text-brand-500 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <QuickQuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
