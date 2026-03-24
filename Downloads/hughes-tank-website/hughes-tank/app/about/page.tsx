import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Award, CheckCircle, Users, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Hughes Tank Company | Custom Steel Tank Manufacturer | Venus, TX',
  description: 'Hughes Tank Company is a custom fuel storage tank manufacturer in Venus, TX. UL listed, STI certified, robotic fabrication, serving the US since our founding.',
};

const certifications = [
  { name: 'Underwriters Laboratories', abbr: 'UL 142', desc: 'Aboveground tanks' },
  { name: 'Underwriters Laboratories', abbr: 'UL 2085', desc: 'Fire-rated tanks' },
  { name: 'Steel Tank Institute', abbr: 'STI-P3', desc: 'Secondary containment' },
  { name: 'Steel Tank Institute', abbr: 'ACT-100', desc: 'Underground tanks' },
  { name: 'NFPA Compliant', abbr: 'NFPA 30', desc: 'Flammable liquids code' },
  { name: 'EPA Compliant', abbr: 'SPCC', desc: 'Spill prevention' },
];

const values = [
  { icon: Zap, title: 'Robotic Precision', desc: 'We invested in state-of-the-art robotic welding to ensure every seam is consistent, strong, and above code — every time.' },
  { icon: Award, title: 'Quality Above Standard', desc: 'UL listed, STI certified, and air-tested at 5 PSI. We don\'t ship a tank that we wouldn\'t put our name on.' },
  { icon: CheckCircle, title: 'Fast Lead Times', desc: 'Our streamlined manufacturing process means you get your tank faster than with most competitors. Time is money.' },
  { icon: Users, title: 'Customer First', desc: 'We respond within 24 hours. We answer the phone. We make sure you have exactly what you need before it ships.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-steel-950">
      <div className="bg-steel-900 border-b border-steel-800 py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-label mb-3">Our Story</div>
          <h1 className="font-display text-6xl text-white font-bold mb-4">ABOUT HUGHES TANK</h1>
          <p className="text-steel-400 text-lg max-w-2xl">
            Built on quality, driven by innovation, and rooted in Texas.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="py-16 border-b border-steel-800">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="section-label mb-4">Our Mission</div>
            <h2 className="font-display text-4xl text-white font-bold mb-4">INNOVATORS OF THE HIGHEST STANDARD</h2>
            <p className="text-steel-300 text-lg leading-relaxed mb-4">
              Hughes Tank Company was founded on a single principle: manufacture the best steel fuel storage tank in the industry, period. We combine cutting-edge robotic welding technology with quality domestic steel to produce tanks that exceed UL specifications on every order.
            </p>
            <p className="text-steel-400 leading-relaxed">
              Our facility in Venus, TX is equipped with the latest fabrication equipment. Every tank is plumbed, tested, and inspected before it leaves our yard. We're proud to serve customers across the United States with fast lead times and unmatched quality.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-5 border border-steel-700 bg-steel-900">
                <Icon size={22} className="text-brand-500 mb-3" />
                <h3 className="font-display text-white font-bold text-sm mb-2">{title}</h3>
                <p className="text-steel-400 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 border-b border-steel-800" id="certifications">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-label mb-4">Our Credentials</div>
          <h2 className="font-display text-4xl text-white font-bold mb-8">CERTIFICATIONS & COMPLIANCE</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {certifications.map((c) => (
              <div key={c.abbr} className="border border-steel-700 bg-steel-900 p-5">
                <span className="tag-cert mb-3 inline-block">{c.abbr}</span>
                <p className="font-display text-white font-bold text-sm">{c.name}</p>
                <p className="text-steel-400 text-xs mt-1">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility */}
      <section className="py-16 border-b border-steel-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-label mb-4">Our Facility</div>
          <h2 className="font-display text-4xl text-white font-bold mb-4">VENUS, TEXAS MANUFACTURING</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-steel-300 text-lg leading-relaxed mb-4">
                Located at 2900 N FM 157 in Venus, TX — just south of the DFW metroplex — our manufacturing facility is equipped with state-of-the-art robotic welding systems, plasma cutting tables, and roll forming equipment.
              </p>
              <p className="text-steel-400 leading-relaxed mb-6">
                Our production floor is organized for efficiency. Tanks flow through fabrication, fitting, plumbing, and testing in a streamlined process that gives us some of the fastest lead times in the industry.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { n: 'Robotic', label: 'Welding systems' },
                  { n: '5 PSI', label: 'Air pressure test' },
                  { n: '100%', label: 'Inspected before ship' },
                  { n: 'Same-day', label: 'Loading available' },
                ].map((s) => (
                  <div key={s.label} className="border border-steel-700 bg-steel-900 p-4 text-center">
                    <p className="font-display text-brand-500 text-2xl font-bold">{s.n}</p>
                    <p className="text-steel-400 text-xs mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-steel-700 bg-steel-900 p-6">
              <p className="font-mono text-brand-400 text-xs tracking-widest mb-4">FACILITY DETAILS</p>
              <dl className="space-y-3">
                {[
                  ['Address', '2900 N FM 157, Venus, TX 76084'],
                  ['Office Hours', 'Mon–Fri 8am – 4:30pm'],
                  ['Loading Hours', 'Mon–Fri 7am – 2:30pm'],
                  ['No Loading', '11:30am – 12:00pm'],
                  ['Phone', '972-366-8684'],
                  ['Email', 'sales@hughestank.com'],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-4 border-b border-steel-800 pb-2">
                    <dt className="text-steel-500 font-mono text-xs w-28 shrink-0">{k}</dt>
                    <dd className="text-steel-200 text-sm">{v}</dd>
                  </div>
                ))}
              </dl>
              <Link href="/contact" className="btn-primary w-full justify-center mt-6 text-xs">
                GET DIRECTIONS <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl text-white font-bold mb-4">READY TO WORK WITH US?</h2>
          <p className="text-steel-400 mb-6">Get a quote on your next tank project in 24 hours or less.</p>
          <div className="flex gap-3 justify-center">
            <Link href="/quote" className="btn-primary">REQUEST A QUOTE</Link>
            <Link href="/products" className="btn-outline">VIEW ALL PRODUCTS</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
