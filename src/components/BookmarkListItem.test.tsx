import { render, screen } from '@testing-library/react'
import BookmarkListItem from './BookmarkListItem'

test('renders bookmark', () => {
  const bookmark = {
    id: '0',
    url: 'https://google.com',
  }

  render(<BookmarkListItem bookmark={bookmark} />)

  const element = screen.getByText('https://google.com')
  expect(element).toBeDefined()
})
