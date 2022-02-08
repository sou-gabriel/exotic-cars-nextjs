import styled, { css } from 'styled-components'

interface IBackground {
  isActive: boolean
}

export const Container = styled.div`
  position: relative;
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

export const Actions = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  z-index: 1;
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
`
