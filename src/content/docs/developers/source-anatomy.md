---
title: Anatomy of a source
description: The Source object, its info, the functions Honya calls, and the data they exchange.
---

A source's module default-exports a `Source`, or an array of them. The types are in `sdk/types.ts`, and their names follow Mihon's so ports stay recognisable.

## `info`

Describes the source. The build copies it into the repository's `index.json`, so Honya can list a source without running it.

| Field | | |
|---|---|---|
| `id` | required | Mihon's ID for the same source, as a decimal **string** (a JavaScript number can't hold all 63 bits). See [Mihon compatibility](/developers/mihon-compatibility/). |
| `name` | required | Shown in the app. |
| `lang` | required | ISO 639-1 code (`"en"`), or `"all"` for a multi-language source. |
| `version` | required | Raise it for every release. Compared numerically: `"1.10.0"` is newer than `"1.9.2"`. |
| `baseUrl` | required | The site's address. Relative URLs resolve against it. |
| `supportsLatest` | | `true` if the source has `getLatestUpdates`. |
| `nsfw` | | `true` if the site can show adult content. Such sources are marked 18+ and left out of SFW repositories. |
| `icon` | | Absolute URL of the icon. Left out, the build uses an `icon.png` beside `index.ts`. |
| `aliases` | | Other Mihon source IDs this source stands in for, such as a renamed or merged one. |
| `rateLimits` | | `[{ host, permits, periodMs }]`: how many requests to `host` Honya lets through per period. |
| `imageHeaders` | | Headers sent with page and cover image requests. `Referer` defaults to `baseUrl`; a header set to `""` is left out, for image hosts that refuse a Referer. |

## The functions

Honya calls these. Each runs in the source's own JavaScript context, with only the [`Honya` global](/developers/host-api/) to reach the outside.

| Function | | Returns |
|---|---|---|
| `getPopularManga(page)` | required | `MangasPage`: the site's popular list, `page` counting from 1. |
| `getLatestUpdates(page)` | if `supportsLatest` | `MangasPage`: recently updated titles. |
| `searchManga(page, query, filters)` | required | `MangasPage`. `filters` is `getFilterList()`'s list with the user's choices, or empty. |
| `getMangaDetails(manga)` | required | `Partial<Manga>`: the whole title or only what changed. The URL always stays. |
| `getChapterList(manga)` | required | `Chapter[]`, **newest first**, like Mihon. |
| `getPageList(chapter)` | required | `Page[]`, in reading order. |
| `getFilterList(data?)` | | `Filter[]`, synchronously. See [Filters](/developers/filters/). |
| `fetchFilterData()` | host API 3 | Anything JSON can hold, passed to `getFilterList`. See [Filters](/developers/filters/). |
| `getMangaUrl(manga)` | host API 3 | The title's page on the site, synchronously, when it isn't `baseUrl + manga.url`. Used for the web view and for [share links](/developers/share-links/). |

Throw an `Error` when something goes wrong. Honya shows its message to the user, so make it say what happened ("series page layout changed"), not just where.

## The data

### `Manga`

| Field | |
|---|---|
| `url` | Relative to `baseUrl`, and **exactly what the Mihon extension stores**, or restored library entries won't open. Use `relativeUrl()`. |
| `title` | |
| `thumbnailUrl` | Absolute, or relative to `baseUrl`. |
| `author`, `artist`, `description` | |
| `genres` | `string[]`. Discover matches titles by these. |
| `status` | `"unknown"`, `"ongoing"`, `"completed"`, `"licensed"`, `"publishingFinished"`, `"cancelled"` or `"onHiatus"`. |
| `sourceData` | Anything the source wants kept with the title (Mihon's memo), passed back untouched. |

### `Chapter`

| Field | |
|---|---|
| `url` | Relative to `baseUrl`, and the same as the Mihon extension stores. |
| `name` | |
| `dateUpload` | Milliseconds since 1970, as `Date.parse` gives. |
| `chapterNumber` | Leave it out to have Honya read it from the name, as Mihon does. |
| `scanlator` | |
| `sourceData` | As for `Manga`. |

### `Page` and `MangasPage`

A `Page` is `{ url }`, the image's address, absolute or relative to `baseUrl`. A `MangasPage` is `{ mangas, hasNextPage }`.

## Several sources in one module

Like Mihon's `SourceFactory`, a module can default-export an **array** of sources, usually one per language, each with its own Mihon `id`. They share one script, and the build lists each in `index.json`.

```ts
const languages: [id: string, lang: string][] = [
  ["1111111111111111111", "en"],
  ["2222222222222222222", "fr"],
]

export default languages.map(([id, lang]): Source => ({
  info: { id, name: "Example Manga", lang, version: "1.0.0", baseUrl: `https://manga.example/${lang}` },
  // …
}))
```

## What the build checks

`npm run build` loads each bundle the way Honya does and fails if:

- `info` is missing a required field, or `id` isn't a decimal string;
- a required function is missing, or `supportsLatest` is true without `getLatestUpdates`;
- two sources in one module share an `id`;
- the source calls `Honya` while it loads, rather than from its functions;
- `getFilterList` uses anything from `Honya` but `prefs`;
- the sort filter has no `listings` (see [Filters](/developers/filters/#popular-and-latest-in-the-sort)).

It warns, without failing, when `id` isn't the value Mihon's formula gives for the name and language.
