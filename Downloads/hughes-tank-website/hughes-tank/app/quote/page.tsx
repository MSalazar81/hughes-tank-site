import type { Metadata } from 'next';
import { CheckCircle } from 'lucide-react';
import { QuickQuoteForm } from '@/components/sections/QuickQuoteForm';

export const metadata: Metadata = {
  title: 'Request a Quote | Hughes Tank Company',
  description: 'Request a quote for custom steel fuel storage tanks. Hughes Tank Company responds within 24 hours. UL 142, Fireguard®, Flameshield®, Farm Tanks, and more.',
};

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-steel-950">
      <div className="bg-steel-900 border-b border-steel-800 py-14">
        <div className="max-w-4xl mx-auto px-4">
          <div className="section-label mb-3">Fast Response Guaranteed</div>
          <h1 className="font-display text-6xl text-white font-bold mb-3">REQUEST A QUOTE</h1>
          <p className="text-steel-400 text-lg">We respond to every quote request within 24 hours. Tell us about your project below.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-14">
        <div className="grid lg:grid-cols-3 gap-8">
          <div>
            <h2 className="font-display text-xl text-white font-bold mb-4">WHAT HAPPENS NEXT?</h2>
            <div className="space-y-4">
              {[
                { n: '01', title: 'Submit Your Request', desc: 'Fill out the form with your project details.' },
                { n: '02', title: 'We Review', desc: 'Our team reviews your requirements within 24 hours.' },
                { n: '03', title: 'You Get Pricing', desc: 'We send a detailed quote with pricing and lead time.' },
                { n: '04', title: 'Confirm & Build', desc: 'Confirm your order and we start manufacturing.' },
              ].map((s) => (
                <div key={s.n} className="flex gap-3">
                  <div className="w-7 h-7 bg-brand-500 text-white font-mono text-xs flex items-center justify-center shrink-0 font-bold">{s.n}</div>
                  <div>
                    <p className="font-display text-white text-sm font-semibold">{s.title}</p>
                    <p className="text-steel-400 text-xs mt-0.5">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 border border-brand-700/40 bg-brand-900/10">
              <p className="text-brand-300 font-mono text-xs mb-2">PREFER TO CALL?</p>
              <a href="tel:9723668684" className="font-display text-white text-xl font-bold hover:text-brand-400 transition-colors">
                972-366-8684
              </a>
              <p className="text-steel-500 text-xs mt-1 font-mono">Mon–Fri 8am–4:30pm CST</p>
            </div>
          </div>
          <div className="lg:col-span-2">
            <QuickQuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
}
