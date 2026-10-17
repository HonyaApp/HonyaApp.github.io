---
title: Filters
description: Offering a site's search filters, fetching them from the site, and merging Popular and Latest into the sort.
---

`getFilterList()` returns the filters a source's search offers, as plain data. Honya shows them on the source's **Filters** screen, and `searchManga` receives the same list with the user's choices filled in.

## Filter kinds

They're Mihon's kinds. Every filter has an `id`, the source's own key for it.

| `type` | Shown as | The user's choice is in |
|---|---|---|
| `header` | A heading | |
| `separator` | A divider | |
| `text` | A text field | `value` |
| `select` | A menu of `options` | `selected`, an index |
| `checkboxes` | Options to tick | `checked`, a list of values |
| `tristates` | Options to include, exclude or ignore | `included` and `excluded`, lists of values |
| `sort` | A menu of orders, ascending or descending | `selected` and `ascending` |

Options are `{ label, value }`. The value is what the source sends to the site, and how Honya remembers a choice.

```ts
getFilterList() {
  return [
    { type: "select", id: "sort", name: "Sort by", options: sortOptions, selected: 0,
      listings: { popular: "views", latest: "updated" } },
    { type: "checkboxes", id: "status", name: "Status", checked: [],
      options: [{ label: "Ongoing", value: "ongoing" }, { label: "Completed", value: "completed" }] },
    { type: "tristates", id: "genre", name: "Genres", included: [], excluded: [], options: genres },
    { type: "text", id: "author", name: "Author", value: "" },
  ]
},
```

In `searchManga`, turn the list into the site's query. With no filters set, Honya passes an empty list, so fall back to the defaults:

```ts
async searchManga(page, query, filters) {
  const list = filters.length > 0 ? filters : this.getFilterList!()
  const params: [string, string | number][] = [["q", query], ["page", page]]
  for (const filter of list) {
    if (filter.type === "select") params.push([filter.id, filter.options[filter.selected].value])
    if (filter.type === "checkboxes") filter.checked.forEach((value) => params.push([filter.id, value]))
    if (filter.type === "tristates") {
      filter.included.forEach((value) => params.push(["with_genre", value]))
      filter.excluded.forEach((value) => params.push(["without_genre", value]))
    }
    if (filter.type === "text" && filter.value) params.push([filter.id, filter.value])
  }
  return mangaList(`${baseUrl}/search?${queryString(params)}`)
}
```

`getFilterList` is synchronous, and may read `Honya.prefs` but nothing else from `Honya`.

## Popular and Latest in the sort

Honya merges its **Popular** and **Latest** lists into the source's sort, so that the user has one **Sort By** menu. So that the same list isn't offered twice, the sort says which of its options give `getPopularManga`'s and `getLatestUpdates`' lists, by value:

```ts
{ type: "select", id: "sort", name: "Sort by", options, selected: 0, listings: { popular: "popular", latest: "" } }
```

Honya shows those options in place of its own Popular and Latest. Leave out one that no option matches, and Honya adds its own; `listings: {}` says neither does.

The sort is the filter with `listings`, else the first `sort`, else the first `select` named like "Sort by" or "Order by". The build fails on a sort without `listings`, so every source makes the call. It also checks that the values are among the sort's options, that `latest` is only set when `supportsLatest` is, and that the two aren't the same option.

## Filters from the site

Some filters come from the site, like the genres it currently lists. These work as Mihon's `fetchFilterData` does:

1. `fetchFilterData()` fetches what the filters need and returns anything JSON can hold.
2. Honya keeps the result for a day, per version of the source, and passes it to `getFilterList(data)`.
3. Until it has, `data` is `undefined`, so `getFilterList` returns the filters that work without it.

Honya fetches the data when the source's Browse screen opens, and updates the filters once it arrives.

```ts
async fetchFilterData() {
  const document = await fetchHTML(`${baseUrl}/genres`)
  return document.select(".genre-list a").map((a) => ({ label: a.text(), value: a.attr("data-id") }))
},

getFilterList(data) {
  const genres = (data as FilterOption[] | undefined) ?? []
  return [
    sortFilter,
    ...(genres.length > 0 ? [{ type: "tristates", id: "genre", name: "Genres", options: genres, included: [], excluded: [] } as const] : []),
  ]
},
```

`fetchFilterData` needs host API 3. Apps older than that never call it, and pass `undefined`.
