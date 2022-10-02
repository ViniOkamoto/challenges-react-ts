import styled from 'styled-components'

export type ButtonVariant = 'card' | 'nav'

interface ButtonProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonProps>`
  position: relative;
  svg {
    color: ${(props) =>
      props.variant === 'card'
        ? props.theme.color.white
        : props.theme.color[`yellow-dark`]};
  }
  border: 0;
  cursor: pointer;
  background: ${(props) =>
    props.variant === 'card'
      ? props.theme.color['purple-dark']
      : props.theme.color['yellow-light']};
  padding: 0.5rem;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`
