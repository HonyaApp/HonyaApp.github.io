# Honya website

The website for Honya, the manga reader for iPhone and iPad: a home page, the user guide, the docs for writing sources, and the page that answers shared links when Honya isn't installed. It's a static site built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build), hosted on GitHub Pages. Visit it on [https://HonyaApp.github.io](https://HonyaApp.github.io).
## Blocklist

`public/blocklist.json`, served at `https://honyaapp.github.io/blocklist.json`, lists the sources and repositories Honya won't load. It's how a report is acted on without an app update. The app fetches it whenever it checks its repositories (about once a day, or when someone pulls to refresh in Settings → Sources) and keeps the last copy it got, so a block still applies offline.

```json
{
  "version": 1,
  "sources": [
    { "id": "2131019126180322627", "reason": "unmarkedAdult" }
  ],
  "repositories": [
    { "url": "github.com/someone/their-sources", "reason": "illegal" }
  ]
}
```

- A source's `id` is its Mihon source ID, the `id` in a repository's `index.json`. It's blocked whichever repository offers it: it isn't listed or installed, an installed copy stops loading, and its titles are hidden in the library, history and updates.
- A repository's `url` is its address without `https://`, or the start of it up to a `/`: `example.com` blocks every repository on that site, `example.com/honya` those under that folder, and `github.com/someone/their-sources` a GitHub repository, its `raw.githubusercontent.com` address included. A blocked repository's sources aren't listed, it can't be added, and the sources installed from it stop loading too. Block one source by its ID instead when the rest of the repository is fine.
- `reason` is optional. Use one of the report reasons, the same codes as a `Report` record's `reason` in the CloudKit Console, so people read it in their own language:

  | `reason` | Shown as |
  |---|---|
  | `illegal` | Removed by Honya for illegal content. |
  | `copyright` | Removed by Honya for copyright infringement. |
  | `unmarkedAdult` | Removed by Honya for adult content that isn't marked 18+. |
  | `harmful` | Removed by Honya as harmful or malicious. |

  Anything else is shown as written, in English, as "Removed by Honya: …". With no reason, it's just "Removed by Honya." A new code needs an app update first; until then the app shows it as written.

Leave `version` at 1 for anything older versions of the app can ignore, such as a new field. Raise it only for a change they'd misread: they then keep the last copy they could read.

To lift a block, remove its entry. Keep the file, even with nothing in it: if it can't be fetched or read, the app keeps using the last copy it got.
