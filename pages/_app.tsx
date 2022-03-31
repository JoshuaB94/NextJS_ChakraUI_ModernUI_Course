import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

const ChakraUINextApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Component {...pageProps}/>
    </ChakraProvider>
  )
}

export default ChakraUINextApp;
