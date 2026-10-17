// Facts about the app that more than one page needs. Change them here, not in the pages.

/**
 * Honya's App Store ID, the digits in its App Store link. Until it's set, pages say Honya is
 * coming to the App Store instead of linking there, and the share page leaves out Safari's
 * app banner.
 */
export const appStoreID: string | null = null

export const appStoreURL = appStoreID ? `https://apps.apple.com/app/id${appStoreID}` : null

/** The public repository with the SDK and its example source, for people writing sources. */
export const sdkRepositoryURL = "https://github.com/HonyaApp/Extensions"

/** The app's current host API version (`JSRuntime.apiVersion`), for the developer docs. */
export const hostAPIVersion = 4

/** iOS and iPadOS version the app needs. */
export const minimumOS = "18"
