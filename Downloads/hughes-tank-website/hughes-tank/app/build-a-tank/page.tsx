'use client';
import { useState } from 'react';
import { ArrowRight, Check, ChevronRight, Send, RotateCcw } from 'lucide-react';

type Config = {
  type: string;
  capacity: string;
  wall: string;
  orientation: string;
  liquid: string;
  pump: string;
  meter: string;
  vent: string;
  manhole: string;
  ladders: string;
  color: string;
  quantity: number;
};

const initialConfig: Config = {
  type: '',
  capacity: '',
  wall: 'single',
  orientation: 'horizontal',
  liquid: 'diesel',
  pump: 'none',
  meter: 'none',
  vent: 'standard',
  manhole: '24-inch',
  ladders: 'none',
  color: 'red-oxide',
  quantity: 1,
};

const tankTypes = [
  { id: 'ul142', label: 'UL 142', desc: 'Aboveground steel', cert: 'UL 142' },
  { id: 'fireguard', label: 'Fireguard®', desc: '2-hr fire rated', cert: 'UL 2085' },
  { id: 'flameshield', label: 'Flameshield®', desc: 'Secondary containment', cert: 'STI-P3' },
  { id: 'farm', label: 'Farm Tank', desc: 'Agricultural use', cert: 'UL 142' },
];

const capacities = ['500', '1,000', '2,000', '4,000', '5,000', '8,000', '10,000', '12,000', '15,000', '20,000'];
const pumps = [
  { id: 'none', label: 'No Pump' },
  { id: 'fill-rite-15gpm', label: 'Fill-Rite 15 GPM' },
  { id: 'fill-rite-30gpm', label: 'Fill-Rite 30 GPM' },
  { id: 'tuthill-15gpm', label: 'Tuthill 15 GPM' },
  { id: 'submersible', label: 'Submersible Pump' },
];
const meters = [
  { id: 'none', label: 'No Meter' },
  { id: 'oval-gear', label: 'Oval Gear Meter' },
  { id: 'digital', label: 'Digital Meter' },
  { id: 'blend', label: 'Blend Meter' },
];

const specMap: Record<string, Record<string, { dims: string; weight: string; shell: string }>> = {
  ul142: {
    '500': { dims: '48" Dia × 63" L', weight: '680 lbs', shell: '10 gauge' },
    '1,000': { dims: '48" Dia × 119" L', weight: '1,050 lbs', shell: '10 gauge' },
    '2,000': { dims: '64" Dia × 119" L', weight: '1,820 lbs', shell: '7 gauge' },
    '5,000': { dims: '96" Dia × 119" L', weight: '3,900 lbs', shell: '5 gauge' },
    '10,000': { dims: '120" Dia × 143" L', weight: '7,200 lbs', shell: '3/16"' },
    '20,000': { dims: '120" Dia × 284" L', weight: '12,800 lbs', shell: '1/4"' },
  },
};

function estimatePrice(cfg: Config): number {
  if (!cfg.type || !cfg.capacity) return 0;
  const base: Record<string, number> = {
    ul142: 2800,
    fireguard: 7500,
    flameshield: 6200,
    farm: 2200,
  };
  const capMult: Record<string, number> = {
    '500': 0.5, '1,000': 0.75, '2,000': 1.0, '4,000': 1.4, '5,000': 1.7,
    '8,000': 2.4, '10,000': 2.9, '12,000': 3.4, '15,000': 4.1, '20,000': 5.4,
  };
  let price = (base[cfg.type] || 3000) * (capMult[cfg.capacity] || 1);
  if (cfg.wall === 'double') price *= 1.35;
  if (cfg.pump !== 'none') price += cfg.pump.includes('30gpm') ? 950 : 650;
  if (cfg.meter !== 'none') price += 380;
  if (cfg.ladders !== 'none') price += 450;
  return Math.round(price * cfg.quantity);
}

export default function BuildATankPage() {
  const [config, setConfig] = useState<Config>(initialConfig);
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const set = (key: keyof Config, val: string | number) =>
    setConfig((prev) => ({ ...prev, [key]: val }));

  const price = estimatePrice(config);
  const specs = config.type && config.capacity ? specMap[config.type]?.[config.capacity] : null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-steel-950 pt-4">
      {/* Header */}
      <div className="bg-steel-900 border-b border-steel-800 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-label mb-3">Interactive Configurator</div>
          <h1 className="font-display text-5xl text-white font-bold">
            BUILD YOUR TANK
          </h1>
          <p className="text-steel-400 mt-2">Configure your custom tank and get real specs + a quote request.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Configurator */}
          <div className="lg:col-span-2 space-y-8">
            {/* Step 1: Tank Type */}
            <div className="border border-steel-700 bg-steel-900 p-6">
              <h2 className="font-display text-xl text-white font-bold mb-1 flex items-center gap-2">
                <span className="w-6 h-6 bg-brand-500 text-white text-xs font-mono flex items-center justify-center font-bold">1</span>
                TANK TYPE
              </h2>
              <p className="text-steel-500 text-xs font-mono mb-4">Select your certification requirement</p>
              <div className="grid grid-cols-2 gap-3">
                {tankTypes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => set('type', t.id)}
                    className={`p-4 border text-left transition-all ${
                      config.type === t.id
                        ? 'border-brand-500 bg-brand-900/20'
                        : 'border-steel-700 hover:border-steel-500 bg-steel-950'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-display text-white font-semibold">{t.label}</p>
                        <p className="text-steel-400 text-xs">{t.desc}</p>
                      </div>
                      {config.type === t.id && <Check size={14} className="text-brand-500 mt-0.5" />}
                    </div>
                    <span className="tag-cert mt-2 inline-block">{t.cert}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Capacity */}
            <div className="border border-steel-700 bg-steel-900 p-6">
              <h2 className="font-display text-xl text-white font-bold mb-1 flex items-center gap-2">
                <span className="w-6 h-6 bg-brand-500 text-white text-xs font-mono flex items-center justify-center font-bold">2</span>
                CAPACITY
              </h2>
              <p className="text-steel-500 text-xs font-mono mb-4">Select tank capacity in gallons</p>
              <div className="grid grid-cols-5 gap-2">
                {capacities.map((cap) => (
                  <button
                    key={cap}
                    onClick={() => set('capacity', cap)}
                    className={`py-2 px-1 text-center border text-sm font-mono transition-all ${
                      config.capacity === cap
                        ? 'border-brand-500 bg-brand-900/20 text-brand-300'
                        : 'border-steel-700 hover:border-steel-500 text-steel-400'
                    }`}
                  >
                    {cap}
                    <span className="block text-xs opacity-60">gal</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Configuration */}
            <div className="border border-steel-700 bg-steel-900 p-6">
              <h2 className="font-display text-xl text-white font-bold mb-1 flex items-center gap-2">
                <span className="w-6 h-6 bg-brand-500 text-white text-xs font-mono flex items-center justify-center font-bold">3</span>
                CONFIGURATION
              </h2>
              <p className="text-steel-500 text-xs font-mono mb-4">Walls, orientation, and liquid type</p>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <label className="block text-steel-400 text-xs font-mono tracking-wide mb-2">WALL TYPE</label>
                  <div className="space-y-2">
                    {['single', 'double'].map((w) => (
                      <button key={w} onClick={() => set('wall', w)}
                        className={`w-full p-2 border text-sm text-left font-mono transition-all capitalize ${
                          config.wall === w ? 'border-brand-500 bg-brand-900/20 text-brand-300' : 'border-steel-700 text-steel-400 hover:border-steel-500'
                        }`}>
                        {w}-wall
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-steel-400 text-xs font-mono tracking-wide mb-2">ORIENTATION</label>
                  <div className="space-y-2">
                    {['horizontal', 'vertical'].map((o) => (
                      <button key={o} onClick={() => set('orientation', o)}
                        className={`w-full p-2 border text-sm text-left font-mono transition-all capitalize ${
                          config.orientation === o ? 'border-brand-500 bg-brand-900/20 text-brand-300' : 'border-steel-700 text-steel-400 hover:border-steel-500'
                        }`}>
                        {o}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-steel-400 text-xs font-mono tracking-wide mb-2">STORED LIQUID</label>
                  <select value={config.liquid} onChange={(e) => set('liquid', e.target.value)} className="input-field text-xs">
                    <option value="diesel">Diesel</option>
                    <option value="gasoline">Gasoline</option>
                    <option value="jet-fuel">Jet Fuel</option>
                    <option value="bio-diesel">Bio-Diesel</option>
                    <option value="ethanol">Ethanol Blend</option>
                    <option value="waste-oil">Waste Oil</option>
                    <option value="lube-oil">Lube Oil</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 4: Accessories */}
            <div className="border border-steel-700 bg-steel-900 p-6">
              <h2 className="font-display text-xl text-white font-bold mb-1 flex items-center gap-2">
                <span className="w-6 h-6 bg-brand-500 text-white text-xs font-mono flex items-center justify-center font-bold">4</span>
                PUMPING & ACCESSORIES
              </h2>
              <p className="text-steel-500 text-xs font-mono mb-4">Optional add-ons</p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-steel-400 text-xs font-mono tracking-wide mb-2">PUMP PACKAGE</label>
                  <div className="space-y-1">
                    {pumps.map((p) => (
                      <button key={p.id} onClick={() => set('pump', p.id)}
                        className={`w-full p-2 border text-xs text-left font-mono transition-all ${
                          config.pump === p.id ? 'border-brand-500 bg-brand-900/20 text-brand-300' : 'border-steel-700 text-steel-400 hover:border-steel-500'
                        }`}>
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-steel-400 text-xs font-mono tracking-wide mb-2">FLOW METER</label>
                  <div className="space-y-1">
                    {meters.map((m) => (
                      <button key={m.id} onClick={() => set('meter', m.id)}
                        className={`w-full p-2 border text-xs text-left font-mono transition-all ${
                          config.meter === m.id ? 'border-brand-500 bg-brand-900/20 text-brand-300' : 'border-steel-700 text-steel-400 hover:border-steel-500'
                        }`}>
                        {m.label}
                      </button>
                    ))}
                  </div>
                  <label className="block text-steel-400 text-xs font-mono tracking-wide mb-2 mt-4">QUANTITY</label>
                  <input type="number" min="1" max="50" value={config.quantity}
                    onChange={(e) => set('quantity', parseInt(e.target.value) || 1)}
                    className="input-field text-xs" />
                </div>
              </div>
            </div>

            {/* Quote Form */}
            {submitted ? (
              <div className="border border-brand-700/50 bg-brand-900/20 p-10 text-center">
                <Check size={40} className="text-brand-500 mx-auto mb-4" />
                <h3 className="font-display text-2xl text-white font-bold mb-2">BUILD SHEET SUBMITTED!</h3>
                <p className="text-steel-400 text-sm">We'll review your configuration and respond with pricing within 24 hours.</p>
              </div>
            ) : (
              <div className="border border-steel-700 bg-steel-900 p-6">
                <h2 className="font-display text-xl text-white font-bold mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 bg-brand-500 text-white text-xs font-mono flex items-center justify-center font-bold">5</span>
                  SEND YOUR BUILD SHEET
                </h2>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-3 gap-3">
                    <input required placeholder="Your Name *" value={name} onChange={(e) => setName(e.target.value)} className="input-field text-sm" />
                    <input required type="email" placeholder="Email Address *" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field text-sm" />
                    <input placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="input-field text-sm" />
                  </div>
                  <textarea rows={2} className="input-field resize-none text-sm" placeholder="Additional notes or requirements..." />
                  <button type="submit" disabled={!config.type || !config.capacity} className="btn-primary w-full justify-center py-3">
                    SUBMIT BUILD SHEET & REQUEST QUOTE <Send size={14} />
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Live Spec Sheet / Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="border border-steel-700 bg-steel-900 p-6">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-steel-700">
                  <h3 className="font-display text-white font-bold">YOUR CONFIGURATION</h3>
                  <button onClick={() => setConfig(initialConfig)} className="text-steel-500 hover:text-brand-400 transition-colors">
                    <RotateCcw size={14} />
                  </button>
                </div>

                <div className="space-y-3">
                  {[
                    { label: 'TANK TYPE', value: tankTypes.find(t => t.id === config.type)?.label || '—' },
                    { label: 'CAPACITY', value: config.capacity ? `${config.capacity} gal` : '—' },
                    { label: 'WALL', value: config.wall ? `${config.wall}-wall` : '—' },
                    { label: 'ORIENTATION', value: config.orientation },
                    { label: 'LIQUID', value: config.liquid },
                    { label: 'PUMP', value: pumps.find(p => p.id === config.pump)?.label || '—' },
                    { label: 'METER', value: meters.find(m => m.id === config.meter)?.label || '—' },
                    { label: 'QUANTITY', value: config.quantity.toString() },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-start justify-between">
                      <span className="text-steel-500 font-mono text-xs">{label}</span>
                      <span className="text-white text-xs font-semibold capitalize text-right">{value}</span>
                    </div>
                  ))}
                </div>

                {specs && (
                  <>
                    <div className="border-t border-steel-700 mt-4 pt-4">
                      <p className="text-brand-400 font-mono text-xs tracking-widest mb-3">TANK SPECS</p>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-steel-500 font-mono text-xs">DIMENSIONS</span>
                          <span className="text-white text-xs font-mono">{specs.dims}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-steel-500 font-mono text-xs">SHELL</span>
                          <span className="text-white text-xs font-mono">{specs.shell}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-steel-500 font-mono text-xs">APPROX WT</span>
                          <span className="text-white text-xs font-mono">{specs.weight}</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {price > 0 && (
                  <div className="border-t border-steel-700 mt-4 pt-4">
                    <p className="text-steel-500 font-mono text-xs mb-1">ESTIMATED STARTING PRICE</p>
                    <p className="font-display text-3xl text-brand-500 font-bold">
                      ${price.toLocaleString()}
                    </p>
                    <p className="text-steel-500 text-xs mt-1 font-mono">
                      *Estimate only. Final price confirmed with quote.
                    </p>
                  </div>
                )}
              </div>

              <div className="border border-brand-700/40 bg-brand-900/10 p-4">
                <p className="text-brand-300 text-xs font-mono mb-2">💡 PRO TIP</p>
                <p className="text-steel-400 text-xs leading-relaxed">
                  Not sure what you need? Call us and we'll spec the right tank for your application in minutes.
                </p>
                <a href="tel:9723668684" className="btn-primary w-full justify-center mt-3 text-xs py-2">
                  CALL 972-366-8684
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
