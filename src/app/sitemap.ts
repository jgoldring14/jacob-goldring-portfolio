import { type MetadataRoute } from 'next'

import { SITE_URL } from '@/lib/site'

// Built once at export time, which `output: 'export'` requires.
export const dynamic = 'force-static'

/** Static sitemap for every route on the site. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    { url: SITE_URL, lastModified, changeFrequency: 'monthly', priority: 1 },
    {
      url: `${SITE_URL}/work`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/work/laws-of-ux`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}
