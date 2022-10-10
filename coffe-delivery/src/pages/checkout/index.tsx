import { useNavigate } from 'react-router-dom'
import { TitleXS } from '../../core/theme/typography'
import AddressFormSection from './components/address-form-section'
import CheckOrderSection from './components/check-order-section'
import PaymentMethodSection from './components/payment-form-section'
import { CheckoutContainer, InformationSection } from './styles'

export default function CheckoutPage() {
  const navigate = useNavigate()

  return (
    <CheckoutContainer>
      <InformationSection>
        <TitleXS>Complete your order</TitleXS>
        <AddressFormSection />
        <PaymentMethodSection />
      </InformationSection>
      <CheckOrderSection />
    </CheckoutContainer>
  )
}
