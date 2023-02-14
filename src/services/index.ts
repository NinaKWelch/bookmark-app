import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
const apiKey = process.env.REACT_APP_SCRAPE_API_KEY // saved to secrets at GitHub Pages
const apiURL = 'https://scrape.abstractapi.com/v1/?api_key=' + apiKey

//NOT IN USE
export const fetchBookmarkData = async (url: string) => {
  try {
    const response = await axios.get(apiURL + '&url=' + url)

    if (response && response.status === 200) {
      // if url exists, create new bookmark with an unique id
      return { id: 'bookmarkapp-' + uuidv4(), url }
    }

    return null
  } catch (error) {
    console.log('fetchBookmarkData error: ', error)
    return null
  }
}
