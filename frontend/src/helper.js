export const FEED_ITEM_TYPE = {
  PUBLICATION: 'publication',
  RELATION_NEW: 'relation-new',
  SEARCH_ENGINE: 'search-engine',
  FACEBOOK_CONNECT: 'facebook-connect',
  FILL_PROFILE: 'fill-profile',
  GMAIL_CONNECT: 'gmail-connect'
}

export const getAvatarLetters = (slug) => {
  const trimmedSlug = slug.trim()
  let splitSpace = trimmedSlug.split(' ')
  if (splitSpace.length >= 2) return `${splitSpace[0].substr(0, 1)}${splitSpace[1].substr(0, 1)}`

  splitSpace = trimmedSlug.split(':')
  if (splitSpace.length >= 2) return `${splitSpace[0].substr(0, 1)}${splitSpace[1].substr(0, 1)}`

  return trimmedSlug.substr(0, 2)
}
