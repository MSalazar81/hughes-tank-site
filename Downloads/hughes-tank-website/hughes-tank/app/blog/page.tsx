import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fuel Storage Tank Blog & Resources | Hughes Tank Company',
  description: 'Expert articles on fuel storage tanks, UL 142, Fireguard®, SPCC compliance, tank selection, and more from Hughes Tank Company.',
};

const posts = [
  {
    slug: 'ul-142-vs-ul-2085-fireguard',
    title: 'UL 142 vs. UL 2085 Fireguard®: Which Tank Do You Need?',
    excerpt: 'Understanding the difference between a standard UL 142 aboveground tank and a UL 2085 Fireguard® fire-rated tank can save you money and keep you compliant. Here\'s what you need to know.',
    category: 'Tank Selection',
    date: 'March 15, 2026',
    readTime: '5 min read',
    tags: ['UL 142', 'Fireguard', 'Fire Rated', 'Tank Selection'],
  },
  {
    slug: 'spcc-compliance-aboveground-tanks',
    title: 'SPCC Compliance for Aboveground Fuel Storage Tanks: A Complete Guide',
    excerpt: 'The EPA\'s Spill Prevention, Control, and Countermeasure (SPCC) rule applies to most aboveground fuel storage operations. Here\'s how to stay compliant without headaches.',
    category: 'Compliance',
    date: 'February 28, 2026',
    readTime: '8 min read',
    tags: ['SPCC', 'EPA', 'Compliance', 'Secondary Containment'],
  },
  {
    slug: 'double-wall-vs-single-wall-tanks',
    title: 'Double-Wall vs. Single-Wall Fuel Tanks: Pros, Cons & When to Choose Each',
    excerpt: 'The choice between single-wall and double-wall tank construction affects cost, compliance requirements, and environmental risk. Here\'s the breakdown.',
    category: 'Tank Selection',
    date: 'February 10, 2026',
    readTime: '6 min read',
    tags: ['Double Wall', 'Single Wall', 'UL 142', 'Secondary Containment'],
  },
  {
    slug: 'farm-fuel-tank-guide',
    title: 'Choosing the Right Farm Fuel Tank: What Every Rancher Should Know',
    excerpt: 'From capacity sizing to pump selection and regulatory compliance, here\'s everything you need to know about agricultural fuel storage in Texas and beyond.',
    category: 'Farm & Agricultural',
    date: 'January 22, 2026',
    readTime: '7 min read',
    tags: ['Farm Tanks', 'Agricultural', 'UL 142', 'Texas'],
  },
  {
    slug: 'fuel-tank-accessories-guide',
    title: 'The Complete Guide to Fuel Tank Accessories: Pumps, Meters, Nozzles & More',
    excerpt: 'Choosing the right pump, meter, and accessories for your fuel tank can make a huge difference in efficiency and reliability. Here\'s what to look for.',
    category: 'Accessories',
    date: 'January 5, 2026',
    readTime: '6 min read',
    tags: ['Accessories', 'Pumps', 'Meters', 'Fill-Rite'],
  },
  {
    slug: 'tank-installation-checklist',
    title: 'Aboveground Fuel Tank Installation Checklist: 12 Things to Do Before You Start',
    excerpt: 'Proper site prep and permitting can make or break a tank installation. Follow this checklist to avoid the most common mistakes.',
    category: 'Installation',
    date: 'December 18, 2025',
    readTime: '5 min read',
    tags: ['Installation', 'Permits', 'Site Prep', 'Best Practices'],
  },
];

const categories = ['All', 'Tank Selection', 'Compliance', 'Farm & Agricultural', 'Accessories', 'Installation'];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-steel-950">
      <div className="bg-steel-900 border-b border-steel-800 py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-label mb-3">Expert Resources</div>
          <h1 className="font-display text-6xl text-white font-bold mb-3">BLOG & RESOURCES</h1>
          <p className="text-steel-400 text-lg">Industry insights, tank selection guides, and compliance resources from Hughes Tank Company.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((c) => (
            <button key={c} className={`px-3 py-1.5 text-xs font-mono border transition-all ${
              c === 'All' ? 'bg-brand-500 border-brand-500 text-white' : 'border-steel-700 text-steel-400 hover:border-steel-500'
            }`}>
              {c}
            </button>
          ))}
        </div>

        {/* Featured post */}
        <div className="border border-brand-700/40 bg-brand-900/10 p-8 mb-8 group hover:border-brand-600/60 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-cert bg-brand-500 border-brand-500 text-white">Featured</span>
            <span className="tag-cert">{posts[0].category}</span>
          </div>
          <h2 className="font-display text-4xl text-white font-bold mb-3 group-hover:text-brand-300 transition-colors">
            <Link href={`/blog/${posts[0].slug}`}>{posts[0].title}</Link>
          </h2>
          <p className="text-steel-300 text-lg leading-relaxed mb-4">{posts[0].excerpt}</p>
          <div className="flex items-center gap-4">
            <span className="text-steel-500 font-mono text-xs flex items-center gap-1"><Clock size={11} /> {posts[0].readTime}</span>
            <span className="text-steel-500 font-mono text-xs">{posts[0].date}</span>
            <Link href={`/blog/${posts[0].slug}`} className="btn-primary text-xs py-2 px-4 ml-auto">
              READ ARTICLE <ArrowRight size={12} />
            </Link>
          </div>
        </div>

        {/* Post grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(1).map((post) => (
            <div key={post.slug} className="border border-steel-700 bg-steel-900 p-6 group hover:border-steel-600 transition-all flex flex-col">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="tag-cert">{post.category}</span>
              </div>
              <h3 className="font-display text-white text-lg font-bold mb-3 group-hover:text-brand-300 transition-colors flex-1">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="text-steel-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-steel-800">
                <span className="text-steel-500 font-mono text-xs flex items-center gap-1"><Clock size={10} /> {post.readTime}</span>
                <span className="text-steel-600 font-mono text-xs">{post.date}</span>
                <Link href={`/blog/${post.slug}`} className="ml-auto text-brand-400 hover:text-brand-300 text-xs font-mono flex items-center gap-1 transition-colors">
                  READ <ArrowRight size={10} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
