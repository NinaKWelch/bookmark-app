import { useState } from 'react'
import './BookmarkList.css'
import ReactPaginate from 'react-paginate'
import { useStateValue } from '../state'
import { Bookmark } from '../types'
import BookmarkListItem from './BookmarkListItem'

const BookmarkList = () => {
  const [{ bookmarks }] = useStateValue()
  const [itemsPerPage, setItemsPerPage] = useState<number>(2)
  const [itemOffset, setItemOffset] = useState<number>(0)

  const listLength: number = Object.keys(bookmarks).length
  const pageCount: number = Math.ceil(listLength / itemsPerPage)

  const handlePagination = (e: any) => {
    const newItemOffset = (e.selected * itemsPerPage) % listLength
    setItemOffset(newItemOffset)
  }

  if (listLength === 0) {
    return <p>No bookmarks added yet!</p>
  }

  //const handleItemsPerPage = (num: number) => setItemsPerPage(num)

  return (
    <section>
      <h2>Bookmark List</h2>
      <ul>
        {Object.values(bookmarks)
          ?.filter(
            (bookmark: Bookmark, index: number) =>
              index >= itemOffset && index < itemOffset + itemsPerPage
          )
          .map((bookmark: Bookmark) => (
            <BookmarkListItem key={bookmark.id} bookmark={bookmark} />
          ))}
      </ul>
      <ReactPaginate
        onPageChange={handlePagination}
        pageCount={pageCount}
        breakLabel="..."
        previousLabel="< prev"
        nextLabel="next >"
        renderOnZeroPageCount={undefined}
      />
    </section>
  )
}

export default BookmarkList
