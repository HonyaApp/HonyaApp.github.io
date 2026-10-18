---
title: Backup and restore
description: Back up to a Honya or Mihon file, and restore from Honya, Mihon, Tachiyomi and Paperback backups.
---

**Settings → Backup and Restore** saves your library to a file, and brings a library in from one.

## Create a backup

**Create Backup** saves your library, reading progress and settings to a file. Choose its kind:

- **Honya backup** (`.honbako`, after 本箱, a book box): everything in the app. Restore it in Honya to get back exactly what you had, including settings, page bookmarks, custom covers and installed sources.
- **Mihon backup** (`.tachibk`): what Mihon and its forks can restore, for taking your library to Android. Titles linked to [MyAnimeList](/guide/myanimelist/) carry Mihon's MyAnimeList tracker.

Save it wherever you like: Files, iCloud Drive, or another app.

## Restore a backup

**Restore Backup** adds a backup to your library. Nothing already in Honya is removed. Before restoring, Honya shows what's in the file so you can check it.

You can also open a backup from the Files app, or share it to Honya from another app. Honya opens **Backup and Restore** with the file ready.

### From Honya (`.honbako`)

Titles, chapters, reading progress, bookmarks, history and categories, plus settings, page bookmarks, custom covers, [MyAnimeList](/guide/myanimelist/) links, source settings and repositories. The sources the backup had are installed from their repositories as it's restored, where they're still listed.

### From Mihon or Tachiyomi (`.tachibk`)

Titles, chapters, reading progress, bookmarks, history and categories. Mihon's MyAnimeList tracker links titles for [MyAnimeList](/guide/myanimelist/). Each source's settings come across too, and anything Honya can't use yet, like other trackers and some settings, is kept for later.

Each title is restored on the matching source in Honya, found by the same source ID Mihon uses. When your repositories offer a source your restored titles need, **Settings → Sources** offers to install it.

### From Paperback (`.pas4`, `.pas5`)

Your library, collections (as categories) and reading progress. Each title is restored on the matching source in Honya, with its progress.

## Titles without a source

A backup can hold titles from sources you don't have, or that no repository you've added offers. Those titles are added to your library with everything about them, marked with a warning, ready for when the source is. Install the source in **Settings → Sources**, or [migrate](/guide/migration/) them to one you have.

## After restoring

The report lists what was added and updated: titles, chapters, reading progress, categories, settings, page bookmarks, covers, and sources installed or not. Sources that couldn't be installed are listed with why, so you can add them when they're available.
