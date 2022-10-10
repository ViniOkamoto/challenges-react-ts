import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { defaultTheme } from '../../../../core/theme/default'
import { TextM, TextS } from '../../../../core/theme/typography'
import PaymentMethodButton from '../../../../shared/components/payment-method'
import { InstructionContainer, SectionContainer } from '../../styles'
import { PaymentOptionsContainer } from './styles'

export default function PaymentMethodSection() {
  return (
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
  )
}
