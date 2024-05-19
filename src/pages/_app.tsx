import { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/globalStyle'
import { ToastContainer } from 'react-toastify';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Component {...pageProps} />
    <GlobalStyle />
    <ToastContainer 
    />
    </>
  )
}

export default MyApp
