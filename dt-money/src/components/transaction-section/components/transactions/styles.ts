import styled from 'styled-components'

export const TransactionContainer = styled.div`
  margin-top: 1.5rem;
`
export const TransactionTableContainer = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${({ theme }) => theme.color['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}
export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme.color['green-300']
      : props.theme.color['red-300']};
`

export const TransactionCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.75rem;
  padding: 1.25rem;
  background: ${({ theme }) => theme.color['gray-700']};
  border-radius: 6px;
  & > span {
    color: ${({ theme }) => theme.color['gray-300']};
    font-size: ${({ theme }) => theme.typography.sizes.s};
  }
  & > strong {
    font-size: ${({ theme }) => theme.typography.sizes.m};
    line-height: ${({ theme }) => theme.typography['line-height-160']};
    margin-bottom: 0.75rem;
  }
  > div {
    display: flex;
    justify-content: space-between;
    > div {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      color: ${({ theme }) => theme.color['gray-500']};
    }
  }
`
