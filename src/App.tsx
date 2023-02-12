import { useEffect } from 'react'
import { useStateValue } from './state'
import { Bookmark } from './types'
import BookmarkForm from './components/BookmarkForm'
import BookmarkList from './components/BookmarkList'

const App = () => {
  const [, dispatch] = useStateValue()

  useEffect(() => {
    // update app state with bookmarks from localSorage (if any)
    const fetchBookmarksFromLocalStorage = () => {
      const bookmarks: Bookmark[] = []
      const keys = Object.keys(localStorage)

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
    <div>
      <header>
        <h1>Bookmark App</h1>
      </header>
      <main>
        <aside>
          <BookmarkForm />
        </aside>
        <BookmarkList />
      </main>
    </div>
  )
}

export default App
