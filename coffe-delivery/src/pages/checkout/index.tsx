import { TitleXS } from '../../shared/theme/typography'
import {
  CheckOrderContainer,
  CheckoutContainer,
  CheckoutSection,
  UserInformationContainer,
} from './styles'

export default function CheckoutPage() {
  return (
    <CheckoutContainer>
      <CheckoutSection>
        <TitleXS>Complete seu pedido</TitleXS>
        <UserInformationContainer></UserInformationContainer>
      </CheckoutSection>
      <CheckoutSection>
        <TitleXS>Complete seu pedido</TitleXS>
        <CheckOrderContainer></CheckOrderContainer>
      </CheckoutSection>
    </CheckoutContainer>
  )
}
