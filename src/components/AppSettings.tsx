import React from 'react'
import Button from '@mui/material/Button'
import { visuallyHidden } from '@mui/utils'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
} from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select'

interface AppSettingsProps {
  open: boolean
  handleClose: () => void
  itemsPerPage: number
  handleItemsPerPage: React.Dispatch<React.SetStateAction<number>>
  listLength: number
}

const AppSettings = ({
  open,
  handleClose,
  itemsPerPage,
  handleItemsPerPage,
  listLength,
}: AppSettingsProps) => {
  const handleChange = (e: SelectChangeEvent) => {
    handleItemsPerPage(Number(e.target.value))
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>App Settings</DialogTitle>
      <DialogContent>
        <Grid container alignItems="center">
          <Grid item xs={8}>
            <DialogContentText sx={{ mr: 3 }}>
              Bookmarks per page:
            </DialogContentText>
          </Grid>
          <Grid item xs={4}>
            <FormControl>
              <InputLabel htmlFor="my-input" sx={visuallyHidden}>
                Items per page
              </InputLabel>
              <Select
                id="items-per-page"
                value={itemsPerPage.toString()}
                onChange={handleChange}
              >
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={40}>40</MenuItem>
                <MenuItem value={listLength}>All</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button color="inherit" onClick={handleClose}>
          close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AppSettings
