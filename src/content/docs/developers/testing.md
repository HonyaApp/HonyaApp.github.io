---
title: Testing
description: Trying a source in Honya from your Mac, and reading its logs.
---

## In the app

The simplest test is the real thing. `npm run dev` builds every source and serves the repository on port 8642. Add `http://localhost:8642` as a repository in the Simulator, or the network address it prints on a device, and install your source.

Work through what a reader would do:

- Browse the popular and latest lists, and page through them.
- Search, with and without filters.
- Open a title: check its details, cover and chapter list, newest first.
- Read a chapter, and download one.
- Share a title, and check the link opens it again.
- If you're porting, restore a Mihon backup with titles from the original and check they open.

After each change, rebuild, raise `version`, pull down in **Settings → Sources** and tap **Update**.

### Logs

`console.log` and `Honya.log` write to the app's log. Open Console.app on your Mac, choose the Simulator or device, and filter by the category `Extension <source name>`.
