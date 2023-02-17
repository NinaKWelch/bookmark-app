import { Toolbar, Typography } from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'

const AppHeader = () => (
  <Toolbar sx={{ mb: 3, backgroundColor: 'secondary.main', color: 'white' }}>
    <BookmarkBorderIcon color="inherit" />
    <Typography component="h1" variant="h5">
      Bookmark App
    </Typography>
  </Toolbar>
)

export default AppHeader
