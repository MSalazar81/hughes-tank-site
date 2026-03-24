import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { QuickQuoteForm } from '@/components/sections/QuickQuoteForm';

export const metadata: Metadata = {
  title: 'Contact Hughes Tank Company | Venus, TX | 972-366-8684',
  description: 'Contact Hughes Tank Company for custom fuel storage tank quotes. 2900 N FM 157, Venus, TX 76084. Call 972-366-8684 or email sales@hughestank.com.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-steel-950">
      <div className="bg-steel-900 border-b border-steel-800 py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-label mb-3">Get In Touch</div>
          <h1 className="font-display text-6xl text-white font-bold">CONTACT US</h1>
          <p className="text-steel-400 mt-2 text-lg">We respond to all quote requests within 24 hours.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact info */}
          <div className="space-y-6">
            <div>
              <div className="section-label mb-4">Hughes Tank Company</div>
              <div className="space-y-4">
                {[
                  { Icon: MapPin, label: 'Address', lines: ['2900 N FM 157', 'Venus, TX 76084'] },
                  { Icon: Phone, label: 'Phone', lines: ['972-366-8684'] },
                  { Icon: Mail, label: 'Email', lines: ['sales@hughestank.com'] },
                ].map(({ Icon, label, lines }) => (
                  <div key={label} className="flex items-start gap-3 p-4 border border-steel-700 bg-steel-900">
                    <Icon size={16} className="text-brand-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-steel-500 font-mono text-xs mb-1">{label.toUpperCase()}</p>
                      {lines.map((l) => <p key={l} className="text-white text-sm">{l}</p>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-steel-700 bg-steel-900 p-5">
              <div className="flex items-center gap-2 mb-3">
                <Clock size={14} className="text-brand-500" />
                <p className="font-display text-white font-bold text-sm">HOURS OF OPERATION</p>
              </div>
              <div className="space-y-2 text-sm font-mono">
                <div className="flex justify-between text-steel-300">
                  <span>Mon – Fri (Office)</span>
                  <span>8am – 4:30pm</span>
                </div>
                <div className="flex justify-between text-steel-300">
                  <span>Mon – Fri (Loading)</span>
                  <span>7am – 2:30pm</span>
                </div>
                <p className="text-steel-500 text-xs pt-1">No loading 11:30am – 12:00pm</p>
                <div className="flex justify-between text-steel-500">
                  <span>Saturday – Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="border border-steel-700 overflow-hidden">
              <iframe
                title="Hughes Tank Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.0!2d-97.09!3d32.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDI1JzQ4LjAiTiA5N8KwMDUnMjQuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="220"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Quote form */}
          <div className="lg:col-span-2">
            <div className="section-label mb-4">Request a Quote</div>
            <h2 className="font-display text-3xl text-white font-bold mb-6">TELL US ABOUT YOUR PROJECT</h2>
            <QuickQuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
}
