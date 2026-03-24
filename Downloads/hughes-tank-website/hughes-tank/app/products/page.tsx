import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Steel Fuel Storage Tanks | UL 142, Fireguard®, Flameshield®, Farm Tanks',
  description: 'Hughes Tank Company manufactures UL 142, Fireguard® UL-2085, Flameshield®, Permatank®, ACT-100-U, and farm fuel storage tanks. Custom builds, fast delivery, Venus TX.',
};

const products = [
  {
    slug: 'ul-142',
    name: 'UL 142',
    subtitle: 'Aboveground Steel Fuel Storage Tanks',
    cert: 'UL Listed 142',
    desc: 'Our UL 142 aboveground steel tanks are the industry workhorse for storing flammable and combustible liquids. Available in single-wall and double-wall construction, horizontal and vertical orientations, and a wide range of capacities from 100 to 20,000+ gallons.',
    features: ['Single & double-wall options', 'Horizontal or vertical', '100 – 20,000+ gallons', 'Custom pumping packages', 'Spill containment options', 'Primer coat standard'],
    sizes: '100 – 20,000 gal',
    lead: '2–4 weeks',
    icon: '🛢️',
    color: 'from-blue-900/30 to-blue-950/10',
    border: 'border-blue-700/40',
  },
  {
    slug: 'fireguard',
    name: 'Fireguard®',
    subtitle: 'UL-2085 Two-Hour Fire-Rated Tanks',
    cert: 'UL Listed 2085',
    desc: 'The Fireguard® tank provides two-hour fire resistance per UL 2085. The annular space between inner and outer steel shells is filled with a lightweight thermal mass insulation providing protection for high-risk installations, airports, and government facilities.',
    features: ['2-hour fire rated (UL 2085)', 'Thermal insulation fill', 'Secondary containment', 'Interstitial monitoring ports', 'NFPA 30 & IFC compliant', 'Used by military & airports'],
    sizes: '1,000 – 20,000 gal',
    lead: '4–6 weeks',
    icon: '🔥',
    color: 'from-red-900/30 to-red-950/10',
    border: 'border-red-700/40',
  },
  {
    slug: 'flameshield',
    name: 'Flameshield®',
    subtitle: 'STI-P3® Secondary Containment Tanks',
    cert: 'STI-P3 Listed',
    desc: 'The Flameshield® is an STI-P3 listed double-wall aboveground tank. The interstitial space provides secondary containment for the primary tank contents. Ideal for locations requiring environmental protection, such as near water bodies or sensitive soils.',
    features: ['STI-P3 certified', 'Double-wall secondary containment', 'Interstitial monitoring', 'Steel or composite outer shell', 'Compatible with ATG systems', 'EPA secondary containment compliant'],
    sizes: '500 – 15,000 gal',
    lead: '4–6 weeks',
    icon: '🛡️',
    color: 'from-orange-900/30 to-orange-950/10',
    border: 'border-orange-700/40',
  },
  {
    slug: 'permatank',
    name: 'Permatank®',
    subtitle: 'ACT-100 Underground Steel Tanks',
    cert: 'STI ACT-100',
    desc: 'Permatank® is an STI ACT-100 listed underground steel tank with a factory-applied fiberglass reinforced polyester (FRP) outer coating for corrosion protection. Designed for underground storage of petroleum products.',
    features: ['ACT-100 certified', 'Fiberglass FRP outer coating', 'Cathodic protection compatible', 'Double-wall option available', 'EPA underground compliant', 'Up to 30,000 gallons'],
    sizes: '500 – 30,000 gal',
    lead: '6–8 weeks',
    icon: '⚙️',
    color: 'from-green-900/30 to-green-950/10',
    border: 'border-green-700/40',
  },
  {
    slug: 'act100u',
    name: 'ACT-100-U',
    subtitle: 'Underground Fiberglass-Clad Steel',
    cert: 'STI ACT-100-U',
    desc: 'The ACT-100-U underground tank is STI-listed for storage of petroleum products and ethanol blends. Features a fiberglass reinforced polyester outer jacket over a steel primary tank for maximum corrosion resistance.',
    features: ['ACT-100-U STI certified', 'FRP outer jacket', 'Ethanol blend compatible', 'High-pressure leak testing', 'Integral tight-fill adapters', 'Available in double-wall'],
    sizes: '1,000 – 30,000 gal',
    lead: '6–8 weeks',
    icon: '🏗️',
    color: 'from-purple-900/30 to-purple-950/10',
    border: 'border-purple-700/40',
  },
  {
    slug: 'farm-tanks',
    name: 'Farm Tanks',
    subtitle: 'Agricultural & Rural Fuel Storage',
    cert: 'UL 142',
    desc: 'Hughes Tank Company farm tanks are purpose-built for agricultural operations, ranches, and rural fuel storage. UL 142 listed, tough, and affordable — with pump and meter packages to keep your operation running.',
    features: ['UL 142 listed', 'Leg or saddle mounts', '500 – 5,000 gallon range', 'Pump & meter packages', 'Transfer hose included', 'Primer coat standard'],
    sizes: '500 – 5,000 gal',
    lead: '2–3 weeks',
    icon: '🌾',
    color: 'from-yellow-900/30 to-yellow-950/10',
    border: 'border-yellow-700/40',
  },
  {
    slug: 'containment-pans',
    name: 'Containment Pans',
    subtitle: 'Secondary Spill Containment',
    cert: 'Custom Fabricated',
    desc: 'Steel containment pans provide secondary spill containment under aboveground storage tanks. Custom fabricated to fit any tank footprint and comply with EPA spill prevention regulations. Available with drain ports and sumps.',
    features: ['Custom sized to your tank', 'Welded steel construction', 'Drain ports available', 'Primer coat standard', 'EPA SPCC compliant', 'Forklift pocket options'],
    sizes: 'Custom to order',
    lead: '2–4 weeks',
    icon: '🔩',
    color: 'from-steel-800/30 to-steel-900/10',
    border: 'border-steel-600/40',
  },
  {
    slug: 'accessories',
    name: 'Accessories',
    subtitle: 'Pumps, Meters, Vents & More',
    cert: 'Various',
    desc: 'Hughes Tank Company supplies and installs a complete range of tank accessories. From Fill-Rite transfer pumps and flow meters to emergency vents, spill containers, overfill alarms, and more — we configure your tank as a complete turnkey system.',
    features: ['Fill-Rite & Tuthill pumps', 'Oval gear & digital meters', 'Emergency & normal vents', 'Automatic nozzles', 'Level gauges & alarms', 'Hoses & fittings'],
    sizes: 'N/A',
    lead: '1–2 weeks',
    icon: '🔧',
    color: 'from-steel-700/30 to-steel-800/10',
    border: 'border-steel-600/40',
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-steel-950">
      {/* Header */}
      <div className="bg-steel-900 border-b border-steel-800 py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-label mb-3">What We Build</div>
          <h1 className="font-display text-6xl text-white font-bold mb-3">
            OUR PRODUCTS
          </h1>
          <p className="text-steel-400 text-lg max-w-2xl">
            UL-listed and STI-certified steel fuel storage tanks for every application. All manufactured in Venus, TX with robotic precision.
          </p>
        </div>
      </div>

      {/* Product listing */}
      <div className="max-w-7xl mx-auto px-4 py-14 space-y-6">
        {products.map((p, i) => (
          <div key={p.slug} className={`border ${p.border} bg-gradient-to-r ${p.color} p-8 group hover:border-brand-500/40 transition-all duration-300`}>
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">{p.icon}</span>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h2 className="font-display text-3xl text-white font-bold">{p.name}</h2>
                      <span className="tag-cert">{p.cert}</span>
                    </div>
                    <p className="text-brand-400 text-sm font-mono tracking-wide">{p.subtitle}</p>
                  </div>
                </div>
                <p className="text-steel-300 leading-relaxed mb-5">{p.desc}</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {p.features.map((f) => (
                    <div key={f} className="flex items-center gap-1.5 text-steel-300 text-xs">
                      <CheckCircle size={11} className="text-brand-500 shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="border border-steel-700 bg-steel-950/50 p-4 space-y-3">
                  <div>
                    <p className="text-steel-500 font-mono text-xs">AVAILABLE SIZES</p>
                    <p className="text-white font-display text-lg font-semibold">{p.sizes}</p>
                  </div>
                  <div>
                    <p className="text-steel-500 font-mono text-xs">TYPICAL LEAD TIME</p>
                    <p className="text-white font-display text-lg font-semibold">{p.lead}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Link href={`/products/${p.slug}`} className="btn-primary w-full justify-center text-xs py-3">
                    FULL SPECS <ArrowRight size={12} />
                  </Link>
                  <Link href={`/build-a-tank?type=${p.slug}`} className="btn-outline w-full justify-center text-xs py-3">
                    CONFIGURE & PRICE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-steel-900 border-t border-steel-800 py-14">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl text-white font-bold mb-3">NEED HELP CHOOSING?</h2>
          <p className="text-steel-400 mb-6">Use our Tank Finder tool or call us directly — we'll spec the right tank in minutes.</p>
          <div className="flex gap-3 justify-center">
            <Link href="/tank-finder" className="btn-primary">TANK FINDER TOOL</Link>
            <a href="tel:9723668684" className="btn-outline">CALL 972-366-8684</a>
          </div>
        </div>
      </div>
    </div>
  );
}
