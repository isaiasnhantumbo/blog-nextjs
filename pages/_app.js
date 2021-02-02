import { createGlobalStyle, ThemeProvider } from 'styled-components'
import GlobalStyle from '../components/GlobalStyle'


const theme = {
  colors: {
    // primary: '#000f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
