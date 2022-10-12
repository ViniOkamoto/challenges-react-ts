import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { ContentContainer, PaymentMethodContainer } from './styles'

type PaymentMethodButtonProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
  error?: string
}

// eslint-disable-next-line react/display-name
export const PaymentMethodButton = forwardRef<
  HTMLInputElement,
  PaymentMethodButtonProps
>(({ id, icon, label, ...props }, ref) => {
  return (
    <PaymentMethodContainer>
      <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodContainer>
  )
})
