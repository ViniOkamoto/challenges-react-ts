export interface PaymentMethodStrategy {
  notifyServer(): void
}

export class DebitCardMethodStrategy implements PaymentMethodStrategy {
  notifyServer(): void {
    console.log(typeof this.constructor)
  }
}

export class CreditCardMethodStrategy implements PaymentMethodStrategy {
  notifyServer(): void {
    console.log(typeof this.constructor)
  }
}
export class CashMethodStrategy implements PaymentMethodStrategy {
  notifyServer(): void {
    console.log(typeof this.constructor)
  }
}
