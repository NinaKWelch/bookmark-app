import { Grid, Button } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove'

interface BookmarkListOptionsProps {
  handleOpen: () => void
  handleDeleteAll: () => void
}

const BookmarkListOptions = ({
  handleOpen,
  handleDeleteAll,
}: BookmarkListOptionsProps) => (
  <Grid item>
    <Button
      variant="outlined"
      aria-label="settings"
      onClick={handleOpen}
      sx={{ mr: 1 }}
    >
      <SettingsIcon />
    </Button>

    <Button
      id="delete-all-button"
      variant="outlined"
      aria-label="delete all"
      endIcon={<BookmarkRemoveIcon />}
      onClick={handleDeleteAll}
      sx={[
        {
          '&:hover': {
            color: 'error.main',
            borderColor: 'error.main',
          },
        },
      ]}
    >
      Clear all
    </Button>
  </Grid>
)

export default BookmarkListOptions
