import { Order } from '../../models/order'

export enum ActionTypes {
  ADD_ORDER_IN_CART = 'ADD_ORDER_IN_CART',
}

export function addOrderToCartAction(order: Order) {
  return {
    type: ActionTypes.ADD_ORDER_IN_CART,
    payload: {
      order,
    },
  }
}
