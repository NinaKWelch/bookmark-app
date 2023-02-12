import { useEffect } from 'react'
import { useStateValue } from './state'
import { Bookmark } from './types'
import BookmarkList from './components/BookmarkList'

const bookmarks: Bookmark[] = [
  {
    id: '0',
    url: 'https://google.com',
  },
  {
    id: '1',
    url: 'https://github.com',
  },
]

const App = () => {
  const [, dispatch] = useStateValue()

  useEffect(() => {
    dispatch({ type: 'SET_BOOKMARK_LIST', payload: bookmarks })
  }, [dispatch])

  return (
    <div>
      <header>
        <h1>Bookmark App</h1>
      </header>
      <main>
        <h2>Bookmark List</h2>
        <BookmarkList />
      </main>
    </div>
  )
}

export default App
