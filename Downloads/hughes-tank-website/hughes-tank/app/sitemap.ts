import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hughestank.com';
  const now = new Date();

  const staticPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/products`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/products/ul-142`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/products/fireguard`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/products/flameshield`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/products/permatank`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/products/act100u`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/products/farm-tanks`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/products/containment-pans`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/products/accessories`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/tank-finder`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/build-a-tank`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/quote`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/shop`, priority: 0.7, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/blog`, priority: 0.7, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/about`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/contact`, priority: 0.7, changeFrequency: 'monthly' as const },
  ];

  return staticPages.map((page) => ({
    url: page.url,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
