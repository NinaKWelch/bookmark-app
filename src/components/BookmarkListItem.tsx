import { useStateValue } from '../state'
import { Bookmark } from '../types'
import {
  ListItem,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  IconButton,
} from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'

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
    <ListItem
      disablePadding
      secondaryAction={
        <IconButton
          id="delete-button"
          edge="end"
          aria-label="delete"
          onClick={handleDelete}
          sx={[
            {
              '&:hover': {
                color: 'error.main',
              },
            },
          ]}
        >
          <ClearIcon />
        </IconButton>
      }
    >
      <ListItemButton
        dense
        component="a"
        href={bookmark.url}
        target="_blank"
        rel="noreferrer"
      >
        <ListItemAvatar>
          <Avatar sx={{ backgroundColor: 'white' }}>
            <img
              src={bookmark.faviconLink}
              alt="Bookmark favicon"
              width="16"
              height="16"
            />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={bookmark.url} />
      </ListItemButton>
    </ListItem>
  )
}

export default BookmarkListItem
