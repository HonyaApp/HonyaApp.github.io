import type { APIRoute } from "astro"

// Shared-link pages (/m/…) stay crawlable on purpose: they say noindex themselves, and link
// previewers that honour robots.txt would otherwise show nothing for them.
export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL("/sitemap-index.xml", site).href}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
