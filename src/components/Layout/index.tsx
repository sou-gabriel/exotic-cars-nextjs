import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import { Header } from '../Header'

import { theme } from 'styles/theme'
import * as S from './styles'

interface ILayout {
  children: ReactNode | ReactNode[]
}

export const Layout = ({ children }: ILayout) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>
        <S.Content>{children}</S.Content>
      </main>
    </ThemeProvider>
  )
}
