import { MapPinLine } from 'phosphor-react'
import { TextM, TextS, TitleXS } from '../../core/theme/typography'
import {
  AddressForm,
  BaseInput,
  CheckOrderContainer,
  CheckoutContainer,
  CheckoutSection,
  UserInformationContainer,
  UserInformationIntroContainer as InstructionContainer,
  UserInformationSection,
} from './styles'

export default function CheckoutPage() {
  return (
    <CheckoutContainer>
      <UserInformationSection>
        <TitleXS>Complete seu pedido</TitleXS>
        <UserInformationContainer>
          <InstructionContainer>
            <MapPinLine size={22} />
            <div>
              <TextM as="strong">Delivery address</TextM>
              <TextS>
                Enter the address where you want to receive your order
              </TextS>
            </div>
          </InstructionContainer>
          <AddressForm>
            <BaseInput placeholder="Postal Code" className="postalCode" />
            <BaseInput placeholder="Address" className="address" />
            <BaseInput placeholder="Number" />
            <BaseInput
              placeholder="Apt, suit, etc"
              className="addressComplement"
            />
            <BaseInput placeholder="City" />
            <BaseInput placeholder="Province" />
          </AddressForm>
        </UserInformationContainer>
      </UserInformationSection>
      <CheckoutSection>
        <TitleXS>Complete seu pedido</TitleXS>
        <CheckOrderContainer></CheckOrderContainer>
      </CheckoutSection>
    </CheckoutContainer>
  )
}
