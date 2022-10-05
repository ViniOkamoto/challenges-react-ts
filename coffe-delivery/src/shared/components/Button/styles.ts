import styled from 'styled-components'

export const ButtonContainer = styled.button`
  border-radius: 6px;
  background: ${({ theme }) => theme.color['yellow-default']};
  border: 0;
  padding: 0.75rem;
  transition: 0.5s;

  span {
    font-size: ${({ theme }) => theme.typography.components.buttonG};
    color: ${({ theme }) => theme.color.white};
    font-weight: bold;
    text-transform: uppercase;
  }

  :hover {
    background: ${({ theme }) => theme.color['yellow-dark']};
  }
`
