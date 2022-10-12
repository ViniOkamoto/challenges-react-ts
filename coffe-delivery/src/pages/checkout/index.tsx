import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'
import { TitleXS } from '../../core/theme/typography'
import AddressFormSection from './components/address-form-section'
import CheckOrderSection from './components/check-order-section'
import PaymentMethodSection from './components/payment-form-section'
import { CheckoutForm, InformationSection } from './styles'
import {
  CashMethodStrategy,
  getPaymentMethod,
  PaymentMethods,
  PaymentMethodStrategy,
} from '../../models/payment-method'
import { Order } from '../../models/order'

const orderValidationSchema = zod.object({
  postalCode: zod.string().min(1, 'Please type a postal code'),
  address: zod.string().min(1, 'Please type a address'),
  number: zod.string().min(1, 'Please type your number'),
  complement: zod.string().optional(),
  city: zod.string().min(1, 'Please type your city'),
  province: zod.string().min(1, 'Please type your province'),
  paymentMethod: zod
    .nativeEnum(PaymentMethods, {
      errorMap: () => {
        return { message: 'Chose at least one payment method' }
      },
    })
    .transform(async (method) => {
      return await getPaymentMethod(method)
    }),
})

export type CompleteOrderFormData = zod.infer<typeof orderValidationSchema>

export default function CheckoutPage() {
  const newOrderFormHook = useForm<CompleteOrderFormData>({
    resolver: zodResolver(orderValidationSchema),
  })

  function handleSubmitOrder(data: CompleteOrderFormData) {
    console.log(data)
    data.paymentMethod.notifyServer()
    // reset()
  }
  const { handleSubmit, watch, reset, formState } = newOrderFormHook
  return (
    <FormProvider {...newOrderFormHook}>
      <CheckoutForm onSubmit={handleSubmit(handleSubmitOrder)}>
        <InformationSection>
          <TitleXS>Complete your order</TitleXS>
          <AddressFormSection />
          <PaymentMethodSection />
        </InformationSection>
        <CheckOrderSection />
      </CheckoutForm>
    </FormProvider>
  )
}
