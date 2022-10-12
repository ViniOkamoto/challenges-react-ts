export interface PaymentMethodStrategy {
  notifyServer(): void
  type: string
}

export class DebitCardMethodStrategy implements PaymentMethodStrategy {
  type = 'Debit Card'
  notifyServer(): void {
    console.log('debit card method strategy')
  }
}

export class CreditCardMethodStrategy implements PaymentMethodStrategy {
  type = 'Credit Card'
  notifyServer(): void {
    console.log('credit card method strategy')
  }
}
export class CashMethodStrategy implements PaymentMethodStrategy {
  type = 'Cash Card'
  notifyServer(): void {
    console.log('cash method strategy')
  }
}
export enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}
const PaymentMethodsClasses = {
  credit: CreditCardMethodStrategy,
  debit: DebitCardMethodStrategy,
  money: CashMethodStrategy,
} as const

export function getPaymentMethod(method: PaymentMethods) {
  return new PaymentMethodsClasses[method]()
}
