import styled from 'styled-components'

export const QuantityInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  padding: 0.6rem 0.5rem;
  background: ${({ theme }) => theme.color['base-button']};
  border-radius: 6px;
  input {
    flex: 1;
    width: 2ch;
    text-align: center;
    background: none;
    border: none;
    font-size: ${({ theme }) => theme.typography.text.m};
    color: ${({ theme }) => theme.color['base-title']};
    &:focus {
      outline: none;
    }
  }
`
export const IconWrapper = styled.button.attrs({
  type: 'button',
})`
  cursor: pointer;
  width: 0.875rem;
  height: 0.875rem;
  border: none;
  background: none;
  color: ${({ theme }) => theme.color['purple-default']};
  transition: 0.4s;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.color['purple-dark']};
  }
`
