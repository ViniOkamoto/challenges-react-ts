import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { defaultTheme } from '../../../../core/theme/default'
import { TextM, TextS } from '../../../../core/theme/typography'
import { PaymentMethods } from '../../../../models/payment-method'
import { InputError } from '../../../../shared/components/input/styles'
import { PaymentMethodButton } from '../../../../shared/components/payment-method'
import { InstructionContainer, SectionContainer } from '../../styles'
import { PaymentOptionsContainer } from './styles'

export default function PaymentMethodSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  const paymentMethodError = errors?.paymentMethod?.message as unknown as string

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
          key={PaymentMethods.credit}
          id={PaymentMethods.credit}
          value={PaymentMethods.credit}
          label="Credit Card"
          icon={<CreditCard />}
          {...register('paymentMethod')}
        />
        <PaymentMethodButton
          key={PaymentMethods.debit}
          id={PaymentMethods.debit}
          value={PaymentMethods.debit}
          label="Debit Cards"
          icon={<Bank />}
          {...register('paymentMethod')}
        />
        <PaymentMethodButton
          key={PaymentMethods.money}
          id={PaymentMethods.money}
          value={PaymentMethods.money}
          label="Cash"
          icon={<Money />}
          {...register('paymentMethod')}
        />
      </PaymentOptionsContainer>
      {paymentMethodError && <InputError>{paymentMethodError}</InputError>}
    </SectionContainer>
  )
}
