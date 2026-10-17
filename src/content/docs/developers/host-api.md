---
title: The host API
description: The Honya global a source calls, the HTML parser, and what JavaScriptCore doesn't have.
---

Sources run in JavaScriptCore, not a browser or Node. There's no `fetch`, DOM, `URL`, `URLSearchParams`, `setTimeout` or `atob`. What Honya provides instead is the `Honya` global and `console`, declared in `sdk/host.d.ts`. The current host API version is **4**.

Only call `Honya` from your source's functions, not while the module loads: the build fails a source that does.

## `Honya`

| Member | |
|---|---|
| `apiVersion` | The host API version the app provides. |
| `request(request)` | Sends an HTTP request. See below. |
| `parseHTML(html, baseUrl?)` | Parses HTML natively and returns the document as an [`HTMLNode`](#htmlnode). Relative links resolve against `baseUrl`, which defaults to `info.baseUrl`. |
| `prefs.get(key)` / `prefs.set(key, value)` | The source's own settings: strings, numbers, booleans or string arrays. Setting `null` or `undefined` removes one. A Mihon backup restores its source's settings here. |
| `localStorage(url, key)` | What the site keeps in the web view's `localStorage` under `key`, or `null`. Mihon's `getLocalStorage`, for sites that hand out tokens there once visited. |
| `loadInWebView(url, options?)` | Opens `url` in a hidden web view that shares the visible one's cookies and storage, for sites whose scripts must run to issue a token. With `waitForLocalStorage: key`, resolves with that key's value as soon as the page sets it; otherwise after `timeoutMs` (default 15 s, at most 60 s). |
| `sleep(ms)` | Waits, up to a minute. |
| `log(level, message)` | Writes to the app's log at `"debug"`, `"info"`, `"warn"` or `"error"`. |

`console.log`, `info`, `debug`, `warn` and `error` also write to the app's log, under the category `Extension <source name>` in Console.app.

### Requests

```ts
const response = await Honya.request({
  url: "/api/search",          // absolute, or relative to baseUrl
  method: "POST",              // default GET
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ q: "frieren" }),
  timeoutMs: 30_000,           // default 60 s
})
response.status   // 200
response.url      // where it ended up, after redirects
response.headers  // lowercased names
response.body     // the body as text
```

`request` also takes a URL string for a plain GET. Every request goes through Honya's HTTP client, so it:

- carries Honya's User-Agent and the site's cookies, the same as the web view's;
- waits its turn under the source's `rateLimits`;
- gets past Cloudflare challenges, asking the user to pass one in the web view when needed.

Every HTTP status resolves; only a failed connection rejects. The [helpers](/developers/sdk-helpers/) `fetchHTML`, `fetchJSON` and `fetchText` throw on error statuses, which is usually what you want.

## `HTMLNode`

What `Honya.parseHTML` and `fetchHTML` return: an element with Jsoup's calls, as Mihon extensions use them. Honya parses with SwiftSoup, a Jsoup port, so selectors from a Kotlin extension work unchanged, including `:contains()`, `:has()` and `:eq()`.

| Method | |
|---|---|
| `select(css)` | Every matching descendant. |
| `selectFirst(css)` | The first match, or `null`. |
| `text()` | The text of the element and its descendants, whitespace normalised. |
| `ownText()` | Only the element's own text. |
| `html()` / `outerHtml()` | Inner and outer HTML. |
| `attr(name)` | An attribute, or `""`. `attr("abs:href")` gives it as an absolute URL. |
| `absUrl(name)` | Same as `attr("abs:" + name)`. |
| `hasAttr(name)` | |
| `data()` | A `<script>` or `<style>` element's contents; `text()` is empty for those. |
| `id()`, `hasClass(name)`, `tagName` | |
| `is(css)` | Whether the element matches a query. |
| `parent()`, `children()` | |
| `nextElementSibling()`, `previousElementSibling()` | |

## What isn't there

Some of what Mihon can do, Honya can't yet, so ports work around it:

- **Lazy page images.** Mihon resolves some pages' images only when they're shown (`getImageUrl`). Resolve them in `getPageList` instead, a few at a time with `mapLimit`.
- **Image interceptors.** Fallbacks done per image in OkHttp are decided once in `getPageList`. The one kind of image rewriting Honya does is putting back pages served as shuffled tiles: see [`tiledImageUrl`](/developers/sdk-helpers/#images).
- **Web APIs.** Use the helpers for URLs, query strings, base64, UTF-8, dates, MD5 and AES.
