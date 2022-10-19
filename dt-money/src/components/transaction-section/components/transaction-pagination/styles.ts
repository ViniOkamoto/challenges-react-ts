import styled from 'styled-components'

export const TransactionPaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`

export const PaginationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 6px;
  width: 2.5rem;
  height: 2.5rem;
  font-size: ${({ theme }) => theme.typography.sizes.s};
  font-weight: ${({ theme }) => theme.typography.font.weight.bold};
  color: ${({ theme }) => theme.color['gray-400']};
  background: ${({ theme }) => theme.color['gray-600']};

  :disabled {
    background: ${({ theme }) => theme.color['green-700']};
    color: ${({ theme }) => theme.color.white};
    cursor: not-allowed;
  }
`

export const PaginationIconButton = styled.button`
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color['green-300']};
  background: transparent;

  :disabled {
    color: ${({ theme }) => theme.color['gray-600']};
  }
`
