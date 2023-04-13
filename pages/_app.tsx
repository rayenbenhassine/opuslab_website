import { ScreenSizeProvider } from 'contexts/ScreenSizeContext'
import { NextIntlProvider } from 'next-intl'
import { AppProps } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ScreenSizeProvider>
      <NextIntlProvider messages={pageProps.messages}>
        <Component {...pageProps} />
      </NextIntlProvider>
    </ScreenSizeProvider>
  )
}

export default MyApp
