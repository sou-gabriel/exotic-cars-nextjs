import styled from 'styled-components'

export const FeedbackMessageContainer = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const FeedbackMessage = styled.strong`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.title};
  text-align: center;

  opacity: 0.19;
`

export const CarsList = styled.ul`
  padding-top: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem 0.83rem;
  flex-wrap: wrap;

  list-style: none;

  position: relative;
`

export const CarItem = styled.li`
  width: 18rem;
  border-radius: 20px;

  overflow: hidden;

  background: #f8f8fa 0% 0% no-repeat padding-box;
`

export const RedirectButton = styled.button`
  padding: 1.4rem 1rem;
  border: transparent;
  background: transparent;
`

export const Heading = styled.header`
  margin-bottom: 0.375rem;

  text-align: left;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const Brand = styled.strong`
  display: block;

  font-size: 1.06rem;
  line-height: 1.37rem;
  color: ${({ theme }) => theme.colors.title};
  text-align: left;
`

export const Model = styled.span`
  font-weight: 300;
  font-size: 1.37rem;
  color: ${({ theme }) => theme.colors.title};
  text-transform: uppercase;
`

export const DetailsButton = styled.span`
  display: flex;
  align-items: center;

  background: transparent;

  border: transparent;
`

export const Bullet = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;

  background: ${({ theme }) => theme.colors.bulletBackground};

  opacity: 0.64;

  & + span {
    margin-left: 2px;
  }
`

export const Price = styled.p`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.title};
  text-align: right;

  sub {
    font-weight: 300;
    font-size: 14px;
  }
`
