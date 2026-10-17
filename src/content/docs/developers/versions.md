---
title: Versions
description: Source versions, and host API versions and what each one added.
---

## Source version

`info.version` is the source's own version. Raise it for every release. Honya compares versions numerically, part by part, so `"1.10.0"` is newer than `"1.9.2"`, and offers an update when the repository lists a newer one than is installed.

## Host API version

The **host API** is what Honya provides a source: the `Honya` global, and the functions it calls. Its version only goes up when the host API gains something.

The build lists each source in `index.json` with the oldest version it runs on, worked out from what it uses, and Honya won't offer a source whose `apiVersion` is newer than its own. So older apps keep the sources they can run, and show the rest as **Needs a newer app**.

| Version | Added | A source needs it when it |
|---|---|---|
| 4 | Pages served as shuffled tiles, put back by the app | uses `tiledImageUrl` |
| 3 | `fetchFilterData`, `getMangaUrl` | defines either function |
| 2 | The baseline | |

The current version is 4. `Honya.apiVersion` gives the version of the app a source is running in, for the rare source that wants to do something different in older apps.

### For Honya maintainers

`API_VERSION` in the SDK's `scripts/build.mjs` must match `JSRuntime.apiVersion` in the app. Raise both only when the host API gains something, and add what it gained to `apiAdditions` in the build script, with a test for whether a source uses it.
