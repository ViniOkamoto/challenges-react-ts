import { Order } from '../../models/order'

export enum ActionTypes {
  ADD_ORDER_TO_CART = 'ADD_ORDER_TO_CART',
  INCREASE_ORDER_QUANTITY = 'INCREASE_ORDER_QUANTITY',
  DECREASE_ORDER_QUANTITY = 'DECREASE_ORDER_QUANTITY',
  REMOVE_ORDER_FROM_CART = 'REMOVE_ORDER_FROM_CART',
}

export function addOrderToCartAction(order: Order) {
  return {
    type: ActionTypes.ADD_ORDER_TO_CART,
    payload: {
      order,
    },
  }
}
export function increaseOrderQuantityAction(order: Order) {
  return {
    type: ActionTypes.INCREASE_ORDER_QUANTITY,
    payload: {
      order,
    },
  }
}
export function decreaseOrderQuantityAction(order: Order) {
  return {
    type: ActionTypes.DECREASE_ORDER_QUANTITY,
    payload: {
      order,
    },
  }
}

export function removeOrderFromCartAction(order: Order) {
  return {
    type: ActionTypes.REMOVE_ORDER_FROM_CART,
    payload: {
      order,
    },
  }
}
