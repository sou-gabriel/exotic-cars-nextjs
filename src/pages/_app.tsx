import type { AppProps } from 'next/app'

import { Layout } from 'components/Layout'
import { CarsProvider } from 'CarsContext'

import { GlobalStyle } from 'styles/global'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <CarsProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyle />
    </CarsProvider>
  )
}

export default MyApp
