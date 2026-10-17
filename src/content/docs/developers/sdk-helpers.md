---
title: SDK helpers
description: The helpers in sdk/ for requests, URLs, encoding, dates, concurrency, crypto, Next.js data and tiled images.
---

Import helpers from the SDK. They stand in for what a browser would have and for Mihon's conveniences, and the build bundles only the ones a source uses.

```ts
import { fetchHTML, relativeUrl, mapLimit, type Source } from "../../../sdk"
```

## Requests

All take a URL string or an [`HTTPRequest`](/developers/host-api/#requests), and throw for a status outside 200–299.

| | |
|---|---|
| `fetchHTML(request)` | Fetches a page and parses it. `attr("abs:href")` resolves against the page's final URL. Mihon's `client.newCall(GET(url)).await().asJsoup()`. |
| `fetchPage(request)` | Like `fetchHTML`, also returning the URL it ended up at: `{ document, url }`. |
| `fetchJSON<T>(request)` | Parses the body as JSON. |
| `fetchText(request)` | The body as text. |
| `send(request)` | The whole `HTTPResponse`. |
| `formBody(fields)` | A form body and its `Content-Type` header, to spread into a request: `{ method: "POST", ...formBody([["q", query]]) }`. |

## URLs

| | |
|---|---|
| `relativeUrl(url)` | Mihon's `setUrlWithoutDomain`: an absolute URL's path, query and fragment, percent-decoded as Mihon stores them. Use it for every `Manga.url` and `Chapter.url`. |
| `absoluteUrl(path, base)` | Resolves `path` against `base`, as a browser resolves a link. |
| `queryString(params)` | A query string from `[name, value]` pairs, in order, repeats allowed. |
| `queryParams(url)` / `queryParam(url, name)` | A URL's query parameters, decoded. |
| `pathSegments(url)` | A URL's path segments, decoded, without empty ones. |

## Text and encoding

| | |
|---|---|
| `base64Decode(text)` / `base64Encode(bytes, { urlSafe, padding })` | Standard or URL-safe base64. |
| `utf8Encode(text)` / `utf8Decode(bytes)` | |
| `unescapeEntities(text)` | Jsoup's `Parser.unescapeEntities`: `&hearts;` becomes ♥. For text that arrives with its entities still in it. |
| `imgAttr(element)` | An image's URL from the first of `data-cfsrc`, `data-src`, `data-lazy-src`, `srcset` and `src` it has. |

## Dates

| | |
|---|---|
| `parseDate(text)` | `Date.parse`, but `undefined` rather than `NaN`. |
| `parseRelativeDate(text)` | "3 days ago", "2 hours ago" and the like. |
| `javaDateParser(pattern, locale)` | A parser for a Java `DateTimeFormatter` pattern, as Kotlin sources declare them: `javaDateParser("dd MMMM yyyy", "tr")`. Month and weekday names come from `Intl` in the locale. |
| `javaLocaleTag(expression)` | A BCP 47 tag from a Kotlin locale expression: `Locale("pt", "BR")` gives `"pt-BR"`. |
| `parseRelativeOrAbsolute(text, parse)` | Madara's `parseChapterDate`: "today", "yesterday" and "3 days ago" in the languages Madara sites use, or else `parse(text)`. |

## Concurrency

`mapLimit(items, limit, transform)` is `items.map(transform)` with at most `limit` running at once, results in order. Use it when a page list needs a request per page:

```ts
async getPageList(chapter) {
  const document = await fetchHTML(baseUrl + chapter.url)
  const viewers = document.select("a.page").map((a) => a.attr("abs:href"))
  return mapLimit(viewers, 4, async (url) => {
    const page = await fetchHTML(url)
    return { url: imgAttr(page.selectFirst("#image")!) }
  })
}
```

## Crypto

For sites that encrypt their page lists the way CryptoJS does. JavaScriptCore has no WebCrypto, so these are plain implementations, fine for the few kilobytes of a page list but not for images.

| | |
|---|---|
| `md5(bytes)` | |
| `evpBytesToKey(password, salt)` | OpenSSL's key derivation, which CryptoJS uses for passphrases. |
| `aesCbcDecrypt(data, key, iv)` | AES-CBC, with PKCS#7 padding removed. |
| `hexDecode(hex)` | |

## Next.js sites

`extractNextJs(document, predicate)` and `extractNextJsRsc(body, predicate)` find data in Next.js pages: in an App Router page's flight payload, a `text/x-component` response (sent for an `rsc: 1` header), or a Pages Router page's `__NEXT_DATA__`. They return the first object or array `predicate` accepts.

```ts
const data = extractNextJs<{ chapters: ApiChapter[] }>(document, (value) =>
  typeof value === "object" && value != null && "chapters" in value)
```

## Images

Some sites serve pages cut into a grid of shuffled tiles. Give such a page's URL with `tiledImageUrl(url, { columns, rows, order, multiple? })` and Honya puts the tiles back, for reading and downloads. `order[i]` is the tile of the served image that belongs at tile `i` of the real one, both counted row by row from the top left. This needs host API 4.
