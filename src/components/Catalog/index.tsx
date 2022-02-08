import Image from 'next/image'
import { useRouter } from 'next/router'

import * as S from './styles'

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

interface ICatalogProps {
  cars: ICar[]
}

export const Catalog = ({ cars }: ICatalogProps) => {
  const router = useRouter()

  const storageCar = (car: ICar) => {
    sessionStorage.setItem('activeCar', JSON.stringify(car))
  }

  const redirectUser = (id: number) => {
    router.push(`/cars/${id}`)
  }

  return (
    <S.CarsList>
      {cars.map(car => {
        return (
          <S.CarItem key={car.id}>
            <S.RedirectButton
              onClick={() => {
                storageCar(car)
                redirectUser(car.id)
              }}
            >
              <S.Heading>
                <div>
                  <S.Brand>{car.brand.name}</S.Brand>
                  <S.Model>{car.model}</S.Model>
                </div>
                <S.DetailsButton title="Acessar detalhes">
                  <S.Bullet />
                  <S.Bullet />
                  <S.Bullet />
                </S.DetailsButton>
              </S.Heading>

              <Image
                src={car.thumbnail}
                alt={car.brand.name}
                width={244}
                height={107}
                objectFit="scale-down"
              />

              <S.Price>
                <strong>
                  <sup>$</sup>
                  {car.price.amount}
                </strong>
                <sub>/{car.price.period}</sub>
              </S.Price>
            </S.RedirectButton>
          </S.CarItem>
        )
      })}
    </S.CarsList>
  )
}
