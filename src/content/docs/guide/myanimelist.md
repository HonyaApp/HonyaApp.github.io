---
title: MyAnimeList
description: Sign in to MyAnimeList to keep your list's chapters read up to date as you read, bring your list into your library, and add your library to your list.
---

Sign in to [MyAnimeList](https://myanimelist.net) and Honya keeps your manga list up to date as you read. It can also bring the manga on your list into your library, and add the titles in your library to your list.

## Sign in

Go to **Settings → MyAnimeList** and tap **Sign In to MyAnimeList**. You sign in on MyAnimeList's own page, so Honya never sees your password.

Honya keeps the sign-in on this device only, so sign in on each iPhone or iPad you read on. Your links and settings still [sync to the others](#sync-and-backups), and come into use as soon as you sign in there.

## Link titles

Honya keeps track of which title in your library is which manga on MyAnimeList. Titles get linked when you:

- **Add one from its page**: tap **⋯ → Add to MAL**. Honya searches MyAnimeList under every name the title has, and you pick the one it is. A title not on your list yet is added to it as Reading if you've read some, Completed if you've read it all, or Plan to Read if you haven't started.
- **Add it to your library**, with **Add New Titles to Your List** on. See [Add new titles by themselves](#add-new-titles-by-themselves).
- [Import](#import-from-myanimelist) or [export](#export-to-myanimelist) your list.
- Restore a backup that has them, including a Mihon backup with Mihon's MyAnimeList tracker.

To take a title off your list, tap **⋯ → Remove from MAL** on its page. It's removed from your list straight away, and unlinked.

## Sync reading progress

With **Sync Reading Progress** on:

- **Finishing a chapter**, or marking chapters read, updates the title on your list to the highest chapter you've read.
- **Planned, paused or dropped titles** move to Reading when you read them, and to Completed when you read the last chapter MyAnimeList knows of. A completed title stays completed, so rereading doesn't undo it.
- **Chapters read elsewhere**, on MyAnimeList itself or in another app, are marked read in Honya. Honya checks your list when you open it, at most once an hour. To check straight away, pull down on **Settings → MyAnimeList**.

Progress only goes forward. Marking chapters unread doesn't change your list, and nothing is sent while you read in [incognito mode](/guide/history-and-incognito/#incognito-mode).

What you read on a device that isn't signed in reaches your list too: it syncs through iCloud, and a signed-in device sends it the next time it checks.

### Excluded categories

**Excluded Categories** leaves titles out of syncing either way: reading them doesn't change your list, and chapters read elsewhere aren't marked read in Honya. Use it for a category you'd rather keep to yourself. You can still add one of those titles from its page.

## Add new titles by themselves

With **Add New Titles to Your List** on, titles you add to your library from then on are added to your list too, unless they're in an excluded category. Honya waits a few seconds after you add one, so you can choose its categories first.

Each new title is looked up once. If MyAnimeList doesn't list it under any of its names, add it from its page with **Add to MAL**. A title you've removed from your list isn't added back.

## Import from MyAnimeList

**Import from MyAnimeList** brings the manga on your list into your library from your sources.

1. Under **Lists to Import**, turn on the lists to bring in: Reading, Completed, On Hold, Dropped and Plan to Read. Dropped is off at first. Novels are always left out, since sources don't have them.
2. Choose the **Category** titles go in: **By MyAnimeList Status** puts each in a category for its list, made if you don't have it. Or choose Uncategorized, or one of your own.
3. Under **Sources to Search**, put the sources to look on in order, top first. Tap − to move one to **Sources to Exclude**, and + to bring it back.
4. Tap **Search Sources**.

Honya looks for each title on every source you chose, and shows how it went:

- **On Your List**: the titles with the statuses you chose.
- **To Import**: the ones not in your library yet.
- **Found** and **Not Found**: how many of those a source has.

Open **Found** or **Not Found** to check each title, laid out like [Migration](/guide/migration/): the title on your list above where it'd come from. Tap the match to choose another source's, or **Search Manually**. Swipe to skip a title.

**Import** adds the titles found to your library with their chapters, and marks chapters read up to the count on your list. Titles already in your library are linked rather than added again.

Going back from the results ends the search, and nothing is imported.

## Export to MyAnimeList

**Export to MyAnimeList** adds the titles in your library to your list. Turn off **Include Titles Not Started** to leave out titles you haven't read yet. Titles in excluded categories are always left out.

Tap **Check Your Library**. Honya looks each title up on MyAnimeList under its names. Nothing is added yet, but titles already on your list that you've read further in Honya have their chapters read raised to match straight away, keeping their status.

Then it shows:

- **To Export**: titles not on your list. Untick any you don't want added, such as a wrong match.
- **Already on Your List**
- **Not Found**: titles MyAnimeList doesn't list under any of their names. Tap one to search MyAnimeList yourself and pick the match. Closing the search without picking leaves it here.

**Export** adds the ticked titles to your list as Reading, Completed or Plan to Read by the chapters you've read, with no start or finish dates. The **Summary** then shows how many were added, how many of your titles are now on your list, and how many weren't found.

Titles that aren't found are remembered, so later checks skip them for 30 days and finish sooner. **Search Again** on the **Not Found** page looks for them all straight away.

## Sync and backups

- **Links** sync through [iCloud](/guide/sync/), and are kept in [backups](/guide/backup-and-restore/). A Mihon backup made in Honya has them as MyAnimeList trackers, so Mihon tracks the same titles.
- **Settings**: Sync Reading Progress, Excluded Categories, Add New Titles to Your List, and what you last chose to import and export. These sync and are backed up too.
- **Your sign-in** stays on each device. It isn't synced or backed up.

## Sign out

**Sign Out** forgets your sign-in on this device. Your list stays as it is, and your titles stay linked for when you sign in again. Until then, **Add to MAL** and **Remove from MAL** don't show on titles' pages.

What Honya sends to MyAnimeList is described in [Privacy](/about/privacy/#myanimelist).
