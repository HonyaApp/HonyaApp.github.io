---
title: Mihon compatibility
description: Keep Mihon's source IDs and URLs so restored backups find your source.
---

People switching from Mihon, Tachiyomi and their forks restore their backups into Honya. Each library entry in a backup stores its **source ID** and the title's **relative URL**. A restored entry finds your source, and opens, only if both match what the Mihon extension used.

## Use Mihon's ID

`info.id` must be Mihon's ID for the same source, as a decimal string.

Mihon computes it as the first 8 bytes of `md5("<name lowercased>/<lang>/1")`, as a big-endian number with the sign bit cleared. `npm run build` warns when your `id` doesn't match that. To work it out yourself:

```sh
node -e 'const h=require("crypto").createHash("md5").update(process.argv[1]).digest();console.log((h.readBigUInt64BE(0)&0x7fffffffffffffffn).toString())' "example manga/en/1"
```

Some Kotlin extensions override `id` after a rename, to keep their old one. In that case copy the overridden value from the Kotlin source; the build's warning is then expected.

A source that replaces several Mihon sources, such as one that was split by language or renamed more than once, lists the others in `info.aliases`.

For a site Mihon doesn't have, use the same formula with your source's name and language, so that a Mihon extension written later would match.

## Store the same URLs

`Manga.url` and `Chapter.url` must be **exactly** what the Kotlin extension stores, usually the path without the domain, percent-decoded. `relativeUrl()` does what Mihon's `setUrlWithoutDomain` does. If your URLs differ, restored entries resolve to your source but their chapters won't load.

A Mihon backup also restores each entry's memo into `sourceData`, so keep Mihon's memo there too.

When a URL isn't the page's path, as with Madara sites that keep a WordPress post ID with the path in the memo, implement `getMangaUrl(manga)` to give the page for the web view and for sharing.

## Source settings

A Mihon backup restores each source's preferences into `Honya.prefs`, under the same keys. Read them with the keys the Kotlin extension uses, and settings come across.
