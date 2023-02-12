import { render, screen } from '@testing-library/react'
import App from './App'

test('renders page title', () => {
  render(<App />)
  const title = screen.getByText(/bookmark app/i)
  expect(title).toBeInTheDocument()
})
