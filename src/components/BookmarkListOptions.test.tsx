import { render, screen } from '@testing-library/react'
import BookmarkListOptions from './BookmarkListOptions'

describe('Bookmark List Options', () => {
  test('renders both buttons', () => {
    const handleOpen = jest.fn()
    const handleDeleteAll = jest.fn()

    render(
      <BookmarkListOptions
        handleOpen={handleOpen}
        handleDeleteAll={handleDeleteAll}
      />
    )

    expect(screen.getByLabelText(/settings/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/delete all/i)).toBeInTheDocument()
  })
})
