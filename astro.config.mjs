// @ts-check
import starlight from "@astrojs/starlight"
import { defineConfig } from "astro/config"

// The address the site is served from, which is also the app's HONYA_LINK_HOST: shared links are
// https://<that host>/m/…. It has to be the root of a domain (a custom domain on GitHub Pages,
// not <user>.github.io/<repo>), since pages link to /guide/… and iOS looks for
// /.well-known/apple-app-site-association there. Canonical URLs, the sitemap and link previews'
// images use it, so set SITE_URL for any build that gets deployed (the GitHub workflow does).
const site = process.env.SITE_URL || "http://localhost:4321"

export default defineConfig({
  site,
  // Pages are folders with an index.html, as GitHub Pages expects.
  trailingSlash: "ignore",
  build: { format: "directory" },
  integrations: [
    starlight({
      title: "Honya",
      description: "Honya is a manga reader for iPhone and iPad. Guides for reading with it, and docs for writing the sources it reads from.",
      logo: { src: "./src/assets/icon.png", alt: "" },
      favicon: "/assets/favicon.png",
      customCss: ["@fontsource/shippori-mincho/800.css", "./src/styles/theme.css"],
      head: [
        { tag: "link", attrs: { rel: "apple-touch-icon", href: "/assets/apple-touch-icon.png" } },
        { tag: "meta", attrs: { property: "og:image", content: new URL("/assets/icon-512.png", site).href } },
        { tag: "meta", attrs: { name: "twitter:card", content: "summary" } },
      ],
      lastUpdated: false,
      // src/pages/404.astro is both the 404 page and the page for shared links.
      disable404Route: true,
      components: { ThemeSelect: "./src/components/ThemeToggle.astro" },
      sidebar: [
        {
          label: "Using Honya",
          items: [
            "guide/getting-started",
            "guide/library",
            "guide/browse-and-search",
            "guide/discover",
            "guide/reader",
            "guide/updates",
            "guide/downloads-and-storage",
            "guide/sharing",
            "guide/sync",
            "guide/backup-and-restore",
            "guide/migration",
            "guide/appearance",
            "guide/history-and-incognito",
            "guide/troubleshooting",
          ],
        },
        {
          label: "Sources",
          items: ["sources/how-sources-work", "sources/repositories", "sources/your-files"],
        },
        {
          label: "Writing sources",
          items: [
            "developers/quick-start",
            "developers/source-anatomy",
            "developers/host-api",
            "developers/sdk-helpers",
            "developers/filters",
            "developers/mihon-compatibility",
            "developers/testing",
            "developers/publishing",
            "developers/versions",
            "developers/share-links",
          ],
        },
        {
          label: "About",
          items: ["about/privacy", "about/support"],
        },
      ],
    }),
  ],
})
