import { MetadataRoute } from 'next';
import { SITE_CONFIG, SERVICES_CONTENT, PROJECTS_CONTENT, INSIGHTS_CONTENT } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.siteUrl;

  const staticPages = [
    '',
    '/services',
    '/projects',
    '/insights',
    '/about',
    '/achievements',
    '/contact',
    '/book-a-demo',
    '/free-assessment',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const servicePages = SERVICES_CONTENT.services.map((svc) => ({
    url: `${baseUrl}/services/${svc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const projectPages = PROJECTS_CONTENT.projects.map((proj) => ({
    url: `${baseUrl}/projects/${proj.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const insightPages = INSIGHTS_CONTENT.map((post) => ({
    url: `${baseUrl}/insights/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...projectPages, ...insightPages];
}
