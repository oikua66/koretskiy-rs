import type { MetadataRoute } from 'next';
import { business } from '../lib/business';

const routes = ['', '/vlaga', '/climtec', '/effi', '/toplotne-pumpe'];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${business.website.canonicalUrl}${path}`,
    lastModified,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));
}
