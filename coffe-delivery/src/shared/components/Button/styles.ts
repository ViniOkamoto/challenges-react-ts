import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'danger'

interface ButtonProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonProps>``
