import Image from 'next/image'

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
  return (
    <S.CarsList>
      {cars.map(({ id, brand, model, thumbnail, colors, price }) => (
        <S.CarItem key={id}>
          <S.Heading>
            <div>
              <S.Brand>{brand.name}</S.Brand>
              <S.Model>{model}</S.Model>
            </div>
            <S.DetailsButton title="Acessar detalhes">
              <S.Bullet />
              <S.Bullet />
              <S.Bullet />
            </S.DetailsButton>
          </S.Heading>

          <Image
            src={thumbnail}
            alt={brand.name}
            width={244}
            height={107}
            layout="fixed"
          />
          <S.Price>
            <strong>
              <sup>$</sup>
              {price.amount}
            </strong>
            <sub>/{price.period}</sub>
          </S.Price>
        </S.CarItem>
      ))}
    </S.CarsList>
  )
}
