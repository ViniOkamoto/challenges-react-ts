import { MapPinLine } from 'phosphor-react'
import { TextM, TextS, TitleXS } from '../../core/theme/typography'
import Input from '../../shared/components/input'
import {
  AddressForm,
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
            <Input placeholder="Postal Code" className="postalCode" />
            <Input placeholder="Address" className="address" />
            <Input placeholder="Number" />
            <Input
              placeholder="Apt, suit, etc"
              className="addressComplement"
              isOptional={true}
            />
            <Input placeholder="City" />
            <Input placeholder="Province" />
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
