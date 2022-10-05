import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonContainer } from './styles'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.RefAttributes<SVGSVGElement>
  text: string
}

export function Button({ icon, text, ...props }: ButtonProps) {
  const navigate = useNavigate()

  return (
    <ButtonContainer onClick={() => {}} {...props}>
      <>
        {icon}
        <span>{text}</span>
      </>
    </ButtonContainer>
  )
}
