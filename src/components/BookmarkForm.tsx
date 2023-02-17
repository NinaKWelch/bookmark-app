import { useState } from 'react'
import { useStateValue } from '../state'
import { Bookmark } from '../types'
import { isValidUrl, isExistingURL } from '../utils'
import { Grid, TextField, Button } from '@mui/material'

const BookmarkForm = () => {
  const [{ bookmarks }, dispatch] = useStateValue()
  const [url, setUrl] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const addBookmark = async (url: string) => {
    setLoading(true)

    try {
      // prevent non-existing url from being added
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

    setLoading(false)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // prevent the same bookmark form being added twice
    if (Object.values(bookmarks).find((bookmark) => bookmark.url === url)) {
      throw new Error('ALREADY ADDED')
    } else {
      // prevent invalid urls form being added
      if (isValidUrl(url)) {
        addBookmark(url)
      } else {
        throw new Error('INVALID URL')
      }
    }
  }

  return (
    <Grid container component="form" onSubmit={handleSubmit}>
      <TextField
        required
        label="Add Bookmark Url"
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        sx={{ flexGrow: 1 }}
      />
      <Button
        id="save-button"
        variant="contained"
        type="submit"
        disabled={!url || loading}
        sx={{ ml: 1 }}
      >
        save
      </Button>
    </Grid>
  )
}

export default BookmarkForm
