import ReactPaginate from 'react-paginate'
import './BookmarkListNavigation.css'
import { Paper, Grid, Button } from '@mui/material'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

interface BookmarkListNavigationProps {
  pageCount: number
  handlePagination: (selected: number) => void
}

const BookmarkListNavigation = ({
  pageCount,
  handlePagination,
}: BookmarkListNavigationProps) => {
  return (
    <Paper
      component="footer"
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <Grid container justifyContent="center">
        <ReactPaginate
          onPageChange={(e) => handlePagination(e.selected)}
          pageCount={pageCount}
          pageRangeDisplayed={4}
          breakLabel="..."
          previousLabel={
            <Button>
              <NavigateBeforeIcon /> prev
            </Button>
          }
          nextLabel={
            <Button>
              next <NavigateNextIcon />
            </Button>
          }
          renderOnZeroPageCount={undefined}
        />
      </Grid>
    </Paper>
  )
}

export default BookmarkListNavigation
