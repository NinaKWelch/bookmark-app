import { render, screen } from '@testing-library/react'
import BookmarkListItem from './BookmarkListItem'

test('renders bookmark', () => {
  const bookmark = {
    id: '0',
    url: 'https://google.com',
    faviconLink: 'https://www.google.com/s2/favicons?domain=google.com',
  }

  render(<BookmarkListItem bookmark={bookmark} />)

  const url = screen.getByText('https://google.com')
  expect(url).toBeInTheDocument()
})
