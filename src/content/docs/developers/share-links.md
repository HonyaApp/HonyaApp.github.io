---
title: Share links
description: The format of Honya's share links, how they open the app as universal links, and the page that answers them on the web.
---

When someone taps **Share** on a title's page, Honya makes a link on this website that opens the title in Honya where it's installed, and offers the title's page on its site where it isn't. This page describes how that works, for source authors and for anyone running the site.

## Format

```
https://<host>/m/<source ID>?w=<page on the site>&u=<manga URL>&t=<title>
```

| Part | |
|---|---|
| `<host>` | The site's host, set in the app by the `HONYA_LINK_HOST` build setting. |
| `<source ID>` | The source's `info.id`, in base 36 (digits and lowercase letters) to keep it short. |
| `w` | The title's page on the source's site, `getMangaUrl(manga)` if the source has it, else `baseUrl + manga.url`, without `https://` (an `http://` page keeps its scheme). |
| `u` | The title's `Manga.url`, its path on the source. Left out when it's exactly `w`'s path (and query) on the source's own host, as it is for most sources: the app reads it back from `w`. |
| `t` | The title's name, shown while its details load. |

Every link has `w`, `u` or both. Values are percent-encoded, with spaces as `+` and a literal `+` as `%2B`. For example, a source whose pages are `baseUrl + manga.url`:

```
https://<host>/m/5eyo2fo4g2au?w=manga.example/series/123/the-example&t=The+Example
```

A link carries nothing else: not who shared it, and nothing from their library.

### What matters for source authors

- `u`, or the path read back from `w`, is the same `Manga.url` your source returns, so a link opens wherever your source is installed with the same ID. Keep IDs and URLs stable across versions, as you would for [Mihon compatibility](/developers/mihon-compatibility/).
- `w` is what people without Honya are offered. If `baseUrl + manga.url` isn't the title's real page, implement `getMangaUrl`.

## Opening in Honya

Share links are **universal links**. iOS opens them in Honya, without a browser, when:

1. the app's entitlements list `applinks:<host>` among its associated domains (the app reads the host from `HONYA_LINK_HOST`), and
2. `https://<host>/.well-known/apple-app-site-association` lists the app for the `/m/*` paths:

```json
{
  "applinks": {
    "details": [
      {
        "appIDs": ["YTRF6LA392.com.notintheboxstudio.Yomu"],
        "components": [{ "/": "/m/*", "comment": "A shared manga (MangaLink in the app)" }]
      }
    ]
  }
}
```

Honya then reads the link. If the source is installed, it opens the title's page, which loads the rest from the source. If not, it says the source isn't installed and offers `w` in the browser.

Builds without `HONYA_LINK_HOST` share the title's page on its site instead.

## The page on the web

Where Honya isn't installed, the link opens a page on this website. It shows the title from `t` and the site from `w`, and offers the App Store and a button to continue to the site, ordered for the device: the App Store first on an iPhone or iPad, the site first elsewhere.

Anyone can write a link, so the page is careful with what it's given:

- **Nothing happens on its own.** It never redirects, so a crafted `w` can't bounce visitors anywhere.
- **`w` must be an `http` or `https` URL**, or no button is shown; a `javascript:` URL or the like is ignored.
- **`t` is cut to 160 characters** and shown as text, never as HTML.
- **Link previews stay generic.** Messages and other previewers read the page without running its script, so they see "Shared with Honya" and the app icon, not the title.
- **It's not for search engines**: the page is marked `noindex`, and isn't in the sitemap.

## Serving it

The website has to:

- answer **every** path under `/m/`, whatever the source ID, with the shared-link page, leaving the query string alone;
- serve `/.well-known/apple-app-site-association` over HTTPS with **no redirects**, since Apple's CDN won't follow one;
- serve both from the exact host in `HONYA_LINK_HOST`. Universal links are per host, so `www.` and the bare domain are different hosts.

The site is on GitHub Pages, which can't send a whole folder of paths to one page. Instead, the shared-link page is the site's `404.html`, which Pages serves for any path it has no file for: the page sees an address under `/m/` and shows the shared link, and for any other address says the page wasn't found. Shared links therefore answer with a 404 status. Browsers don't mind, and iOS doesn't look at the page at all, but a link previewer that skips 404 pages may show a plain link instead of the "Shared with Honya" card.

Pages can't set the association file's content type, so it isn't served as `application/json`. Apple's CDN is widely reported to accept it from Pages anyway; check what the CDN has after the first deploy (`https://app-site-association.cdn-apple.com/a/v1/<host>`). If it ever refuses the file, a proxy in front of Pages, such as Cloudflare, can set the header.

Apple fetches the association file through its CDN, which can take a while to notice changes. To test changes straight away, add `?mode=developer` to the associated domain in a development build (`applinks:<host>?mode=developer`) and turn on **Associated Domains Development** in the device's Developer settings: the device then fetches the file from the site itself.
