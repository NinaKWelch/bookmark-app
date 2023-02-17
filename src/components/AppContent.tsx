import { Container, Box } from '@mui/material'
import BookmarkForm from './BookmarkForm'
import BookmarkList from './BookmarkList'

const AppContent = () => (
  <Container component="main" maxWidth="sm">
    <Box component="aside" sx={{ mb: 4 }}>
      <BookmarkForm />
    </Box>
    <BookmarkList />
  </Container>
)

export default AppContent
