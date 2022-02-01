import type { AppProps } from 'next/app'

function ModernChakraUIApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default ModernChakraUIApp;
