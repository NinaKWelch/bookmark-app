import { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Grid, Button, IconButton } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove'
import AppWarning from './AppWarning'

interface BookmarkListOptionsProps {
  handleOpen: () => void
  handleDeleteAll: () => void
}

const BookmarkListOptions = ({
  handleOpen,
  handleDeleteAll,
}: BookmarkListOptionsProps) => {
  const theme = useTheme()
  const [warning, setWarning] = useState<boolean>(false)
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Grid item>
      {warning && (
        <AppWarning
          open={warning}
          handleClose={() => setWarning(false)}
          handleDeleteAll={handleDeleteAll}
        />
      )}
      <IconButton
        aria-label="settings"
        onClick={handleOpen}
        color="primary"
        sx={{ ml: 1 }}
      >
        <SettingsIcon />
      </IconButton>
      {smallScreen ? (
        <IconButton
          id="delete-all-button"
          aria-label="delete all"
          onClick={() => setWarning(true)}
          color="secondary"
          sx={{ ml: 1 }}
        >
          <BookmarkRemoveIcon />
        </IconButton>
      ) : (
        <Button
          id="delete-all-button"
          variant="text"
          color="secondary"
          aria-label="delete all"
          endIcon={<BookmarkRemoveIcon />}
          onClick={() => setWarning(true)}
          sx={{ ml: 1 }}
        >
          clear all
        </Button>
      )}
    </Grid>
  )
}

export default BookmarkListOptions
