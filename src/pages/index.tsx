import Head from 'next/head'

import { Catalog } from 'components'

import { api } from 'shared/services/api'
import { ICar } from 'shared/interfaces/cars'

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

const fetchCars = async () => {
  try {
    const response = await api.get('cars')
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const getStaticProps = async () => {
  const cars = await fetchCars()

  return {
    props: {
      cars,
    },
  }
}

export default Home
