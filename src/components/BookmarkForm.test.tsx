import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BookmarkForm from './BookmarkForm'

describe('Bookmark Form', () => {
  test('disables submit button if input has no value', () => {
    render(<BookmarkForm />)

    expect(screen.getByLabelText(/add bookmark url/i)).not.toHaveValue()
    expect(screen.getByText(/save/i)).toBeDisabled()
  })

  test('displays correct input value', async () => {
    render(<BookmarkForm />)

    const input = screen.getByLabelText(/add bookmark url/i)

    userEvent.type(input, 'https://google.com')
    expect(input).toHaveValue('https://google.com')
  })
})
