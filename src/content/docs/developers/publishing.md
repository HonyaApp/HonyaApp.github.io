---
title: Publishing a repository
description: What the build writes, the index.json format, and hosting a repository on GitHub or anywhere else.
---

A repository is static files, so it can be hosted anywhere: GitHub, GitHub Pages, a CDN, or your own server.

## Build

`npm run build` writes `dist/`:

```
dist/index.json                 the repository's listing
dist/sources/<lang>.<name>.js   one script per source module
dist/icons/<lang>.<name>.png    from an icon.png beside index.ts, when info.icon isn't set
```

Set `nsfw: true` on any source that can show adult content. Honya marks it 18+ and keeps it hidden, with its titles, until someone 18 or older turns on **Show 18+ Sources**.

Name the repository in `package.json`. The name is shown in the app wherever the repository is listed:

```json
{
  "honya": {
    "repoName": "Example Sources"
  }
}
```

## `index.json`

```json
{
  "name": "Example Sources",
  "sources": [
    {
      "id": "712815673375441830",
      "name": "Example Manga",
      "lang": "en",
      "version": "1.0.0",
      "baseUrl": "https://manga.example",
      "supportsLatest": true,
      "rateLimits": [{ "host": "manga.example", "permits": 2, "periodMs": 1000 }],
      "icon": "icons/en.examplemanga.png",
      "apiVersion": 2,
      "file": "sources/en.examplemanga.js",
      "sha256": "9f2c…"
    }
  ]
}
```

Each entry is the source's `info`, plus:

| Field | |
|---|---|
| `apiVersion` | The oldest [host API](/developers/versions/#host-api-version) the source runs on. Honya won't install a source that needs a newer one than it has. |
| `file` | The script, relative to `index.json`. Sources from one module share a file. |
| `sha256` | The script's SHA-256. Honya checks every download against it. |
| `icon` | Relative to `index.json`, or an absolute URL. |

Honya downloads the script, checks its hash, and loads it once before installing it.

## Host it

Users can add any of these:

- the address of the folder that holds `index.json`, or the `index.json` URL itself;
- a GitHub repository link, `https://github.com/<you>/<repo>`. Honya reads `index.json` from the repository's `repo` branch, then from its default branch. `/tree/<branch>/<path>` links work too.

### On GitHub

The SDK's `.github/workflows/publish.yml` type-checks and builds on every push to `main`, then force-pushes `dist/` to the `repo` branch. With the SDK at the root of a GitHub repository:

1. Push to `main`.
2. Share `https://github.com/<you>/<repo>`.

The SDK's own repository works this way: adding `https://github.com/HonyaApp/Extensions` in Honya installs its example source.

### Anywhere else

Upload the contents of `dist/` to any static host and share the folder's address. Serve it over HTTPS.

## Releasing updates

Raise a source's `version` whenever you publish a change to it. Honya compares versions numerically and offers **Update** when yours is newer. Changing a script without raising its version changes its hash, and Honya keeps the copy it has.
