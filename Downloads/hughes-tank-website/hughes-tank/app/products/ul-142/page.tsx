import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Download, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'UL 142 Aboveground Steel Fuel Storage Tanks | Hughes Tank Company',
  description: 'Hughes Tank Company UL 142 aboveground fuel storage tanks. Single and double-wall, horizontal and vertical, 100 to 20,000+ gallons. Custom configurations. Venus, TX.',
  keywords: ['UL 142 tank', 'aboveground fuel tank', 'steel storage tank', 'double wall fuel tank', 'single wall fuel tank', 'Texas fuel tank manufacturer'],
};

const specs = [
  { cap: '500', dia: '48"', len: '63"', weight: '680 lbs', shell: '10 ga', heads: '10 ga', saddle: '10 ga' },
  { cap: '1,000', dia: '48"', len: '119"', weight: '1,050 lbs', shell: '10 ga', heads: '10 ga', saddle: '10 ga' },
  { cap: '2,000', dia: '64"', len: '119"', weight: '1,820 lbs', shell: '7 ga', heads: '7 ga', saddle: '7 ga' },
  { cap: '4,000', dia: '64"', len: '228"', weight: '3,100 lbs', shell: '7 ga', heads: '7 ga', saddle: '7 ga' },
  { cap: '5,000', dia: '96"', len: '119"', weight: '3,900 lbs', shell: '5 ga', heads: '5 ga', saddle: '5 ga' },
  { cap: '8,000', dia: '96"', len: '183"', weight: '5,600 lbs', shell: '5 ga', heads: '5 ga', saddle: '5 ga' },
  { cap: '10,000', dia: '120"', len: '143"', weight: '7,200 lbs', shell: '3/16"', heads: '3/16"', saddle: '3/16"' },
  { cap: '12,000', dia: '120"', len: '170"', weight: '8,400 lbs', shell: '3/16"', heads: '3/16"', saddle: '3/16"' },
  { cap: '15,000', dia: '120"', len: '210"', weight: '10,200 lbs', shell: '1/4"', heads: '1/4"', saddle: '1/4"' },
  { cap: '20,000', dia: '120"', len: '284"', weight: '12,800 lbs', shell: '1/4"', heads: '1/4"', saddle: '1/4"' },
];

const standardEquipment = [
  '2" fill connection w/ dust cap',
  '2" normal vent – UL listed',
  '2" emergency vent – UL listed',
  '2" suction connection',
  '2" return connection',
  '3/4" gauge connection',
  '24" manhole cover (standard)',
  'Red oxide primer (interior & exterior)',
  'Steel saddle supports (horizontal)',
  'Air tested 5 PSI prior to shipment',
];

const optionalEquipment = [
  'Pumping packages (Fill-Rite, Tuthill)',
  'Flow meters (oval gear, digital)',
  'Automatic nozzles',
  'Secondary containment package',
  'Spill container & overfill valve',
  'Level gauge & high-level alarm',
  'Containment pan',
  'Custom color coating',
  'Ladders & guardrails',
  'Forklift pockets',
];

const relatedProducts = [
  { name: 'Fireguard® UL-2085', href: '/products/fireguard', cert: 'UL 2085', desc: 'Need fire protection? Upgrade to Fireguard.' },
  { name: 'Flameshield®', href: '/products/flameshield', cert: 'STI-P3', desc: 'Secondary containment for sensitive sites.' },
  { name: 'Farm Tanks', href: '/products/farm-tanks', cert: 'UL 142', desc: 'Purpose-built for agricultural use.' },
];

export default function UL142Page() {
  return (
    <div className="min-h-screen bg-steel-950">
      {/* Breadcrumb */}
      <div className="bg-steel-900 border-b border-steel-800 py-3">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-xs font-mono text-steel-500">
          <Link href="/" className="hover:text-brand-400 transition-colors">HOME</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-brand-400 transition-colors">PRODUCTS</Link>
          <span>/</span>
          <span className="text-brand-400">UL 142</span>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-steel-900 border-b border-steel-800 py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="tag-cert">UL Listed 142</span>
                <span className="tag-cert">STI Certified</span>
              </div>
              <h1 className="font-display text-6xl text-white font-bold mb-3">UL 142</h1>
              <p className="text-brand-400 font-mono text-sm tracking-widest uppercase mb-4">Aboveground Steel Fuel Storage Tanks</p>
              <p className="text-steel-300 text-lg leading-relaxed mb-6">
                The Hughes Tank UL 142 aboveground steel tank is the industry standard for storing flammable and combustible liquids. Available in single-wall and double-wall construction, our UL 142 tanks are fabricated with robotic precision and air-tested at 5 PSI before every shipment.
              </p>
              <div className="flex gap-3">
                <Link href="/quote?product=ul-142" className="btn-primary">GET A QUOTE</Link>
                <Link href="/build-a-tank?type=ul142" className="btn-outline">CONFIGURE YOUR TANK</Link>
              </div>
            </div>
            <div className="space-y-4">
              {/* Spec summary cards */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Capacity Range', val: '100 – 20,000+ gal' },
                  { label: 'Lead Time', val: '2–4 weeks' },
                  { label: 'Certification', val: 'UL 142' },
                ].map((s) => (
                  <div key={s.label} className="border border-steel-700 bg-steel-950 p-3 text-center">
                    <p className="text-steel-500 font-mono text-xs mb-1">{s.label}</p>
                    <p className="font-display text-white text-sm font-bold">{s.val}</p>
                  </div>
                ))}
              </div>
              <div className="border border-brand-700/40 bg-brand-900/10 p-5">
                <p className="text-brand-300 font-mono text-xs mb-3">STANDARD EQUIPMENT INCLUDED</p>
                <div className="grid grid-cols-2 gap-y-1.5">
                  {standardEquipment.slice(0, 6).map((e) => (
                    <div key={e} className="flex items-center gap-1.5 text-steel-300 text-xs">
                      <CheckCircle size={10} className="text-brand-500 shrink-0" />
                      {e}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Spec table */}
            <div>
              <div className="section-label mb-4">Dimensions & Weights</div>
              <h2 className="font-display text-3xl text-white font-bold mb-6">STANDARD TANK SPECIFICATIONS</h2>
              <div className="overflow-x-auto border border-steel-700">
                <table className="w-full spec-table">
                  <thead>
                    <tr>
                      <th>Capacity (gal)</th>
                      <th>Diameter</th>
                      <th>Length</th>
                      <th>Approx. Weight</th>
                      <th>Shell</th>
                      <th>Heads</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specs.map((s) => (
                      <tr key={s.cap}>
                        <td className="font-display font-bold text-brand-400">{s.cap}</td>
                        <td className="font-mono">{s.dia}</td>
                        <td className="font-mono">{s.len}</td>
                        <td className="font-mono">{s.weight}</td>
                        <td className="font-mono">{s.shell}</td>
                        <td className="font-mono">{s.heads}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-steel-500 text-xs font-mono mt-2">* Specifications are for single-wall horizontal tanks on saddle supports. Larger sizes and vertical tanks available. Contact us for custom specs.</p>
            </div>

            {/* Equipment */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-steel-700 bg-steel-900 p-6">
                <h3 className="font-display text-white font-bold mb-4">STANDARD EQUIPMENT</h3>
                <ul className="space-y-2">
                  {standardEquipment.map((e) => (
                    <li key={e} className="flex items-start gap-2 text-steel-300 text-sm">
                      <CheckCircle size={12} className="text-brand-500 mt-0.5 shrink-0" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-steel-700 bg-steel-900 p-6">
                <h3 className="font-display text-white font-bold mb-4">OPTIONAL ADD-ONS</h3>
                <ul className="space-y-2">
                  {optionalEquipment.map((e) => (
                    <li key={e} className="flex items-start gap-2 text-steel-300 text-sm">
                      <ArrowRight size={10} className="text-brand-500 mt-1 shrink-0" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* SEO text block */}
            <div className="prose prose-invert prose-sm max-w-none space-y-4">
              <h2 className="font-display text-3xl text-white font-bold">About UL 142 Fuel Storage Tanks</h2>
              <p className="text-steel-400 leading-relaxed">
                UL 142 is the Underwriters Laboratories standard for aboveground flammable liquid tanks. Hughes Tank Company manufactures UL 142 tanks for diesel, gasoline, jet fuel, bio-diesel, ethanol blends, lube oil, and other petroleum products. Our tanks comply with NFPA 30, NFPA 30A, IFC, and local fire codes.
              </p>
              <p className="text-steel-400 leading-relaxed">
                Single-wall UL 142 tanks are the most economical option for locations with natural secondary containment or where regulations permit. Double-wall UL 142 tanks add an outer steel shell to provide built-in secondary containment — ideal for environmentally sensitive areas, commercial fueling stations, and bulk fuel terminals.
              </p>
              <p className="text-steel-400 leading-relaxed">
                All Hughes Tank UL 142 tanks are fabricated with robotic welding in our Venus, TX facility. Each tank is plumbed on our yard and air pressure tested at 5 PSI before shipment. We deliver throughout Texas and the entire United States.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Quote CTA */}
            <div className="border border-brand-700/50 bg-brand-900/10 p-5">
              <h3 className="font-display text-white font-bold mb-3">READY TO ORDER?</h3>
              <p className="text-steel-400 text-xs mb-4">Get a quote within 24 hours. Guaranteed.</p>
              <Link href="/quote?product=ul-142" className="btn-primary w-full justify-center text-xs py-3 mb-2">
                REQUEST A QUOTE
              </Link>
              <Link href="/build-a-tank?type=ul142" className="btn-outline w-full justify-center text-xs py-3 mb-2">
                BUILD & CONFIGURE
              </Link>
              <a href="tel:9723668684" className="btn-ghost w-full justify-center text-xs py-3">
                <Phone size={12} /> CALL US DIRECT
              </a>
            </div>

            {/* Resources */}
            <div className="border border-steel-700 bg-steel-900 p-5">
              <h3 className="font-display text-white font-bold mb-4">RESOURCES</h3>
              <div className="space-y-2">
                {[
                  { label: 'UL 142 Spec Sheet (PDF)', href: '/resources/ul142-spec.pdf' },
                  { label: 'UL 142 Dimensional Drawings', href: '/resources/ul142-drawings.pdf' },
                  { label: 'Installation Manual', href: '/resources/ul142-install.pdf' },
                  { label: 'Compliance Guide', href: '/resources/compliance' },
                ].map((r) => (
                  <a key={r.href} href={r.href} className="flex items-center gap-2 text-steel-400 hover:text-brand-400 text-xs font-mono transition-colors">
                    <Download size={11} /> {r.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Related products */}
            <div className="border border-steel-700 bg-steel-900 p-5">
              <h3 className="font-display text-white font-bold mb-4">RELATED PRODUCTS</h3>
              <div className="space-y-3">
                {relatedProducts.map((r) => (
                  <Link key={r.href} href={r.href} className="block p-3 border border-steel-800 hover:border-brand-700/50 transition-colors group">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-display text-white text-sm group-hover:text-brand-400 transition-colors">{r.name}</span>
                      <span className="tag-cert">{r.cert}</span>
                    </div>
                    <p className="text-steel-400 text-xs">{r.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
