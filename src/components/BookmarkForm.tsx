import { useState } from 'react'
import { fetchBookmarkData } from '../services'
import { useStateValue } from '../state'
import { Bookmark } from '../types'
import { isValidUrl } from '../utils'

const BookmarkForm = () => {
  const [{ bookmarks }, dispatch] = useStateValue()
  const [url, setUrl] = useState<string>('')

  const addBookmark = async (url: string) => {
    try {
      const newBookmark: Bookmark | null = await fetchBookmarkData(url)

      if (newBookmark) {
        // update app state and save new bookmark to localSorage
        dispatch({ type: 'ADD_BOOKMARK', payload: newBookmark })
        localStorage.setItem(newBookmark.id, JSON.stringify(newBookmark))

        setUrl('')
      } else {
        console.log('NONEXISTENT URL')
      }
    } catch (error) {
      console.log('addBookmark error:', error)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // prevent the same bookmark form being added twice
    if (Object.values(bookmarks).find((bookmark) => bookmark.url === url)) {
      console.log('ALREADY ADDED')
    } else {
      isValidUrl(url) ? addBookmark(url) : console.log('INVALID URL')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Bookmark Url:{' '}
        <input
          type="url"
          name={url}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
        />
      </label>{' '}
      <button type="submit">Save</button>
    </form>
  )
}

export default BookmarkForm
