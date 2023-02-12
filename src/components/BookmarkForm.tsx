import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useStateValue } from '../state'
import { Bookmark } from '../types'

const BookmarkForm = () => {
  const [, dispatch] = useStateValue()
  const [url, setUrl] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // create new bookmark with an unique id
    const newBookmark: Bookmark = {
      id: 'bookmarkapp-' + uuidv4(),
      url,
    }

    // update app state and save new bookmark to localSorage
    dispatch({ type: 'ADD_BOOKMARK', payload: newBookmark })
    localStorage.setItem(newBookmark.id, JSON.stringify(newBookmark))

    setUrl('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Bookmark:{' '}
        <input
          type="url"
          name={url}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  )
}

export default BookmarkForm
