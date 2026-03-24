'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Plus, Check, Filter, Search, Star } from 'lucide-react';

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  sku: string;
  desc: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  badge?: string;
};

const products: Product[] = [
  { id: 'fr-15', name: 'Fill-Rite FR1614 15 GPM Pump', category: 'pumps', price: 489, sku: 'FR-FR1614', desc: '15 GPM 12V DC fuel transfer pump with manual nozzle. Ideal for diesel and gasoline transfer.', rating: 4.8, reviews: 42, inStock: true, badge: 'Best Seller' },
  { id: 'fr-30', name: 'Fill-Rite FR2401G 25 GPM Pump', category: 'pumps', price: 789, sku: 'FR-FR2401G', desc: '25 GPM 115V AC pump with auto nozzle. Commercial-grade transfer pump.', rating: 4.7, reviews: 28, inStock: true },
  { id: 'tuth-15', name: 'Tuthill TXF15AN 15 GPM Pump', category: 'pumps', price: 549, sku: 'TUT-TXF15AN', desc: '15 GPM 120V AC pump. Heavy-duty gear pump with mechanical seal.', rating: 4.6, reviews: 19, inStock: true },
  { id: 'oval-meter', name: 'Oval Gear Inline Meter', category: 'meters', price: 349, sku: 'MET-OG-1', desc: 'Mechanical oval gear meter. Accurate to ±0.5%. 1" NPT connections. For diesel, gasoline, kerosene.', rating: 4.5, reviews: 33, inStock: true },
  { id: 'digital-meter', name: 'Digital LCD Flow Meter', category: 'meters', price: 279, sku: 'MET-DIG-1', desc: 'Digital LCD display, resettable totalizer. 3–30 GPM range. Battery powered.', rating: 4.4, reviews: 17, inStock: true, badge: 'Popular' },
  { id: 'vent-2in', name: '2" Emergency Vent', category: 'vents', price: 89, sku: 'VENT-EM-2', desc: 'UL listed emergency vent, 2" NPT. Spring-loaded for pressure/vacuum relief.', rating: 4.9, reviews: 55, inStock: true },
  { id: 'vent-normal', name: '1.25" Normal Vent', category: 'vents', price: 45, sku: 'VENT-NM-1', desc: 'Standard 1.25" NPT vent with screen. UL listed for UL 142 tanks.', rating: 4.7, reviews: 38, inStock: true },
  { id: 'auto-nozzle', name: 'Automatic Shut-Off Nozzle 3/4"', category: 'nozzles', price: 79, sku: 'NOZ-AUTO-075', desc: 'Heavy-duty automatic shut-off nozzle, 3/4" NPT inlet. Diesel and gasoline compatible.', rating: 4.8, reviews: 61, inStock: true, badge: 'Best Seller' },
  { id: 'manual-nozzle', name: 'Manual Lever Nozzle 3/4"', category: 'nozzles', price: 39, sku: 'NOZ-MAN-075', desc: 'Manual lever nozzle, 3/4" NPT. Aluminum construction. Diesel rated.', rating: 4.5, reviews: 29, inStock: true },
  { id: 'hose-12ft', name: '3/4" × 12 ft Fuel Hose', category: 'hoses', price: 59, sku: 'HOSE-075-12', desc: 'Static dissipating fuel hose, 3/4" ID × 12 ft. Suitable for gasoline, diesel, ethanol blends.', rating: 4.6, reviews: 44, inStock: true },
  { id: 'hose-20ft', name: '3/4" × 20 ft Fuel Hose', category: 'hoses', price: 89, sku: 'HOSE-075-20', desc: 'Static dissipating fuel hose, 3/4" ID × 20 ft. Heavy-duty construction.', rating: 4.7, reviews: 31, inStock: true },
  { id: 'level-gauge', name: 'Mechanical Liquid Level Gauge', category: 'gauges', price: 129, sku: 'GAUGE-LVL-1', desc: 'Mechanical sight gauge with float indicator. 2" NPT. Reads 0–100% full.', rating: 4.5, reviews: 22, inStock: true },
  { id: 'tank-alarm', name: 'High Level Alarm', category: 'gauges', price: 189, sku: 'ALARM-HL-1', desc: 'Audible + visual high-level tank alarm. 120V AC. 2" NPT top fitting.', rating: 4.6, reviews: 15, inStock: false, badge: 'Low Stock' },
  { id: 'fill-cap', name: 'Fill Cap 2" Lockable', category: 'fittings', price: 28, sku: 'CAP-FILL-2L', desc: '2" NPT lockable fill cap with dust seal. Zinc die-cast. Includes 2 keys.', rating: 4.8, reviews: 72, inStock: true },
  { id: 'suction-tube', name: 'Suction Tube Assembly', category: 'fittings', price: 45, sku: 'SUC-TUBE-1', desc: 'Adjustable length suction tube. 3/4" NPT. Fits tanks up to 120" dia.', rating: 4.4, reviews: 18, inStock: true },
  { id: 'sump-sensor', name: 'STP Sump Sensor', category: 'monitoring', price: 245, sku: 'SENS-SUMP-1', desc: 'Liquid/vapor sensor for interstitial space monitoring. Compatible with major ATG systems.', rating: 4.7, reviews: 11, inStock: true },
];

const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'pumps', label: 'Pumps' },
  { id: 'meters', label: 'Flow Meters' },
  { id: 'nozzles', label: 'Nozzles' },
  { id: 'hoses', label: 'Hoses' },
  { id: 'vents', label: 'Vents' },
  { id: 'gauges', label: 'Gauges & Alarms' },
  { id: 'fittings', label: 'Fittings' },
  { id: 'monitoring', label: 'Monitoring' },
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState<Record<string, number>>({});
  const [added, setAdded] = useState<string | null>(null);

  const filteredProducts = products.filter((p) => {
    const matchCat = activeCategory === 'all' || p.category === activeCategory;
    const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.sku.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const addToCart = (id: string) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    setAdded(id);
    setTimeout(() => setAdded(null), 1500);
  };

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const cartTotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const p = products.find((p) => p.id === id);
    return sum + (p?.price || 0) * qty;
  }, 0);

  return (
    <div className="min-h-screen bg-steel-950">
      {/* Header */}
      <div className="bg-steel-900 border-b border-steel-800 py-10">
        <div className="max-w-7xl mx-auto px-4 flex items-start justify-between gap-4">
          <div>
            <div className="section-label mb-3">Tank Accessories Store</div>
            <h1 className="font-display text-5xl text-white font-bold">SHOP ACCESSORIES</h1>
            <p className="text-steel-400 mt-2">Pumps, meters, nozzles, hoses, vents, and fittings for your tank.</p>
          </div>
          {cartCount > 0 && (
            <div className="border border-brand-700/50 bg-brand-900/20 p-4 min-w-[220px]">
              <div className="flex items-center gap-2 mb-2">
                <ShoppingCart size={16} className="text-brand-400" />
                <span className="font-display text-white text-sm font-bold">CART ({cartCount} items)</span>
              </div>
              <p className="text-brand-400 font-mono text-xl font-bold">${cartTotal.toLocaleString()}</p>
              <Link href="/shop/checkout" className="btn-primary w-full justify-center mt-3 text-xs py-2">
                CHECKOUT
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Search + Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-steel-500" />
            <input
              type="text"
              placeholder="Search by name or SKU..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input-field pl-10"
            />
          </div>
          <div className="flex items-center gap-1 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-mono transition-all border ${
                  activeCategory === cat.id
                    ? 'bg-brand-500 border-brand-500 text-white'
                    : 'border-steel-700 text-steel-400 hover:border-steel-500 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="border border-steel-700 bg-steel-900 flex flex-col group hover:border-steel-600 transition-all">
              {/* Product image placeholder */}
              <div className="h-44 bg-steel-800 flex items-center justify-center relative overflow-hidden">
                <div className="text-5xl opacity-30 select-none">
                  {product.category === 'pumps' ? '⚙️' : product.category === 'meters' ? '📊' : product.category === 'nozzles' ? '🔧' : product.category === 'hoses' ? '🌀' : product.category === 'vents' ? '💨' : product.category === 'gauges' ? '📏' : '🔩'}
                </div>
                {product.badge && (
                  <div className={`absolute top-2 left-2 px-2 py-0.5 text-xs font-mono font-bold ${
                    product.badge === 'Best Seller' ? 'bg-brand-500 text-white' :
                    product.badge === 'Popular' ? 'bg-blue-600 text-white' :
                    'bg-yellow-600 text-white'
                  }`}>
                    {product.badge}
                  </div>
                )}
                {!product.inStock && (
                  <div className="absolute top-2 right-2 px-2 py-0.5 bg-steel-700 text-steel-400 text-xs font-mono">
                    OUT OF STOCK
                  </div>
                )}
              </div>

              <div className="p-4 flex flex-col flex-1">
                <p className="text-steel-500 text-xs font-mono mb-1">{product.sku}</p>
                <h3 className="font-display text-white text-sm font-semibold mb-2 leading-tight">{product.name}</h3>
                <p className="text-steel-400 text-xs leading-relaxed mb-3 flex-1">{product.desc}</p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={10} className={i < Math.floor(product.rating) ? 'text-brand-500 fill-brand-500' : 'text-steel-600'} />
                  ))}
                  <span className="text-steel-500 text-xs ml-1">({product.reviews})</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl text-white font-bold">${product.price}</span>
                  <button
                    onClick={() => product.inStock && addToCart(product.id)}
                    disabled={!product.inStock}
                    className={`flex items-center gap-1 px-3 py-2 text-xs font-mono transition-all ${
                      !product.inStock ? 'bg-steel-700 text-steel-500 cursor-not-allowed' :
                      added === product.id ? 'bg-green-600 text-white' :
                      'bg-brand-500 hover:bg-brand-600 text-white'
                    }`}
                  >
                    {added === product.id ? <><Check size={12} /> ADDED</> : <><Plus size={12} /> ADD TO CART</>}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-steel-500 font-mono text-sm">No products found. Try a different search or category.</p>
          </div>
        )}

        {/* Custom order CTA */}
        <div className="mt-16 border border-steel-700 bg-steel-900 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl text-white font-bold mb-1">Need Something Not Listed?</h3>
            <p className="text-steel-400 text-sm">We source and install a wide range of accessories. Contact us for custom packages.</p>
          </div>
          <Link href="/contact" className="btn-primary shrink-0">
            CONTACT US
          </Link>
        </div>
      </div>
    </div>
  );
}
