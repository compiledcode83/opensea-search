import { createTheme } from '@mui/material/styles'

const themeColors = {
  text: {
    primary: '#fff',
    lightBlue: '#c6d0eb',
    lavender: '#e4e2ee',
    purple: '#462ab6',
    gray: '#abaabe',
    subtitle: '#9191ab'
  },
  bg: {
    primary: '#1c2134',
    linear: 'linear-gradient(0, #222942 0%, rgba(34, 41, 66, 0) 100%)',
    containerCard: '#22283f',
    containerImage: '#2f354e;',
    hoverCard: '#3f4c76',
    hoverImage: '#3c4b7a',
    input: '#30364e',
    lightGray: '#f0f3f5'
  },
  button: {
    violet: '#6957c6',
    lavender: '#7876bd',
    iceBlue: '#9eaecd',
    purple2: '#5758ba',
  },
  danger: {
    primary: '#db4a5c'
  }
} as const

const theme = createTheme({
  ...themeColors,
  palette: {
    mode: 'dark'
  }
})

export default theme
