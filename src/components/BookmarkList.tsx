import { useState } from 'react'
import { useStateValue } from '../state'
import { Bookmark } from '../types'
import { Grid, Typography, List } from '@mui/material'
import BookmarkListOptions from './BookmarkListOptions'
import BookmarkListItem from './BookmarkListItem'
import BookmarkListNavigation from './BookmarkListNavigation'
import AppSettings from './AppSettings'

const BookmarkList = () => {
  const [{ bookmarks }, dispatch] = useStateValue()
  const [itemsPerPage, setItemsPerPage] = useState<number>(20)
  const [itemOffset, setItemOffset] = useState<number>(0)
  const [open, setOpen] = useState<boolean>(false)

  const listLength = Object.keys(bookmarks).length
  const pageCount = Math.ceil(listLength / itemsPerPage)

  const handlePagination = (selected: number) => {
    const newItemOffset = (selected * itemsPerPage) % listLength
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

  if (listLength === 0) {
    return <p>No bookmarks added yet!</p>
  }

  return (
    <>
      <Grid
        container
        component="section"
        alignContent="space-between"
        justifyContent="space-between"
      >
        <Typography component="h2" variant="h5" color="primary">
          Bookmarks
        </Typography>
        <BookmarkListOptions
          handleOpen={() => setOpen(true)}
          handleDeleteAll={deleteAll}
        />
        <Grid item xs={12}>
          <List dense id="bookmark-list">
            {Object.values(bookmarks)
              ?.filter(
                (bookmark: Bookmark, index: number) =>
                  index >= itemOffset && index < itemOffset + itemsPerPage
              )
              .map((bookmark: Bookmark) => (
                <BookmarkListItem key={bookmark.id} bookmark={bookmark} />
              ))}
          </List>
        </Grid>
        {open && (
          <AppSettings
            open={open}
            handleClose={() => setOpen(false)}
            itemsPerPage={itemsPerPage}
            handleItemsPerPage={setItemsPerPage}
            listLength={listLength}
          />
        )}
      </Grid>
      <BookmarkListNavigation
        pageCount={pageCount}
        handlePagination={handlePagination}
      />
    </>
  )
}

export default BookmarkList
