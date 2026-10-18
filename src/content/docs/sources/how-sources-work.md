---
title: How sources work
description: What sources and repositories are, what a source can and can't do, and how Honya keeps them up to date.
---

Honya is a reader. It doesn't host, provide or endorse any content, and it comes with no sources. Everything you read comes from a source you chose to install.

## Sources

A **source** reads one website: its lists of titles, its search, each title's details and chapters, and each chapter's pages. Honya shows what the source finds, and remembers your library and progress.

A source is a small script, written in TypeScript by whoever made it and bundled into a single JavaScript file. Some files hold several sources, typically one site in several languages.

## Repositories

A **repository** is a list of sources someone publishes: a folder on the web with an `index.json` that describes each source, and the sources' scripts beside it. Anyone can host one for free, on GitHub or any static web host.

You add a repository by its address, then choose which of its sources to install. See [Adding a repository](/sources/repositories/).

## What a source can do

Sources run in their own sandbox inside Honya, in Apple's JavaScriptCore. They're not web pages and they can't reach anything Honya doesn't give them. They can:

- **Request pages from the web, through Honya.** Honya adds its User-Agent and the site's cookies, applies the source's rate limits so sites aren't flooded with requests, and handles Cloudflare checks.
- **Read HTML**, with a native parser.
- **Keep their own settings.**
- **Open a page in a hidden web view**, for sites whose scripts have to run before they hand out a token.

They can't see your library, your other sources, your files or anything else on your device. But a source does see what you browse and search for in it, and chooses what you see, so **only add repositories you trust**.

## Installing and updating

When you install a source, Honya downloads its script, checks it against the fingerprint (a SHA-256 hash) in the repository's `index.json`, and loads it once to make sure it works before installing it.

Honya checks your repositories for updates when you open the app, and when you pull down in **Settings → Sources**. When a newer version of a source is listed, **Update** installs it, or **Update All** updates every one.

Removing a source keeps its titles in your library. Removing a repository keeps the sources you installed from it.

## Versions

Each source declares the version of Honya's source interface (its **host API**) it needs. A source that needs a newer one than your app has is shown as **Needs a newer app** until you update Honya, so older apps keep working with the sources they can run.

## Adult content

Sources say whether a site can show adult content, and those sources are marked **18+**. Honya hides them, along with your titles from them, until you turn on **Show 18+ Sources** in the filter menu on **Settings → Sources**. Turning it on asks your Apple Account whether you're 18 or older, or asks you if your account can't say.

Turning it off hides them again. They stay installed, so turning it back on brings them and their titles back. With iCloud Sync on, the switch is the same on all your devices.

Some repository authors also publish a separate repository without 18+ sources.

## Your own files

Honya also reads comics you already have, without any source to install: a folder of CBZ, CBR and PDF files in the Files app, or a Komga server. See [Your own files and Komga](/sources/your-files/).

## Write your own

If there's a site you'd like to read in Honya, you can write a source for it. See [Writing sources](/developers/quick-start/).
