import { produce } from 'immer'
import { Order } from '../../models/order'
import { ActionTypes } from './actions'

interface CartState {
  orders: Order[]
}

export default function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ORDER_TO_CART: {
      const index = state.orders.findIndex(
        (order) => order.coffee.id === action.payload.order.coffee.id,
      )
      return produce(state, (draft) => {
        if (index === -1) {
          draft.orders.push(action.payload.order)
          return draft
        }
        draft.orders[index].quantity += action.payload.order.quantity
      })
    }
    case ActionTypes.REMOVE_ORDER_FROM_CART: {
      return produce(state, (draft) => {
        const index = draft.orders.indexOf(action.payload.order)
        draft.orders.splice(index, 1)
      })
    }
    case ActionTypes.INCREASE_ORDER_QUANTITY: {
      const index = state.orders.indexOf(action.payload.order)
      return produce(state, (draft) => {
        draft.orders[index].quantity++
      })
    }
    case ActionTypes.DECREASE_ORDER_QUANTITY: {
      const index = state.orders.indexOf(action.payload.order)
      return produce(state, (draft) => {
        if (draft.orders[index].quantity > 1) {
          draft.orders[index].quantity--
          return draft
        }
        draft.orders.splice(index, 1)
      })
    }
    default:
      return state
  }
}
