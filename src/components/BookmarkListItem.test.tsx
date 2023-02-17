import { render, screen } from '@testing-library/react'
import BookmarkListItem from './BookmarkListItem'

describe('Bookmark List Item', () => {
  test('renders bookmark', () => {
    const bookmark = {
      id: '0',
      url: 'https://google.com',
      faviconLink: 'https://www.google.com/s2/favicons?domain=google.com',
    }

    render(<BookmarkListItem bookmark={bookmark} />)

    expect(screen.getByText('https://google.com')).toBeInTheDocument()
  })
})
