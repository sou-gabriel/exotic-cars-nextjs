import styled from 'styled-components'

export const Form = styled.form`
  height: 2.25rem;

  padding: 0.1rem 0.5rem 0.1rem 1.7rem;

  border-radius: 18px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #f3f1fc;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const InputBlock = styled.div`
  display: inline-flex;
  align-items: center;
`

export const Input = styled.input`
  margin-left: 0.4rem;

  border: 0;

  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1rem;
  color: ${({ theme }) => theme.colors.text};

  background: transparent;
`

export const SubmitButton = styled.button`
  width: 1.87rem;
  height: 1.87rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border: transparent;

  background: ${({ theme }) => theme.colors.shape};
  box-shadow: 0px 3px 15px #00000014;
`
