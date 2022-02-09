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
