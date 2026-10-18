import type { APIRoute } from 'astro';

/** Extensionless URL after Vercel cleanUrls strips `.html` from the verification file. */
export const GET: APIRoute = () =>
  new Response('google-site-verification: google08478a1878cf854e.html\n', {
    headers: {
      'Content-Type': 'text/html; charset=UTF-8',
      'X-Robots-Tag': 'noindex',
    },
  });
