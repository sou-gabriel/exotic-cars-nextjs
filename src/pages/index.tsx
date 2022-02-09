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

interface IHomeProps {
  cars: ICar[]
}

const Home = ({ cars }: IHomeProps) => {
  return (
    <>
      <Head>
        <title>Exotic Cars</title>
      </Head>
      <Catalog cars={cars} />
    </>
  )
}

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/cars')
  const data = await response.json()

  return {
    props: {
      cars: data,
    },
  }
}

export default Home
