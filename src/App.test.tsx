import { render, screen } from '@testing-library/react'
import App from './App'

describe('Bookmark App', () => {
  beforeAll(() => {
    localStorage.clear()
  })

  afterAll(() => {
    localStorage.clear()
  })

  test('renders page title', () => {
    render(<App />)
    const title = screen.getByText(/bookmark app/i)
    expect(title).toBeInTheDocument()
  })

  test('initial bookmark list is empty', () => {
    render(<App />)
    const text = screen.getByText(/no bookmarks/i)
    expect(text).toBeInTheDocument()
  })
})
