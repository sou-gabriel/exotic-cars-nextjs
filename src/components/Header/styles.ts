import styled from 'styled-components'

export const Header = styled.header`
  padding: 1.6rem 0;
  box-shadow: 0px 10px 30px #0000001a;
`

export const Container = styled.div`
  max-width: 1220px;

  margin: 0 auto;
  padding: 0 0.5rem;

  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;
  grid-template-areas: 'logo form links';

  @media (max-width: ${({ theme }) => theme.medias.tablet}px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      'logo links'
      'form form';
    justify-content: space-between;
    row-gap: 0.5rem;
  }

  @media (max-width: ${({ theme }) => theme.medias.mobileL}px) {
    grid-template-rows: 1fr;
    row-gap: 0;
  }
`

export const Logo = styled.a`
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.title};
  text-transform: uppercase;

  grid-area: logo;

  > span:nth-child(1) {
    letter-spacing: 0.96px;
    font-weight: 600;
  }

  > span:nth-child(2) {
    letter-spacing: 0.64px;
    font-size: 1rem;
  }
`

export const Links = styled.div`
  grid-area: links;

  @media (max-width: ${({ theme }) => theme.medias.tablet}px) {
    justify-self: end;
  }
`

export const SignUpLink = styled.a`
  display: inline-block;

  font-weight: 600;
  font-size: 1rem;
  line-height: 1.3rem;
  color: ${({ theme }) => theme.colors.purple};
`

export const SignInLink = styled(SignUpLink)`
  margin-left: 2.75rem;
  padding: 0.4rem 1rem;

  border: 2px solid ${({ theme }) => theme.colors.purple};
  border-radius: 13px;
`
