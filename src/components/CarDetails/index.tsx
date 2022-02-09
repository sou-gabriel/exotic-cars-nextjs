import { useState } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'

import { CarColorsCarousel } from 'components/CarColorsCarousel'
import { ICar } from 'shared/interfaces/cars'
import * as S from './styles'

export const CarDetails = () => {
  const [activeColorIndex, setActiveColorIndex] = useState(0)

  const car: ICar = JSON.parse(sessionStorage.getItem('activeCar') || '')

  const handleActiveColorIndexChange = (newIndex: number) => {
    setActiveColorIndex(newIndex)
  }

  return (
    <S.Container>
      <S.Heading>
        <Image
          src={car.brand.logo}
          alt={car.brand.name}
          width={91}
          height={123}
          objectFit="cover"
        />
        <div>
          <S.BrandModel>
            {car.brand.name} {car.model}
          </S.BrandModel>
          <S.Price>$725/day</S.Price>
        </div>
      </S.Heading>

      <S.Column>
        <S.Preview>
          <Link href="/" passHref>
            <S.StyledLink>
              <BsArrowLeft size={24} />
              Back to catalog
            </S.StyledLink>
          </Link>

          <Image
            src={car.colors[activeColorIndex].image}
            alt={car.model}
            width={783}
            height={408}
            objectFit="scale-down"
          />

          <S.Tag>
            <span>
              {activeColorIndex < 10
                ? `0${activeColorIndex + 1}`
                : activeColorIndex + 1}
            </span>
            <br />
            <span>{car.colors[activeColorIndex].color}</span>
          </S.Tag>
        </S.Preview>
        <Link href="/" passHref>
          <S.StyledLink isFill>
            Book now
            <BsArrowRight size={24} />
          </S.StyledLink>
        </Link>
      </S.Column>

      <CarColorsCarousel
        colors={car.colors}
        onIndexChange={handleActiveColorIndexChange}
      />
    </S.Container>
  )
}
