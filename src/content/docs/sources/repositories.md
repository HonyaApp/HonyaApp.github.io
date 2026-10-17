---
title: Adding a repository
description: The addresses Honya accepts for a repository, and managing the sources you install from it.
---

Go to **Settings → Sources** and tap **Add Repository**, then enter its address. The first time, Honya asks you to read and agree to what third-party content means.

## Addresses Honya accepts

Any of these work:

| What you enter | Example |
|---|---|
| The folder that holds the repository's `index.json` | `https://example.com/honya/` |
| The `index.json` itself | `https://example.com/honya/index.json` |
| A GitHub repository | `https://github.com/someone/their-sources` |
| A branch or folder of a GitHub repository | `https://github.com/someone/their-sources/tree/repo-sfw` |

For a GitHub repository, Honya reads `index.json` from its `repo` branch first, then from its default branch. That's where the [publishing workflow](/developers/publishing/) puts it.

Whoever publishes the repository will tell you its address. Honya doesn't list repositories itself.

## Choosing sources

Once a repository is added, its sources are listed with the ones in your languages first. Tap **Get** to install one.

- **Show All Languages** lists sources in other languages too.
- A source with several languages can be installed in each you want. Swipe a language to remove it.
- Sources marked **18+** can show adult content.
- **Needs a newer app** means the source needs a newer version of Honya.

If your library has titles from a source your repositories offer but you haven't installed, such as after restoring a backup, the Sources screen offers to install it.

## Managing repositories

Tap a repository to see its sources, copy its address, or remove it. Removing a repository keeps the sources you installed from it, and their titles stay in your library.

With iCloud Sync on, your repositories and installed sources are the same on all your devices.

## Sources Honya removed

Honya can remove a source or repository after reports, for example one that shows illegal content or adult content that isn't marked 18+. You'll see **Removed by Honya** and the reason where it was listed.

- A removed source can't be installed. If it's installed already, Honya stops loading it and hides its titles in your library, history and updates. You can remove it from **Settings → Sources**.
- A removed repository offers no sources and can't be added again, and the sources installed from it stop loading too. If another repository offers the same source, you can install it from there.

To report a source or repository, go to **Settings → Report a Source or Repository**.

## Trying out your own repository

While you're writing a source, you can serve your repository from your Mac and add it by its local address. See [Quick start](/developers/quick-start/).
