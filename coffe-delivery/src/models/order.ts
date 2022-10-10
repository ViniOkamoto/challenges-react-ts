import Coffee from './coffee'
import { PaymentMethodStrategy } from './payment-method'

export interface UserAddress {
  id: string
  address: string
  number: string
  complement?: string
  city: string
  province: string
}
export interface Order {
  quantity: number
  coffee: Coffee
}

export interface CompleteOrder {
  orders: Order[]
  address: UserAddress
  paymentMethod: PaymentMethodStrategy
  total: number
  deliveryTax: number
}
