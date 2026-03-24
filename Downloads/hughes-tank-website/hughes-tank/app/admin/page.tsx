'use client';
import { useState } from 'react';
import { Plus, Edit2, Trash2, Eye, Package, MessageSquare, BarChart2, Settings, Upload, Check, X, ChevronDown } from 'lucide-react';

// ─── TYPES ───────────────────────────────────────────────────────────────────
type Tab = 'dashboard' | 'products' | 'quotes' | 'settings';
type Product = { id: string; name: string; category: string; price: number; sku: string; inStock: boolean; badge?: string };
type Quote = { id: string; name: string; email: string; phone: string; tankType: string; capacity: string; date: string; status: 'new' | 'reviewed' | 'quoted' | 'closed' };

// ─── SEED DATA ────────────────────────────────────────────────────────────────
const seedProducts: Product[] = [
  { id: '1', name: 'Fill-Rite FR1614 15 GPM Pump', category: 'pumps', price: 489, sku: 'FR-FR1614', inStock: true, badge: 'Best Seller' },
  { id: '2', name: 'Fill-Rite FR2401G 25 GPM Pump', category: 'pumps', price: 789, sku: 'FR-FR2401G', inStock: true },
  { id: '3', name: 'Oval Gear Inline Meter', category: 'meters', price: 349, sku: 'MET-OG-1', inStock: true },
  { id: '4', name: 'Digital LCD Flow Meter', category: 'meters', price: 279, sku: 'MET-DIG-1', inStock: true, badge: 'Popular' },
  { id: '5', name: '2" Emergency Vent', category: 'vents', price: 89, sku: 'VENT-EM-2', inStock: true },
  { id: '6', name: 'Automatic Shut-Off Nozzle 3/4"', category: 'nozzles', price: 79, sku: 'NOZ-AUTO-075', inStock: true, badge: 'Best Seller' },
];

const seedQuotes: Quote[] = [
  { id: 'Q-0042', name: 'Mike Danvers', email: 'mike@dfw-logistics.com', phone: '214-555-0182', tankType: 'Fireguard® UL-2085', capacity: '10,000 gal', date: '2026-03-24', status: 'new' },
  { id: 'Q-0041', name: 'Sarah Kowalski', email: 'sarah@southtxfuels.com', phone: '210-555-0390', tankType: 'UL 142 Double-Wall', capacity: '5,000 gal', date: '2026-03-23', status: 'reviewed' },
  { id: 'Q-0040', name: 'James Rodriguez', email: 'james@swconstruct.com', phone: '512-555-0271', tankType: 'Farm Tank', capacity: '2,000 gal', date: '2026-03-22', status: 'quoted' },
  { id: 'Q-0039', name: 'Linda Petrov', email: 'linda@texasfarm.net', phone: '325-555-0448', tankType: 'Flameshield®', capacity: '5,000 gal', date: '2026-03-21', status: 'closed' },
];

const statusColors: Record<Quote['status'], string> = {
  new: 'bg-brand-900/50 border-brand-700/50 text-brand-300',
  reviewed: 'bg-blue-900/50 border-blue-700/50 text-blue-300',
  quoted: 'bg-yellow-900/50 border-yellow-700/50 text-yellow-300',
  closed: 'bg-green-900/50 border-green-700/50 text-green-300',
};

// ─── PRODUCT FORM ─────────────────────────────────────────────────────────────
function ProductForm({ initial, onSave, onCancel }: { initial?: Partial<Product>; onSave: (p: Partial<Product>) => void; onCancel: () => void }) {
  const [form, setForm] = useState<Partial<Product>>(initial || { inStock: true });
  const set = (k: keyof Product, v: string | boolean | number) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <div className="border border-brand-700/50 bg-brand-900/10 p-6 mb-4">
      <h3 className="font-display text-white font-bold mb-4">{initial?.id ? 'EDIT PRODUCT' : 'ADD NEW PRODUCT'}</h3>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-steel-400 text-xs font-mono mb-1">PRODUCT NAME *</label>
          <input value={form.name || ''} onChange={(e) => set('name', e.target.value)} className="input-field text-sm" placeholder="e.g. Fill-Rite 15 GPM Pump" />
        </div>
        <div>
          <label className="block text-steel-400 text-xs font-mono mb-1">SKU *</label>
          <input value={form.sku || ''} onChange={(e) => set('sku', e.target.value)} className="input-field text-sm" placeholder="e.g. FR-FR1614" />
        </div>
        <div>
          <label className="block text-steel-400 text-xs font-mono mb-1">CATEGORY</label>
          <select value={form.category || ''} onChange={(e) => set('category', e.target.value)} className="input-field text-sm">
            <option value="">Select...</option>
            {['pumps','meters','nozzles','hoses','vents','gauges','fittings','monitoring'].map(c => <option key={c} value={c} className="capitalize">{c}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-steel-400 text-xs font-mono mb-1">PRICE ($)</label>
          <input type="number" value={form.price || ''} onChange={(e) => set('price', parseFloat(e.target.value))} className="input-field text-sm" placeholder="0.00" />
        </div>
        <div>
          <label className="block text-steel-400 text-xs font-mono mb-1">BADGE (optional)</label>
          <select value={form.badge || ''} onChange={(e) => set('badge', e.target.value)} className="input-field text-sm">
            <option value="">None</option>
            <option>Best Seller</option>
            <option>Popular</option>
            <option>New</option>
            <option>Low Stock</option>
          </select>
        </div>
        <div className="flex items-end">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={!!form.inStock} onChange={(e) => set('inStock', e.target.checked)} className="w-4 h-4 accent-brand-500" />
            <span className="text-steel-300 text-sm font-mono">In Stock</span>
          </label>
        </div>
      </div>
      <div className="flex gap-2">
        <button onClick={() => onSave(form)} className="btn-primary text-xs py-2 px-4">
          <Check size={12} /> SAVE PRODUCT
        </button>
        <button onClick={onCancel} className="btn-ghost text-xs py-2 px-4">
          <X size={12} /> CANCEL
        </button>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function AdminPage() {
  const [tab, setTab] = useState<Tab>('dashboard');
  const [products, setProducts] = useState<Product[]>(seedProducts);
  const [quotes, setQuotes] = useState<Quote[]>(seedQuotes);
  const [showProductForm, setShowProductForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState(false);

  // Simple password gate (in production, use NextAuth or similar)
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-steel-950 flex items-center justify-center px-4">
        <div className="border border-steel-700 bg-steel-900 p-8 w-full max-w-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-brand-500 flex items-center justify-center font-display font-black text-white text-sm">HT</div>
            <div>
              <p className="font-display font-bold text-white text-sm">HUGHES TANK</p>
              <p className="text-brand-400 text-xs font-mono">ADMIN PORTAL</p>
            </div>
          </div>
          <h2 className="font-display text-2xl text-white font-bold mb-6">SIGN IN</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            // Replace 'admin123' with a real auth system in production
            if (password === 'admin123') { setAuthenticated(true); } else { setAuthError(true); setTimeout(() => setAuthError(false), 2000); }
          }} className="space-y-4">
            <div>
              <label className="block text-steel-400 text-xs font-mono mb-1">PASSWORD</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={`input-field ${authError ? 'border-red-500' : ''}`} placeholder="Enter admin password" />
              {authError && <p className="text-red-400 text-xs font-mono mt-1">Incorrect password</p>}
            </div>
            <button type="submit" className="btn-primary w-full justify-center">SIGN IN</button>
          </form>
          <p className="text-steel-600 text-xs font-mono mt-4 text-center">Demo password: admin123</p>
        </div>
      </div>
    );
  }

  const saveProduct = (form: Partial<Product>) => {
    if (!form.name || !form.sku) return;
    if (editingProduct) {
      setProducts((prev) => prev.map((p) => p.id === editingProduct.id ? { ...p, ...form } : p));
      setEditingProduct(null);
    } else {
      setProducts((prev) => [...prev, { ...form, id: Date.now().toString() } as Product]);
    }
    setShowProductForm(false);
  };

  const deleteProduct = (id: string) => {
    if (confirm('Delete this product?')) setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const updateQuoteStatus = (id: string, status: Quote['status']) => {
    setQuotes((prev) => prev.map((q) => q.id === id ? { ...q, status } : q));
  };

  const navItems: { id: Tab; icon: React.ElementType; label: string }[] = [
    { id: 'dashboard', icon: BarChart2, label: 'Dashboard' },
    { id: 'products', icon: Package, label: 'Products' },
    { id: 'quotes', icon: MessageSquare, label: 'Quote Requests' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="min-h-screen bg-steel-950 flex">
      {/* Sidebar */}
      <div className="w-56 bg-steel-900 border-r border-steel-800 flex flex-col shrink-0">
        <div className="p-4 border-b border-steel-800">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-brand-500 flex items-center justify-center font-display font-black text-white text-xs">HT</div>
            <div>
              <p className="font-display font-bold text-white text-xs">ADMIN</p>
              <p className="text-brand-400 text-[9px] font-mono">Hughes Tank Co.</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map(({ id, icon: Icon, label }) => (
            <button key={id} onClick={() => setTab(id)}
              className={`w-full flex items-center gap-2 px-3 py-2 text-sm font-mono transition-colors text-left ${
                tab === id ? 'bg-brand-500/10 text-brand-400 border-l-2 border-brand-500 -ml-0.5' : 'text-steel-400 hover:text-white hover:bg-steel-800'
              }`}>
              <Icon size={14} /> {label}
            </button>
          ))}
        </nav>
        <div className="p-3 border-t border-steel-800">
          <button onClick={() => setAuthenticated(false)} className="w-full text-xs text-steel-500 hover:text-brand-400 font-mono transition-colors text-left px-3 py-2">
            Sign Out
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        {/* ── DASHBOARD ── */}
        {tab === 'dashboard' && (
          <div className="p-8">
            <h1 className="font-display text-3xl text-white font-bold mb-8">DASHBOARD</h1>
            <div className="grid grid-cols-4 gap-4 mb-8">
              {[
                { label: 'New Quote Requests', value: quotes.filter(q => q.status === 'new').length, color: 'text-brand-400', bg: 'bg-brand-900/20 border-brand-700/50' },
                { label: 'Total Products Listed', value: products.length, color: 'text-blue-400', bg: 'bg-blue-900/20 border-blue-700/50' },
                { label: 'Quotes This Month', value: quotes.length, color: 'text-yellow-400', bg: 'bg-yellow-900/20 border-yellow-700/50' },
                { label: 'Products In Stock', value: products.filter(p => p.inStock).length, color: 'text-green-400', bg: 'bg-green-900/20 border-green-700/50' },
              ].map((s) => (
                <div key={s.label} className={`border ${s.bg} p-5`}>
                  <p className="text-steel-400 text-xs font-mono mb-2">{s.label}</p>
                  <p className={`font-display text-4xl font-bold ${s.color}`}>{s.value}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="border border-steel-700 bg-steel-900 p-5">
                <h3 className="font-display text-white font-bold mb-4">RECENT QUOTE REQUESTS</h3>
                <div className="space-y-3">
                  {quotes.slice(0, 4).map((q) => (
                    <div key={q.id} className="flex items-center justify-between p-3 border border-steel-800 bg-steel-950">
                      <div>
                        <p className="text-white text-sm font-semibold">{q.name}</p>
                        <p className="text-steel-500 text-xs font-mono">{q.tankType} · {q.capacity}</p>
                      </div>
                      <span className={`tag-cert ${statusColors[q.status]}`}>{q.status}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => setTab('quotes')} className="btn-ghost w-full justify-center mt-4 text-xs py-2">VIEW ALL QUOTES</button>
              </div>
              <div className="border border-steel-700 bg-steel-900 p-5">
                <h3 className="font-display text-white font-bold mb-4">QUICK ACTIONS</h3>
                <div className="space-y-2">
                  <button onClick={() => { setTab('products'); setShowProductForm(true); }} className="btn-primary w-full justify-center text-xs py-3">
                    <Plus size={12} /> ADD NEW PRODUCT
                  </button>
                  <a href="/shop" target="_blank" rel="noopener noreferrer" className="btn-ghost w-full justify-center text-xs py-3">
                    <Eye size={12} /> VIEW LIVE SHOP
                  </a>
                  <a href="/" target="_blank" rel="noopener noreferrer" className="btn-ghost w-full justify-center text-xs py-3">
                    <Eye size={12} /> VIEW LIVE WEBSITE
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── PRODUCTS ── */}
        {tab === 'products' && (
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h1 className="font-display text-3xl text-white font-bold">PRODUCTS</h1>
              <button onClick={() => { setShowProductForm(true); setEditingProduct(null); }} className="btn-primary text-xs py-2 px-4">
                <Plus size={12} /> ADD PRODUCT
              </button>
            </div>

            {(showProductForm && !editingProduct) && (
              <ProductForm onSave={saveProduct} onCancel={() => setShowProductForm(false)} />
            )}
            {editingProduct && (
              <ProductForm initial={editingProduct} onSave={saveProduct} onCancel={() => setEditingProduct(null)} />
            )}

            <div className="border border-steel-700 bg-steel-900 overflow-hidden">
              <table className="w-full spec-table">
                <thead>
                  <tr>
                    <th>SKU</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Badge</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p) => (
                    <tr key={p.id}>
                      <td className="font-mono text-xs">{p.sku}</td>
                      <td className="font-semibold">{p.name}</td>
                      <td className="capitalize text-xs">{p.category}</td>
                      <td className="font-mono">${p.price}</td>
                      <td>
                        <span className={`tag-cert ${p.inStock ? 'text-green-300 bg-green-900/30 border-green-700/50' : 'text-red-300 bg-red-900/30 border-red-700/50'}`}>
                          {p.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </td>
                      <td>{p.badge ? <span className="tag-cert">{p.badge}</span> : <span className="text-steel-600">—</span>}</td>
                      <td>
                        <div className="flex gap-2">
                          <button onClick={() => { setEditingProduct(p); setShowProductForm(false); }} className="p-1 text-steel-400 hover:text-brand-400 transition-colors">
                            <Edit2 size={13} />
                          </button>
                          <button onClick={() => deleteProduct(p.id)} className="p-1 text-steel-400 hover:text-red-400 transition-colors">
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ── QUOTES ── */}
        {tab === 'quotes' && (
          <div className="p-8">
            <h1 className="font-display text-3xl text-white font-bold mb-6">QUOTE REQUESTS</h1>
            <div className="border border-steel-700 bg-steel-900 overflow-hidden">
              <table className="w-full spec-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Tank Type</th>
                    <th>Capacity</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {quotes.map((q) => (
                    <tr key={q.id}>
                      <td className="font-mono text-brand-400 text-xs">{q.id}</td>
                      <td className="font-semibold">{q.name}</td>
                      <td>
                        <div>
                          <p className="text-xs">{q.email}</p>
                          <p className="text-xs text-steel-500">{q.phone}</p>
                        </div>
                      </td>
                      <td className="text-sm">{q.tankType}</td>
                      <td className="font-mono text-sm">{q.capacity}</td>
                      <td className="font-mono text-xs text-steel-400">{q.date}</td>
                      <td>
                        <select
                          value={q.status}
                          onChange={(e) => updateQuoteStatus(q.id, e.target.value as Quote['status'])}
                          className="bg-steel-800 border border-steel-600 text-white text-xs px-2 py-1 font-mono"
                        >
                          <option value="new">New</option>
                          <option value="reviewed">Reviewed</option>
                          <option value="quoted">Quoted</option>
                          <option value="closed">Closed</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ── SETTINGS ── */}
        {tab === 'settings' && (
          <div className="p-8 max-w-2xl">
            <h1 className="font-display text-3xl text-white font-bold mb-8">SETTINGS</h1>
            <div className="space-y-6">
              {[
                { label: 'Company Name', val: 'Hughes Tank Company', type: 'text' },
                { label: 'Contact Email', val: 'sales@hughestank.com', type: 'email' },
                { label: 'Phone Number', val: '972-366-8684', type: 'tel' },
                { label: 'Quote Response Time (hours)', val: '24', type: 'number' },
              ].map((s) => (
                <div key={s.label} className="border border-steel-700 bg-steel-900 p-5">
                  <label className="block text-steel-400 text-xs font-mono mb-2">{s.label.toUpperCase()}</label>
                  <input type={s.type} defaultValue={s.val} className="input-field" />
                </div>
              ))}
              <div className="border border-steel-700 bg-steel-900 p-5">
                <label className="block text-steel-400 text-xs font-mono mb-2">NOTIFICATION EMAIL FOR NEW QUOTES</label>
                <input type="email" defaultValue="sales@hughestank.com" className="input-field" />
                <p className="text-steel-500 text-xs font-mono mt-2">New quote requests will be forwarded here.</p>
              </div>
              <button className="btn-primary">
                <Check size={14} /> SAVE SETTINGS
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
