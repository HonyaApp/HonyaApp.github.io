---
title: Your own files and Komga
description: Read CBZ, CBR and PDF files from a folder in Files, or the comics on your Komga server, and how to lay out the folder so Honya finds everything.
---

Besides sources from repositories, Honya reads comics you already have: files in **Honya's folder** in the Files app, a **folder** of files you pick, or a **Komga server** you run. Their titles join your library by themselves, and new ones turn up as you add them.

Honya's folder needs no setting up. To add another folder or a server, go to **Settings → Sources** and tap **Add Folder or Komga Server**.

## The Honya folder

Honya has a folder of its own in the Files app: **On My iPhone → Honya** (**On My iPad → Honya** on an iPad). Put CBZ, CBR and PDF files in it and they join your library the next time you open Honya, with nothing to choose or set up. It's laid out like any other folder: see [Lay out the folder](#lay-out-the-folder).

To get files into it:

- **In the Files app**, move or copy them to On My iPhone → Honya, from Downloads, iCloud Drive or anywhere else.
- **From a Mac**, connect your iPhone or iPad, select it in the Finder sidebar, click **Files**, and drag files onto **Honya**.
- **From Safari, Mail or another app**, share a CBZ, CBR or PDF file and choose **Honya**, or use **Open With → Honya** in Files. Honya copies it into its folder and opens it. Sharing the same file again doesn't add a second copy.

While the folder has no titles, Honya keeps a page called **How to Add Titles** in it, which is what keeps the folder showing in Files: Files hides an app's empty folder. You can delete the page once you've added files.

Once there's something in the folder, it shows in **Settings → Sources** as **Honya Folder**, with **Show in Files** to find it, and in **Discover** to browse. It has no **Remove Source** button: it goes away when its files do.

Delete a title's files or folder in the Files app and the title leaves your library the next time Honya checks the folder. Its reading progress stays, for if you put the same files back. This is only for the Honya folder: titles from a folder you pick stay in your library when their files are gone, since that folder may just be out of reach.

The files count towards Honya's space in **Settings → Storage**, and they're included in your device's backups. **Delete All Files** there deletes everything in the folder and takes its titles out of your library. It can't be undone. To delete only some files, use the Files app.

## Add a folder

1. Choose **Folder**, then tap **Folder** and pick the folder that holds your comics. It can be on your iPhone or iPad, in iCloud Drive, or anywhere else the Files app reaches.
2. Give it a name, or keep the folder's.
3. Leave **Add Titles to Library** on to put every title in your library, and pick the **Category** they go in.

Honya reads the folder straight away. Its titles show in your library, and the folder shows in **Discover** like any other source, to browse.

## Lay out the folder

Each folder inside the one you pick is a **title**. Each file or folder of images inside a title is a **chapter**.

```text
Comics/                      ← the folder you pick
├── Blue Harbor/             ← a title
│   ├── cover.jpg            ← its cover (optional)
│   ├── details.json         ← its details (optional)
│   ├── Blue Harbor 001.cbz  ← a chapter
│   ├── Blue Harbor 002.cbr
│   ├── Blue Harbor 003.pdf
│   └── Blue Harbor 004/     ← a chapter as a folder of images
│       ├── 01.jpg
│       └── 02.jpg
├── Night Train/
│   ├── Volume 1/            ← a folder of chapters
│   │   ├── Chapter 1.cbz
│   │   └── Chapter 2.cbz
│   └── Volume 2/
│       └── Chapter 3.cbz
├── Sketchbook/              ← only images: a one-chapter title
│   ├── 001.png
│   └── 002.png
└── Paper Moon.pdf           ← a file on its own: a one-chapter title
```

### Titles

- A title is named after its folder, or after its file without the extension.
- A file right inside the folder you pick (a CBZ, CBR or PDF) is a title with just that one chapter, which suits one-shots.

### Chapters

A chapter can be:

| Kind | Files |
| --- | --- |
| CBZ | `.cbz` or `.zip`: a zip of images |
| CBR | `.cbr` or `.rar`: a RAR of images (RAR 4 and RAR 5) |
| PDF | `.pdf`: each page is a page |
| Folder of images | a folder holding the page images |

Inside a title, a folder that holds chapters rather than images is read as a volume: its chapters are listed as **Volume 1 – Chapter 1** and so on. Only that one level is read: chapters need to be files or folders of images inside the volume folder.

A title folder that only holds images is a title with one chapter.

### Order and numbers

Chapters and pages go in name order, with numbers by value, so `Chapter 2` comes before `Chapter 10` without padding. Padding (`002`) still works.

Honya reads each chapter's number from its name: `Chapter 12`, `Ch. 12.5`, `Episode 3`, or else the last number in the name. The title's own name at the start is skipped, so in `Kaiju No. 8 - 045.cbz` the chapter is 45, not 8.

A chapter's date is its file's modified date.

### Pages

Pages can be JPEG, PNG, GIF, WebP, AVIF, HEIC, JPEG XL, BMP or TIFF. Inside a CBZ or CBR, images in folders are fine; they're read in order of their full path. Hidden files and macOS's `__MACOSX` folders are skipped, and so is anything that isn't an image.

### Covers

A title's cover is an image named `cover`, `folder` or `poster` in its folder (`cover.jpg`, `cover.png` and so on). Without one, it's the first page of the first chapter.

### Details

Honya fills in a title's author, artist, description, genres and status from these, when they're there:

- **`details.json`** in the title's folder, in Mihon's format:

  ```json
  {
    "title": "Blue Harbor",
    "author": "A. Writer",
    "artist": "B. Artist",
    "description": "A mystery in a harbour town.",
    "genre": ["Mystery", "Drama"],
    "status": "1"
  }
  ```

  `status` is `0` unknown, `1` ongoing, `2` completed, `3` licensed, `4` publishing finished, `5` cancelled or `6` on hiatus. A `title` here replaces the folder's name.

- **`ComicInfo.xml`**, the file comic taggers and Komga write, in the title's folder or inside its first chapter's CBZ or CBR. Honya reads its Summary, Writer, Penciller, Genre and Tags.

### What isn't read

CB7 (7-Zip), CBT (tar) and EPUB files, archives protected with a password, and RAR archives split into parts.

Chapters you've downloaded from other sources can join it too: [export them](/guide/downloads-and-storage/#export-chapters), and unzip the export into the folder.

## New files

Add files to the folder whenever you like, in the Files app, from a Mac, or by syncing. Honya looks for new titles and chapters:

- each time you open it (at most once a minute),
- with each library update, including pulling down to refresh,
- when you tap **Check for New Titles** on the folder's page in **Settings → Sources**.

New titles join your library, and new chapters of titles in it show in **Updates**. A title you remove from your library stays out, even though its folder is still there.

Your reading progress is kept by each chapter's path in the folder. **Renaming or moving a chapter's file makes it a new chapter**, unread, so rename files before you start reading them.

## Where to keep the folder

- **[The Honya folder](#the-honya-folder)** needs no setting up, and works offline.
- **On My iPhone or On My iPad** is the quickest, and works offline.
- **iCloud Drive** works too. Files download when you open them; to read offline, long-press the folder in Files and choose **Keep Downloaded**.
- **Other places Files reaches**, like a connected drive or a file server, work while they're connected. Pages load as fast as the connection allows.

Comics in a folder are already on your device, so their chapters have no download button. Honya unpacks CBR chapters and draws PDF pages into its cache as you read, and clears the oldest when the cache passes 1 GB. **Settings → Storage** doesn't count the files in a folder you pick, only those in the Honya folder.

Titles from a folder stay on this device: [iCloud Sync](/guide/sync/) leaves them out, since your other devices can't open the files. To read the same folder on another device, add it there too.

## Add a Komga server

[Komga](https://komga.org) is a server for your comics that runs on a computer or NAS.

1. Choose **Komga Server** and type the address you open Komga at in a browser, like `https://komga.example.com`. On your home network, `http://` with the computer's IP address or name and Komga's port works too, like `http://192.168.1.20:25600` or `http://nas.local:25600`. Anywhere else, Honya needs `https://`.
2. Sign in with your Komga **email and password**, or with an **API key** you make in Komga's web app under **Account Settings → API Keys**. Your password or key stays in this device's keychain, and is only sent to your server.
3. Name it, and choose whether its titles join your library.

Komga's series are titles, and its books are chapters, in Komga's order. Books that are EPUBs of text, not pages, are left out. Komga turns PDF pages into images itself.

- Honya looks for new series and books when you open it (at most every 15 minutes), with each library update, and when you tap **Check for New Titles**. It only reads the books of series that changed.
- You can download chapters from Komga to read offline, as from any source.
- With several Komga libraries, the **Filters** on the server's page in Discover choose one.
- Add the server with the same address and account on your other devices, and iCloud Sync lines up your library and progress across them.
- **Reading progress goes both ways.** As you read, Honya tells Komga the page you're on and when you finish a book, and marking chapters read or unread does the same. When Honya checks the server, books you've read further in Komga's own reader (or another app on it) catch up in Honya, so whichever you read last counts. Progress made offline goes to Komga the next time Honya reaches it. Two things stay one-way: reading in incognito isn't sent, and a book marked unread in Komga stays read in Honya.

## Change or remove one

In **Settings → Sources**, tap the folder or server. **Edit** picks the folder again (if you moved it, say) or changes the server's address or sign-in. **Add Titles to Library** and **Category** change what happens to new titles.

**Remove Source** asks whether its titles leave your library too. Your files, and everything on your Komga server, stay as they are.
