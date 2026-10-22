---
title: Privacy
description: What Honya keeps, what it sends and to whom, and what this website logs.
---

_Last updated 18 October 2026._

Honya has no account, and no analytics or tracking. Your library, reading history and settings belong to you and stay on your devices, or in your iCloud account if you choose. The only things that reach us are the notes you send from **Send Feedback** and the reports you send from **Report a Source or Repository**.

## On your device

Your library, reading progress, history, bookmarks, downloads, settings and installed sources are stored on your device. Deleting Honya deletes them.

## iCloud

With **iCloud Sync** on, Honya keeps your library, progress, history, page bookmarks, settings and sources in your private iCloud database, and with download sync on, your downloaded chapters too. That data is stored by Apple under your Apple Account, under [Apple's privacy policy](https://www.apple.com/legal/privacy/). We can't see it.

## Sources and the websites they read

When you browse, search or read with a source, your device connects to that source's website directly, as a browser would. The site sees your device's network address, Honya's User-Agent and its own cookies, and its own privacy policy applies. A source can see what you browse and search for in it, which is why Honya asks you to add only repositories you trust.

Adding or refreshing a repository downloads its listing and scripts from wherever it's hosted, often GitHub. When Honya checks your repositories, about once a day, it also downloads from this website the list of sources and repositories it has removed after reports. That request contains nothing about you or your library.

## Your own files and Komga

When you add a folder in **Settings → Sources**, Honya reads its files on your device. Nothing from them is uploaded, and titles from a folder stay out of iCloud Sync.

When you add a Komga server, your device connects to it directly, and tells it which of its books you've read and how far, as Komga's own reader does. Your password or API key is kept in this device's keychain and only sent to that server. Titles from it sync through iCloud like any others; the sign-in doesn't. Connecting to a server on your home network asks for permission to use your local network.

## MyAnimeList

Honya only talks to [MyAnimeList](https://myanimelist.net) once you sign in, in **Settings → MyAnimeList**. You sign in on MyAnimeList's own page, so Honya never sees your password. It gets a token that lets it read and change your manga list, keeps it in this device's keychain, and doesn't sync or back it up.

While you're signed in, your device connects to MyAnimeList directly. Honya reads your user name and your manga list. It searches MyAnimeList by the names of the titles you add or check. And it changes your list: the chapters read, status, and start and finish dates of linked titles, and the titles you add or remove. Nothing is sent while you read in incognito mode, or for titles in categories you exclude. MyAnimeList's [privacy policy](https://myanimelist.net/about/privacy_policy) covers what it receives.

Which titles are linked, and your MyAnimeList settings, are kept with your library: synced through iCloud if it's on, and in your backups.

## Age check

Sources marked 18+ stay hidden until you turn on **Show 18+ Sources**. When you do, Honya asks your Apple Account, through Apple's Declared Age Range feature, whether you're 18 or older. You choose whether to share it, and Apple tells Honya only that, not your birthday. If your Apple Account can't say, Honya asks you instead. Honya keeps only whether the switch is on, synced with your other settings when iCloud Sync is on, and doesn't send your age anywhere.

## Other services Honya uses

- **AniList.** For Discover's anime season banners, Honya asks [AniList](https://anilist.co) for each season's most popular anime. The request contains nothing about you or your library.
- **MyAnimeList.** Only once you sign in. See [MyAnimeList](#myanimelist).
- **MangaUpdates.** With **Look Up Alternative Titles** on, Honya looks up the other names of titles you add or restore on [MangaUpdates](https://www.mangaupdates.com). Only each title's name and author are sent.

## Feedback

When you send feedback from **Settings → Send Feedback**, Honya sends your note, its kind (a feature request, a problem, or something else), and any screenshots you attach. If you leave **Include Device Details** on, it adds your app version, device model, iOS version and language.

Notes are stored in Honya's iCloud container, identified by an anonymous iCloud identifier rather than your name or email address. Only you and we can read them. We use them to improve Honya and fix problems, and nothing else.

## Reports

When you report a source or repository from **Settings → Report a Source or Repository**, Honya sends the reason you chose and anything you write. For a source, it adds the source's name, ID, language, version and website, and the repository it came from. For a repository, it adds the repository's name and address. It also adds your app version. A report has no screenshots and nothing from your library.

Reports are stored like feedback: in Honya's iCloud container, identified by an anonymous iCloud identifier rather than your name or email address, and only you and we can read them. We use them to decide which sources and repositories Honya removes, and nothing else.

## Share links

A [share link](/guide/sharing/) contains the title's source, its address on that source, its name, and its page on the site. It doesn't say who shared it. When someone without Honya opens one, this website's server receives it like any other page request.

## This website

This website has no cookies, ads or analytics. It's hosted on GitHub Pages. GitHub's servers record the network address of each visit, as [GitHub's privacy statement](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement) describes, to run and protect the service. Opening a share link sends its details to those servers like any other address.

If you choose a light or dark theme on these pages, your browser remembers the choice itself; it isn't sent anywhere.

## Changes

If what Honya collects changes, we'll update this page and the date at the top.
