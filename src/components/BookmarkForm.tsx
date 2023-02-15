import { useState } from 'react'
import { useStateValue } from '../state'
import { Bookmark } from '../types'
import { isValidUrl, isExistingURL } from '../utils'

const BookmarkForm = () => {
  const [{ bookmarks }, dispatch] = useStateValue()
  const [url, setUrl] = useState<string>('')

  const addBookmark = async (url: string) => {
    try {
      const newBookmark: Bookmark | false = await isExistingURL(url)

      if (newBookmark) {
        // update app state and save new bookmark to localSorage
        dispatch({ type: 'ADD_BOOKMARK', payload: newBookmark })
        localStorage.setItem(newBookmark.id, JSON.stringify(newBookmark))

        setUrl('')
      }
    } catch (error) {
      throw new Error('NONEXISTENT URL')
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // prevent the same bookmark form being added twice
    if (Object.values(bookmarks).find((bookmark) => bookmark.url === url)) {
      throw new Error('ALREADY ADDED')
    } else {
      if (isValidUrl(url)) {
        addBookmark(url)
      } else {
        throw new Error('INVALID URL')
      }
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
      <button type="submit" disabled={!url}>
        save
      </button>
    </form>
  )
}

export default BookmarkForm
