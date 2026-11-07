import { type MetadataRoute } from 'next'

import { SITE_URL } from '@/lib/site'

// Built once at export time, which `output: 'export'` requires.
export const dynamic = 'force-static'

/** Allows every crawler and points them at the sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
