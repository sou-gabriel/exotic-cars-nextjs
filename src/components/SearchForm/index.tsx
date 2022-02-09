import LocationIcon from 'assets/icons/location.svg'
import CalendarIcon from 'assets/icons/calendar.svg'
import SearchIcon from 'assets/icons/search.svg'

import * as S from './styles'

export const SearchForm = () => {
  return (
    <S.Form>
      <S.Container>
        <S.InputBlock>
          <LocationIcon />
          <S.Input type="text" value="North Carolina, NC 90025" readOnly />
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
