import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section.attrs({ className: 'wrapper' })`
  overflow: scroll;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem !important;
`
interface SummaryCardProps {
  variant?: 'green' | 'red'
}
export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${({ theme }) => theme.color['gray-600']};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.color['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: ${({ theme }) => theme.typography.sizes.xl};
  }

  ${(props) => {
    if (props.variant) {
      return css`
        background: ${props.variant === 'green'
          ? props.theme.color['green-700']
          : '#C80214'};
      `
    }
  }}
`
