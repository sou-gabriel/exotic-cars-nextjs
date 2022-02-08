import Link from 'next/link'

import { SearchForm } from 'components/SearchForm'

import * as S from './styles'

export const Header = () => {
  return (
    <S.Header>
      <S.Container>
        <Link href="/" passHref>
          <S.Logo>
            <span>Exotic</span> <span>Cars</span>
          </S.Logo>
        </Link>

        <SearchForm />

        <S.Links>
          <Link href="/signup" passHref>
            <S.SignUpLink>Sign up</S.SignUpLink>
          </Link>

          <Link href="/signin" passHref>
            <S.SignInLink>Sign in</S.SignInLink>
          </Link>
        </S.Links>
      </S.Container>
    </S.Header>
  )
}
