import Coffee from './coffee'
import { PaymentMethodStrategy } from './payment-method'

export interface UserAddress {}
export interface Order {
  quantity: number
  coffee: Coffee
}

export interface CompleteOrder {
  orders: Order[]
  id: string
  postalCode: string
  address: string
  number: string
  complement?: string
  city: string
  province: string
  paymentMethod: PaymentMethodStrategy
  total: number
  deliveryFee: number
}
