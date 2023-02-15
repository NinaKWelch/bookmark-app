import { useState } from 'react'
import './BookmarkList.css'
import ReactPaginate from 'react-paginate'
import { useStateValue } from '../state'
import { Bookmark } from '../types'
import BookmarkListItem from './BookmarkListItem'

const BookmarkList = () => {
  const [{ bookmarks }, dispatch] = useStateValue()
  const [itemsPerPage, setItemsPerPage] = useState<number>(20)
  const [itemOffset, setItemOffset] = useState<number>(0)

  const listLength = Object.keys(bookmarks).length
  const pageCount = Math.ceil(listLength / itemsPerPage)

  const handlePagination = (e: any) => {
    const newItemOffset = (e.selected * itemsPerPage) % listLength
    setItemOffset(newItemOffset)
  }

  const deleteAll = () => {
    const keys = Object.keys(localStorage)

    for (let key of keys) {
      if (key.includes('bookmarkapp')) {
        localStorage.removeItem(key)
      }
    }

    dispatch({ type: 'DELETE_ALL_BOOKMARKS' })
  }

  const handleItemsPerPage = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setItemsPerPage(Number(e.target.value))

  if (listLength === 0) {
    return <p>No bookmarks added yet!</p>
  }

  return (
    <section>
      <h2>Bookmark List</h2>
      <button onClick={deleteAll}>clear all</button>
      <ul id="bookmark-list">
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
        pageRangeDisplayed={4}
        breakLabel="..."
        previousLabel="< prev"
        nextLabel="next >"
        renderOnZeroPageCount={undefined}
      />
      <form>
        <label>
          Bookmarks per page:{' '}
          <select onChange={handleItemsPerPage}>
            <option value="20">20</option>
            <option value="40">40</option>
            <option value={listLength}>All</option>
          </select>
        </label>
      </form>
    </section>
  )
}

export default BookmarkList
