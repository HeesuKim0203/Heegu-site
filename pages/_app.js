import { GlobalStyle } from 'styles/GlobalStyle'
import 'styles/font.css'

export default function App({ Component, pageProps }) {
  return (
    <>
        <GlobalStyle/>
        <Component {...pageProps} />
    </>
  ) ;
}
