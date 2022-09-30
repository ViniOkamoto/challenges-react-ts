import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'danger'

interface ButtonProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonProps>`
  width: 100%;
  padding: 1rem;
  border: 0;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  background-color: ${(props) => {
    return props.variant === 'primary'
      ? props.theme['green-500']
      : props.theme['red-500']
  }};

  color: ${(props) => props.theme['gray-100']};
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s opacity, 0.2s background;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => {
      return props.variant === 'primary'
        ? props.theme['green-700']
        : props.theme['red-700']
    }};
  }
`
