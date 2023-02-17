import { render, screen } from '@testing-library/react'
import AppContent from './AppContent'

describe('Bookmark App Content', () => {
  beforeAll(() => {
    localStorage.clear()
  })

  afterAll(() => {
    localStorage.clear()
  })

  test('initial bookmark list is empty', () => {
    render(<AppContent />)

    expect(screen.getByText(/no bookmarks/i)).toBeInTheDocument()
  })
})
