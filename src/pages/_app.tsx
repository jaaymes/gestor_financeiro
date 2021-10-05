import { ThemeProvider } from 'styled-components';
import '../styles/globals.css';
import {GlobalStyle} from '../styles/globalStyle';
import {theme} from '../styles/theme';
import {AppProps} from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
