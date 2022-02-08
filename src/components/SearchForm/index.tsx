import { FormEvent, useContext } from 'react'

import LocationIcon from 'assets/icons/location.svg'
import CalendarIcon from 'assets/icons/calendar.svg'
import SearchIcon from 'assets/icons/search.svg'

import { CarsContext } from 'CarsContext'

import * as S from './styles'

export const SearchForm = () => {
  const { setFeaturedCars } = useContext(CarsContext)

  const handleSearchFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.target as HTMLFormElement
    const cityName = form.city.value.trim().toLowerCase()

    try {
      const response = await fetch(`http://localhost:3000/api/cars/${cityName}`)

      if (!response.ok) {
        throw new Error("Couldn't get the cars")
      }

      const cars = await response.json()
      setFeaturedCars(cars)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <S.Form onSubmit={handleSearchFormSubmit}>
      <S.Container>
        <S.InputBlock>
          <LocationIcon />
          <S.Input type="text" placeholder="Enter city name" name="city" />
        </S.InputBlock>
        <S.InputBlock>
          <CalendarIcon />
          <S.Input type="date" value="2021-11-03" readOnly />
        </S.InputBlock>
        <S.InputBlock>
          <CalendarIcon />
          <S.Input type="date" value="2021-11-03" readOnly />
        </S.InputBlock>
      </S.Container>
      <S.SubmitButton>
        <SearchIcon />
      </S.SubmitButton>
    </S.Form>
  )
}
