import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.color['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div.attrs({ className: 'wrapper' })`
  img {
    max-width: 117px;
    width: 100%;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background: ${({ theme }) => theme.color['green-500']};
  color: ${({ theme }) => theme.color.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.color['green-700']};
    transition: background 0.2s;
  }
`
