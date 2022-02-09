import { useRef } from 'react'
import Image from 'next/image'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/bundle'

import { IColor } from 'shared/interfaces/cars'
import * as S from './styles'
import styles from 'styles/carousel.module.css'

interface ICarColorsCarousel {
  colors: IColor[]
  onIndexChange: (newIndex: number) => void
}

export const CarColorsCarousel = ({
  colors,
  onIndexChange,
}: ICarColorsCarousel) => {
  const navigationPrevRef = useRef<HTMLButtonElement>(null)
  const navigationNextRef = useRef<HTMLButtonElement>(null)

  return (
    <S.Container>
      <S.Actions>
        <S.SlideMoveButton ref={navigationPrevRef}>
          <BsArrowLeft />
        </S.SlideMoveButton>

        <S.SlideMoveButton ref={navigationNextRef}>
          <BsArrowRight />
        </S.SlideMoveButton>
      </S.Actions>

      <Swiper
        modules={[Navigation]}
        spaceBetween={1}
        slidesPerView={3}
        roundLengths
        centeredSlides
        centeredSlidesBounds
        grabCursor
        loop
        className={styles.slider}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onActiveIndexChange={({ realIndex }) => {
          onIndexChange(realIndex)
        }}
        onBeforeInit={swiper => {
          if (typeof swiper.params.navigation !== 'boolean') {
            swiper.params.navigation!.prevEl = navigationPrevRef.current
            swiper.params.navigation!.nextEl = navigationNextRef.current
          }
        }}
      >
        {colors.map(({ color, image }) => {
          return (
            <SwiperSlide key={color} className={styles.swiperSlide}>
              {({ isActive }) => (
                <S.Background isActive={isActive}>
                  <Image
                    src={image}
                    alt={color}
                    width={279}
                    height={147}
                    objectFit="cover"
                  />
                </S.Background>
              )}
            </SwiperSlide>
          )
        })}
      </Swiper>
    </S.Container>
  )
}
