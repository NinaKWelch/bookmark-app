//import { Modal, ModalDialog, Typography, Box, Button } from '@mui/material'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material'

interface AppWarningProps {
  open: boolean
  handleClose: () => void
  handleDeleteAll: () => void
}

const AppWarning = ({
  open,
  handleClose,
  handleDeleteAll,
}: AppWarningProps) => {
  const deleteAll = () => {
    handleDeleteAll()
    handleClose()
  }
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Confirmation</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to clear all of your bookmarks?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="inherit" onClick={handleClose}>
          cancel
        </Button>
        <Button
          id="confirm-delete-button"
          aria-label="confirm delete"
          variant="contained"
          color="error"
          onClick={deleteAll}
        >
          clear all
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AppWarning
