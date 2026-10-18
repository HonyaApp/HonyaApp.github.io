---
title: Troubleshooting
description: What to do when a source stops working, a link won't open, or sync and updates don't behave.
---

## A source stops working

Sources read websites, and websites change. When a site changes its pages, its source can stop finding titles, chapters or pages until it's updated.

1. Pull down in **Settings → Sources** to check for updates, and tap **Update** if there's one.
2. Try **Open in WebView** on the title or source. If the site asks you to sign in or pass a check, do that there, then go back.
3. If it still fails, tell whoever maintains the repository. Honya doesn't make or maintain sources, so it can't fix one, but the people who publish them can.

In the meantime you can [migrate](/guide/migration/) titles to another source that has them.

## "Needs a newer app"

A source marked **Needs a newer app** uses something your version of Honya doesn't have yet. Update Honya from the App Store to install it.

## A shared link says the source isn't installed

The title is on a source you haven't added. Find a repository that offers it, add the source in **Settings → Sources**, and tap the link again. Until then, **Open in Browser** shows the title on its site.

## Restored titles have a warning on them

They're from sources you don't have yet. See [Titles without a source](/guide/backup-and-restore/#titles-without-a-source).

## Automatic updates run late

iOS decides when apps get to run in the background, based on things like battery, connection and how often you use the app. Opening Honya starts an update if the last one was more than four hours ago, and pulling down in **Updates** checks straight away. **Only on Wi-Fi** and **Only While Charging** make them run less often.

## Downloads are paused

Check **Settings → Download Queue**. Downloads wait while you're offline, and **Resume** carries on where they stopped. A chapter that failed can be retried from the queue.

## iCloud Sync isn't syncing

- Make sure you're signed in to iCloud in the Settings app, and that iCloud is allowed for Honya there.
- Check **Settings → iCloud Sync** in Honya for its status, and tap **Sync Now**.
- Each device fetches its own chapter lists, so a new chapter can show up on one device before another.

## Still stuck?

Send us a note from **Settings → Send Feedback**. See [Support](/about/support/).
