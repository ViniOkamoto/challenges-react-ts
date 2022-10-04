import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { defaultTheme } from '../../core/theme/default'
import { TextM, TextS, TitleXS } from '../../core/theme/typography'
import Input from '../../shared/components/input'
import PaymentMethodButton from '../../shared/components/payment-method'
import {
  AddressForm,
  CheckOrderContainer,
  CheckoutContainer,
  CheckoutSection,
  SectionContainer,
  InstructionContainer,
  InformationSection,
  PaymentOptionsContainer,
} from './styles'

export default function CheckoutPage() {
  return (
    <CheckoutContainer>
      <InformationSection>
        <TitleXS>Complete seu pedido</TitleXS>
        <SectionContainer>
          <InstructionContainer>
            <MapPinLine size={22} color={defaultTheme.color['yellow-dark']} />
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
        </SectionContainer>
        <SectionContainer>
          <InstructionContainer>
            <CurrencyDollar
              size={22}
              color={defaultTheme.color['purple-default']}
            />
            <div>
              <TextM as="strong">Payment</TextM>
              <TextS>
                Payment is made on delivery. Choose the method you want to pay
              </TextS>
            </div>
          </InstructionContainer>
          <PaymentOptionsContainer>
            <PaymentMethodButton
              label="Credit Card"
              icon={<CreditCard />}
              checked
            />
            <PaymentMethodButton label="Debit Cards" icon={<Bank />} />
            <PaymentMethodButton label="Cash" icon={<Money />} />
          </PaymentOptionsContainer>
        </SectionContainer>
      </InformationSection>
      <CheckoutSection>
        <TitleXS>Complete seu pedido</TitleXS>
        <CheckOrderContainer></CheckOrderContainer>
      </CheckoutSection>
    </CheckoutContainer>
  )
}
