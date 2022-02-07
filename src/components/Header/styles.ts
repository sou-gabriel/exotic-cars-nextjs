import styled from 'styled-components'

export const Header = styled.header`
  padding: 1.6rem 0;
  box-shadow: 0px 10px 30px #0000001a;
`

export const Container = styled.div`
  max-width: 1220px;

  margin: 0 auto;
  padding: 0 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.a`
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.title};
  text-transform: uppercase;

  > span:nth-child(1) {
    letter-spacing: 0.96px;
    font-weight: 600;
  }

  > span:nth-child(2) {
    letter-spacing: 0.64px;
    font-size: 1rem;
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
