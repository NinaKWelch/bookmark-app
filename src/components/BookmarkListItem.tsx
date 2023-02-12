import { Bookmark } from '../types'

interface BookmarkListItemProps {
  bookmark: Bookmark
}

const BookmarkListItem = ({ bookmark }: BookmarkListItemProps) => {
  return <li>{bookmark.url}</li>
}

export default BookmarkListItem
