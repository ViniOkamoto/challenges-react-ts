import styled, { css } from 'styled-components'

export const PaymentMethodContainer = styled.div`
  position: relative;
  input {
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    ${({ theme }) => css`
      background: ${theme.color['purple-light']};
      border-color: ${theme.color['purple-default']};

      &:hover {
        background: ${theme.color['purple-light']};
      }
    `}
  }
`

export const ContentContainer = styled.div`
  padding: 1rem;
  background: ${({ theme }) => theme.color['base-button']};
  color: ${({ theme }) => theme.color['base-text']};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.typography.roboto['font-family']};
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.color['base-button']};
  transition: 0.4s;

  svg {
    color: ${({ theme }) => theme.color['purple-default']};
  }

  &:hover {
    background: ${({ theme }) => theme.color['base-hover']};
  }

  user-select: none;
`
