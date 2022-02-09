import styled, { css } from 'styled-components'

interface IStyledLinkProps {
  isFill?: boolean
}

export const Container = styled.div`
  padding-top: 3.31rem;

  @media (max-width: ${({ theme }) => theme.medias.mobileL}px) {
    padding-top: 1rem;
  }
`

export const Heading = styled.div`
  display: flex;
  gap: 2.43rem;

  @media (max-width: ${({ theme }) => theme.medias.mobileL}px) {
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.medias.mobileM}px) {
    margin-bottom: 0.5rem;
  }
`

export const BrandModel = styled.h1`
  font-size: 3.12rem;
  line-height: 4.18rem;
  color: ${({ theme }) => theme.colors.title};

  @media (max-width: ${({ theme }) => theme.medias.mobileL}px) {
    font-size: 2rem;
    line-height: 1.5;
  }
`

export const Price = styled.p`
  font-weight: 300;
  font-size: 2.5rem;
  line-height: 3.31rem;
  color: ${({ theme }) => theme.colors.title};

  @media (max-width: ${({ theme }) => theme.medias.mobileL}px) {
    font-size: 1.8rem;
    line-height: 1;
  }
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
  height: 18.12rem;

  margin-bottom: 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.medias.mobileL}px) {
    height: 24rem;

    flex-direction: column;
  }
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
