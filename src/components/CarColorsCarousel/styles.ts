import styled, { css } from 'styled-components'

interface IBackground {
  isActive: boolean
}

export const Container = styled.div`
  margin-top: 0.2rem;

  position: relative;

  @media (max-width: ${({ theme }) => theme.medias.laptop}px) {
    position: static;

    display: flex;
    flex-direction: column-reverse;
    gap: 0.5rem;

    padding-bottom: 1rem;
  }
`

export const Actions = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  z-index: 1;

  @media (max-width: ${({ theme }) => theme.medias.laptop}px) {
    position: static;

    transform: translateY(0);

    justify-content: center;
    gap: 1rem;
  }
`

export const SlideMoveButton = styled.button`
  width: 2.625rem;
  height: 2.625rem;

  background-color: ${({ theme }) => theme.colors.title};
  box-shadow: 0px 3px 6px #00000029;

  border: none;

  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.shape};

  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Background = styled.div<IBackground>`
  width: 20rem;
  height: 11rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;

  box-shadow: 0px 5px 20px #0000001a;

  ${({ isActive }) => {
    return isActive
      ? css`
          background: linear-gradient(90deg, #b9baf1 0%, #e0d3ef 100%);
        `
      : css`
          background: linear-gradient(90deg, #c8c8ca 0%, #f3f1fc 100%);
        `
  }};

  @media (max-width: ${({ theme }) => theme.medias.laptop}px) {
    width: 16rem;
  }

  @media (max-width: ${({ theme }) => theme.medias.mobileL}px) {
    width: 9rem;
  }

  @media (max-width: ${({ theme }) => theme.medias.mobileM}px) {
    width: 7.5rem;
  }
`
