import type { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline'
import Theme from 'containers/Theme'
import MainWrapper from 'containers/MainWrapper'
import ThemeProvider from 'context/ThemeProvider'
import { store } from 'store'
import { Provider } from 'react-redux'

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Theme>
          <CssBaseline />
          <MainWrapper>
            <Component {...pageProps} />
          </MainWrapper>
        </Theme>
      </ThemeProvider>
    </Provider>
  )
}

export default App
