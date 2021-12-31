import { ChakraProvider } from '@chakra/react'
import Layout from '../components/layouts/main'

const Website = ({ Components, pageProps, router }) => {
  return (
    <ChakraProvider>
      <Layout router={router}>
        <Components {...pageProps} key={router.router} />
      </Layout>
    </ChakraProvider>
  )
}

export default Website
