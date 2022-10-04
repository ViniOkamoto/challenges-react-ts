import { InputHTMLAttributes, ReactNode } from 'react'
import { ContentContainer, PaymentMethodContainer } from './styles'

interface PaymentMethodInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  icon: ReactNode
  label: string
}

export default function PaymentMethodButton({
  id,
  icon,
  label,
  checked,
  ...props
}: PaymentMethodInputProps) {
  console.log(checked)
  return (
    <PaymentMethodContainer>
      <input
        id={id}
        type="radio"
        {...props}
        name="paymentMethod"
        checked={checked}
      />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodContainer>
  )
}
