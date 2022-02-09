import type { AppProps } from 'next/app'

import { Layout } from 'components'

import { GlobalStyle } from 'styles/global'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyle />
    </>
  )
}

export default MyApp
