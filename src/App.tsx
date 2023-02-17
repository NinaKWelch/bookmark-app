import { useEffect } from 'react'
import { useStateValue } from './state'
import { Bookmark } from './types'
import { Container } from '@mui/material'
import AppHeader from './components/AppHeader'
import AppContent from './components/AppContent'

const App = () => {
  const [, dispatch] = useStateValue()

  useEffect(() => {
    // update app state with bookmarks from localSorage (if any)
    const fetchBookmarksFromLocalStorage = () => {
      const bookmarks: Bookmark[] = []
      const keys = Object.keys(localStorage).reverse()

      for (let key of keys) {
        if (key.includes('bookmarkapp')) {
          const bookmark = JSON.parse(localStorage[key])
          bookmarks.push(bookmark)
        }
      }

      dispatch({ type: 'SET_BOOKMARK_LIST', payload: bookmarks })
    }

    fetchBookmarksFromLocalStorage()
  }, [dispatch])

  return (
    <Container disableGutters sx={{ height: '100vh' }}>
      <AppHeader />
      <AppContent />
    </Container>
  )
}

export default App
