---
title: Downloads and storage
description: Downloading chapters to read offline, cleaning up after reading, syncing downloads through iCloud, and freeing space.
---

## Download chapters

On a title's page, tap the download button beside a chapter, or swipe it. The **Download** menu on the title's page downloads several at once: the next unread chapter, the next five, all unread chapters, or every chapter.

Downloads carry on in the background. Follow them in **Settings → Download Queue**, where you can pause, resume, retry or cancel them. The Settings tab's badge counts the chapters waiting to download.

Downloaded chapters open without a connection, and look the same as they do online.

## Export chapters

To read downloaded chapters in another app, keep them on a computer, or move them to a Komga server, export them. Go to **Settings → Export Downloads**, select the titles you want, and tap the share button. To export just one title, open the **Download** menu on its page and choose **Export Downloads**.

Choose a format for the chapters:

- **CBZ**, which almost every comic reader opens. Each one includes a `ComicInfo.xml` with the series, chapter, author and genres.
- **PDF**, which opens anywhere, Books included. Pages go in as they were downloaded, at full quality.
- **Images**, a folder of page images per chapter.

Everything comes as one zip, with a folder for each title:

```text
Honya Export 2026-10-18.zip
└── Loner Life in Another World/
    ├── cover.webp
    ├── details.json
    ├── Chapter 334.cbz
    └── Chapter 335.cbz
```

Then share the zip: **Save to Files**, AirDrop it, or open it in another app. It's the same layout Honya reads [folders of your files](/sources/your-files/) in, so unzipping it into a folder you've added (or into a Komga library) brings the titles back with their covers and details.

## Choose how chapters are kept

Honya keeps each downloaded chapter as a folder of page images. **Settings → Downloads → Save Chapters As** keeps each new chapter as one file instead:

- **Images**: the pages as they were downloaded.
- **CBZ**: one zip of the pages, unchanged inside.
- **PDF**: one PDF, a page per image. A PDF keeps JPEG pages exactly as they are, but would have to change other kinds of images, so a chapter with WebP or PNG pages stays as images.

Honya never changes a page to fit a format. Before it removes a chapter's images, it reads every page back from the new file and checks it's exactly what was downloaded; if one isn't, the chapter stays as images.

- Every format takes about the same space. Pages are already compressed, so packing them saves only a percent or two.
- Reading is as fast either way, and a download that's interrupted still carries on where it stopped: pages are downloaded one by one, then packed once the chapter is complete.
- Changing the format offers to convert the chapters you've already downloaded. Converting back gives the same images, unchanged.
- Downloads are kept inside Honya whatever the format, out of the Files app; to use chapters elsewhere, [export them](#export-chapters) from **Settings → Export Downloads**.
- It's set on each device.

## Delete chapters after reading

**Settings → Downloads → Delete Chapters** clears away downloads you've finished with:

- **After Marking as Read** deletes a chapter's download when you mark it read.
- **After Reading** deletes downloads when you close the reader. It can keep the last few chapters you read, so you can look back.
- **Include Bookmarked Chapters** decides whether bookmarked chapters are deleted too.
- **Excluded Categories**: titles in these categories keep their downloads.

## Sync downloads through iCloud

With [iCloud Sync](/guide/sync/) on, **Settings → Downloads → Sync Downloads** uploads the chapters you download to iCloud, and saves chapters downloaded on your other devices to this one. So you can download on your iPad at home and read on your iPhone on the train.

- Deleting a download deletes it on every device with download sync on.
- Downloads use your iCloud storage. Settings shows how many chapters are in iCloud and how much space they take.
- **Only on Wi-Fi** keeps syncing off mobile data.
- Turning it on offers to upload the chapters already downloaded on this device. New downloads upload on their own.
- **Remove Downloads from iCloud** frees the iCloud storage. Chapters stay downloaded on your devices.

Download sync is set on each device.

## Storage

**Settings → Storage** shows how much space Honya uses on this device, and what you can free:

- **Downloads**, title by title. Select titles or chapters to delete them, or use **Delete Read Chapters** to remove every chapter you've finished. Bookmarked chapters are kept.
- **Honya Folder**, the files you've put in [Honya's folder](/sources/your-files/#the-honya-folder) in the Files app, once there are some. **Delete All Files** deletes every file there and takes their titles out of your library. It can't be undone.
- **Caches** hold covers and pages you've seen, so they load quickly next time. Clearing them keeps your downloads, and you stay signed in to sites. They fill again as you browse and read.
- **App Data** is what the app needs to work: your library, history and installed sources. Sources can be removed in **Settings → Sources**.
