import { useStateValue } from '../state'
import { Bookmark } from '../types'
import BookmarkListItem from './BookmarkListItem'

const BookmarkList = () => {
  const [{ bookmarks }] = useStateValue()

  return (
    <ul>
      {Object.values(bookmarks)?.map((bookmark: Bookmark) => (
        <BookmarkListItem key={bookmark.id} bookmark={bookmark} />
      ))}
    </ul>
  )
}

export default BookmarkList
