import { useStateValue } from '../state'
import { Bookmark } from '../types'

interface BookmarkListItemProps {
  bookmark: Bookmark
}

const BookmarkListItem = ({ bookmark }: BookmarkListItemProps) => {
  const [, dispatch] = useStateValue()

  const handleDelete = () => {
    localStorage.removeItem(bookmark.id)
    dispatch({ type: 'DELETE_BOOKMARK', payload: bookmark.id })
  }

  return (
    <li>
      <a href={bookmark.url} target="_blank" rel="noreferrer">
        <img src={bookmark.faviconLink} alt="logo" /> {bookmark.url}
      </a>{' '}
      <button onClick={handleDelete}>delete</button>
    </li>
  )
}

export default BookmarkListItem
