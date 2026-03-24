import Link from 'next/link';
import { ArrowRight, HelpCircle } from 'lucide-react';

const useCases = [
  { icon: '⛽', label: 'Fueling Operations', best: 'UL 142 or Fireguard®', href: '/tank-finder?use=fueling' },
  { icon: '🏗️', label: 'Construction Sites', best: 'UL 142 Double-Wall', href: '/tank-finder?use=construction' },
  { icon: '🌾', label: 'Farm & Ranch', best: 'Farm Tank UL 142', href: '/tank-finder?use=farm' },
  { icon: '🔥', label: 'High Fire-Risk Areas', best: 'Fireguard® UL-2085', href: '/tank-finder?use=fire-risk' },
  { icon: '🏢', label: 'Commercial Facilities', best: 'Flameshield® / UL 2085', href: '/tank-finder?use=commercial' },
  { icon: '🏭', label: 'Industrial / Bulk', best: 'Custom UL 142 or ASME', href: '/tank-finder?use=industrial' },
];

export function TankFinderTeaser() {
  return (
    <section className="py-20 bg-steel-900 border-y border-steel-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/3">
            <div className="section-label mb-4">Interactive Tool</div>
            <h2 className="font-display text-5xl text-white font-bold mb-4">
              NOT SURE<br />
              <span className="text-brand-500">WHICH TANK?</span>
            </h2>
            <p className="text-steel-400 leading-relaxed mb-6">
              Our Tank Finder tool asks you 5 simple questions about your application, location, and requirements — then recommends the right tank with specs and pricing guidance.
            </p>
            <Link href="/tank-finder" className="btn-primary">
              LAUNCH TANK FINDER <ArrowRight size={16} />
            </Link>
          </div>

          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-3">
            {useCases.map((u) => (
              <Link
                key={u.label}
                href={u.href}
                className="group p-4 border border-steel-700 bg-steel-950/50 hover:border-brand-500/50 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span className="text-3xl block mb-2">{u.icon}</span>
                <p className="font-display text-white text-sm font-semibold mb-1 group-hover:text-brand-400 transition-colors">
                  {u.label}
                </p>
                <p className="text-steel-500 text-xs font-mono">{u.best}</p>
                <div className="mt-2 flex items-center gap-1 text-brand-500 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono">
                  SEE RECOMMENDATION <ArrowRight size={10} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
