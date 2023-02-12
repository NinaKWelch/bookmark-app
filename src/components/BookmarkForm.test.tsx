import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BookmarkForm from './BookmarkForm'

describe('Bookmark Form', () => {
  test('input accepts a valid url', () => {
    render(<BookmarkForm />)

    const urlInput = screen.getByLabelText(/bookmark/i)
    const submitButton = screen.getByText(/save/i)

    userEvent.type(urlInput, 'https://google.com')
    userEvent.click(submitButton)
    expect(urlInput).toHaveValue('')
  })
})
