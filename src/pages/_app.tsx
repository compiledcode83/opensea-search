import '../styles/globals.css'
import { ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import theme from '../styles/theme/theme'
import store from '../store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
