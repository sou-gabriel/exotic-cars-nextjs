import Head from 'next/head'

import { Catalog } from 'components'

interface ICar {
  id: number
  city: string
  brand: {
    name: string
    logo: string
  }
  model: string
  thumbnail: string
  price: {
    amount: number
    period: string
  }
  colors: {
    color: string
    image: string
  }[]
}

const Home = () => {
  return (
    <>
      <Head>
        <title>Exotic Cars</title>
      </Head>
      <Catalog />
    </>
  )
}

export default Home
