import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

function ChakraUINextApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps}/>
    </ChakraProvider>
  )
}

export default ChakraUINextApp
