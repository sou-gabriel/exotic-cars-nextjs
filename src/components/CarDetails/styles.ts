import styled, { css } from 'styled-components'

interface IStyledLinkProps {
  isFill?: boolean
}

export const Container = styled.div`
  padding-top: 3.31rem;
`

export const Heading = styled.div`
  display: flex;
  gap: 2.43rem;
`

export const BrandModel = styled.h1`
  font-size: 3.12rem;
  line-height: 4.18rem;
  color: ${({ theme }) => theme.colors.title};
`

export const Price = styled.p`
  font-weight: 300;
  font-size: 2.5rem;
  line-height: 3.31rem;
  color: ${({ theme }) => theme.colors.title};
`

export const StyledLink = styled.a<IStyledLinkProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  white-space: nowrap;

  width: 11rem;

  padding: 0.875rem;

  border: 1px solid ${({ theme }) => theme.colors.title};
  border-radius: 25px;

  font-weight: 400;
  font-size: 1rem;
  color: ${({ theme, isFill }) =>
    isFill ? theme.colors.shape : theme.colors.title};

  background-color: ${({ theme, isFill }) =>
    isFill ? theme.colors.title : theme.colors.shape};
  box-shadow: 0px 5px 20px #0000001a;

  path {
    font-size: 24px;
    color: ${({ theme, isFill }) =>
      isFill ? theme.colors.shape : theme.colors.title};
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Preview = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Tag = styled.span`
  align-self: flex-start;

  color: ${({ theme }) => theme.colors.title};
  text-align: center;

  > span:nth-child(1) {
    font-weight: bold;
    font-size: 3.125rem;
    line-height: 4.18rem;
  }

  > span:nth-child(3) {
    font-weight: 300;
    text-transform: capitalize;
    font-size: 1.875rem;
  }
`
