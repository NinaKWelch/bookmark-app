// validation checks whether URLs follow proper URL syntax
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
