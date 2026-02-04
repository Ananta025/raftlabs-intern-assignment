import { MetadataRoute } from 'next';
import { getAllTools } from '@/lib/getTools';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ai-tools-directory.com';
  const tools = getAllTools();

  const toolPages = tools.map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...toolPages,
  ];
}
