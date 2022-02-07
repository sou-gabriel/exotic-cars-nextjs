import Head from 'next/head'

import { Catalog } from 'components/Catalog'

interface ICar {
  id: number
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

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3000/api/cars')
  const cars = await response.json()

  return {
    props: {
      cars,
    },
  }
}

export default Home
