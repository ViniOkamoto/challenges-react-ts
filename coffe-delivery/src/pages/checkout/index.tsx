import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import { defaultTheme } from '../../core/theme/default'
import { TextL, TextM, TextS, TitleXS } from '../../core/theme/typography'
import { Button } from '../../shared/components/button'
import Input from '../../shared/components/input'
import PaymentMethodButton from '../../shared/components/payment-method'
import { QuantityInput } from '../../shared/components/quantity-input'
import {
  AddressForm,
  CheckOrderContainer,
  CheckoutContainer,
  CheckOrderSection,
  SectionContainer,
  InstructionContainer,
  InformationSection,
  PaymentOptionsContainer,
  OrderListContainer,
  OrderCostContainer,
  Order,
  RemoveButton,
} from './styles'

export default function CheckoutPage() {
  return (
    <CheckoutContainer>
      <InformationSection>
        <TitleXS>Complete your order</TitleXS>
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
      <CheckOrderSection>
        <TitleXS>Selected coffees</TitleXS>
        <CheckOrderContainer>
          <OrderListContainer>
            <Order>
              <div>
                <div>
                  <img src="/coffees/americano.png" alt="" />
                </div>
                <div>
                  <TextM>Americano Espresso</TextM>
                  <div>
                    <QuantityInput />
                    <RemoveButton>
                      <Trash size={16} />
                      REMOVER
                    </RemoveButton>
                  </div>
                </div>
              </div>
              <TextM>R$ 9,90</TextM>
            </Order>
          </OrderListContainer>
          <OrderCostContainer>
            <div>
              <TextS>Itens total</TextS>
              <TextS>R$ 29,70</TextS>
            </div>
            <div>
              <TextS>Entrega</TextS>
              <TextS>R$ 3,70</TextS>
            </div>
            <div>
              <TextL as="strong">Itens total</TextL>
              <TextL as="strong">R$ 29,70</TextL>
            </div>
            <Button text={'Confirm order'} />
          </OrderCostContainer>
        </CheckOrderContainer>
      </CheckOrderSection>
    </CheckoutContainer>
  )
}
