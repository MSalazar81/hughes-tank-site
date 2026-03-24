'use client';
import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export function QuickQuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call — replace with actual form submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-brand-700/50 bg-brand-900/20 p-12 text-center">
        <CheckCircle size={48} className="text-brand-500 mx-auto mb-4" />
        <h3 className="font-display text-2xl text-white font-bold mb-2">QUOTE REQUEST RECEIVED</h3>
        <p className="text-steel-400 text-sm">We'll respond within 24 hours. Check your email for confirmation.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 border border-steel-700 bg-steel-900 p-6">
      <div className="flex items-center gap-2 mb-6 pb-4 border-b border-steel-700">
        <div className="w-2 h-2 bg-brand-500" />
        <span className="font-mono text-xs text-steel-400 tracking-widest uppercase">Quick Quote Request</span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-steel-400 text-xs font-mono tracking-wide mb-1.5">FIRST NAME *</label>
          <input type="text" required className="input-field" placeholder="John" />
        </div>
        <div>
          <label className="block text-steel-400 text-xs font-mono tracking-wide mb-1.5">LAST NAME *</label>
          <input type="text" required className="input-field" placeholder="Smith" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-steel-400 text-xs font-mono tracking-wide mb-1.5">EMAIL *</label>
          <input type="email" required className="input-field" placeholder="john@company.com" />
        </div>
        <div>
          <label className="block text-steel-400 text-xs font-mono tracking-wide mb-1.5">PHONE</label>
          <input type="tel" className="input-field" placeholder="555-000-0000" />
        </div>
      </div>

      <div>
        <label className="block text-steel-400 text-xs font-mono tracking-wide mb-1.5">COMPANY</label>
        <input type="text" className="input-field" placeholder="Your Company Name" />
      </div>

      <div>
        <label className="block text-steel-400 text-xs font-mono tracking-wide mb-1.5">TANK TYPE *</label>
        <select required className="input-field">
          <option value="">Select a tank type...</option>
          <option>UL 142 – Single Wall Aboveground</option>
          <option>UL 142 – Double Wall Aboveground</option>
          <option>Fireguard® UL-2085 (Fire Rated)</option>
          <option>Flameshield® (STI-P3)</option>
          <option>Permatank® Underground</option>
          <option>ACT-100-U Underground</option>
          <option>Farm Tank</option>
          <option>Containment Pan</option>
          <option>Not Sure – Need Help</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-steel-400 text-xs font-mono tracking-wide mb-1.5">CAPACITY (GALLONS)</label>
          <select className="input-field">
            <option value="">Select...</option>
            <option>500</option>
            <option>1,000</option>
            <option>2,000</option>
            <option>5,000</option>
            <option>10,000</option>
            <option>12,000</option>
            <option>15,000</option>
            <option>20,000</option>
            <option>Custom Size</option>
          </select>
        </div>
        <div>
          <label className="block text-steel-400 text-xs font-mono tracking-wide mb-1.5">QUANTITY</label>
          <input type="number" min="1" className="input-field" placeholder="1" />
        </div>
      </div>

      <div>
        <label className="block text-steel-400 text-xs font-mono tracking-wide mb-1.5">PROJECT DETAILS</label>
        <textarea rows={3} className="input-field resize-none" placeholder="Tell us about your project, special requirements, or questions..." />
      </div>

      <div>
        <label className="block text-steel-400 text-xs font-mono tracking-wide mb-1.5">HOW DID YOU HEAR ABOUT US?</label>
        <select className="input-field">
          <option value="">Select...</option>
          <option>Google Search</option>
          <option>Referral / Word of Mouth</option>
          <option>Social Media</option>
          <option>Trade Show</option>
          <option>Repeat Customer</option>
          <option>Other</option>
        </select>
      </div>

      <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-4 text-sm">
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            SUBMITTING...
          </span>
        ) : (
          <>SUBMIT QUOTE REQUEST <Send size={14} /></>
        )}
      </button>

      <p className="text-steel-500 text-xs text-center font-mono">
        We respond within 24 hours · No spam · Guaranteed
      </p>
    </form>
  );
}
