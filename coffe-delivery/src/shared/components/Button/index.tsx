import React, { ButtonHTMLAttributes } from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonContainer, ButtonVariant } from './styles'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  text: string
  icon?: React.RefAttributes<SVGSVGElement>
  to?: string
}

export function Button({
  variant = 'primary',
  text = 'Text',
  to,
  icon,
  ...props
}: ButtonProps) {
  const navigate = useNavigate()

  return (
    <ButtonContainer
      variant={variant}
      onClick={() => {
        if (to) navigate(to)
      }}
      {...props}
    >
      <>
        {icon}
        <p>{text}</p>
      </>
    </ButtonContainer>
  )
}
