import type { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline'
import Theme from 'containers/Theme'
import MainWrapper from 'containers/MainWrapper'
import ThemeProvider from 'context/ThemeProvider'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Theme>
        <CssBaseline />
        <MainWrapper>
          <Component {...pageProps} />
        </MainWrapper>
      </Theme>
    </ThemeProvider>
  )
}

export default App
