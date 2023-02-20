import { createTheme, responsiveFontSizes } from '@mui/material/styles'

// app custom theme
let theme = createTheme({
  palette: {
    primary: {
      main: '#4C77A5',
      light: '#70A3CB',
      dark: '#2E4A78',
    },
    secondary: {
      main: '#EE7700',
      light: '#F9A526',
      dark: '#DF4E01',
    },
    background: {
      default: '#EEEEEE',
      paper: '#EEEEEE',
    },
    error: {
      main: '#DF4E01',
    },
  },
})

theme = responsiveFontSizes(theme)

export default theme
