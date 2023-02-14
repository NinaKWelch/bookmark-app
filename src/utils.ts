import { v4 as uuidv4 } from 'uuid'

// validation checks whether URL exists
export const isExistingURL = async (url: string) => {
  let givenURL: URL = new URL(url)

  try {
    const response = await fetch(url, { mode: 'no-cors' })

    // the fetch fails if url does not exist
    if (response) {
      const faviconLink: string =
        'https://www.google.com/s2/favicons?domain=' + givenURL.hostname

      // if url exists, create new bookmark with an unique id
      return { id: 'bookmarkapp-' + uuidv4(), url, faviconLink }
    } else {
      return false
    }
  } catch (error) {
    return false
  }
}

// validation checks whether URL follows proper URL syntax
// https://snyk.io/blog/secure-javascript-url-validation/
export const isValidUrl = (url: string) => {
  let givenURL: URL

  try {
    givenURL = new URL(url)
  } catch (error) {
    return false
  }

  return givenURL.protocol === 'http:' || givenURL.protocol === 'https:'
}
