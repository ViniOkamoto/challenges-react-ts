import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonVariant } from './styles'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  icon?: React.RefAttributes<SVGSVGElement>
  to?: string
  children?: ReactNode
}

export function Button({
  variant = 'primary',
  to,
  icon,
  children,
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
        {children}
      </>
    </ButtonContainer>
  )
}
