import { produce } from 'immer'
import { Order } from '../../models/order'
import { ActionTypes } from './actions'

interface CartState {
  orders: Order[]
}

export default function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ORDER_IN_CART: {
      const index = state.orders.findIndex(
        (order) => order.coffe.id === action.payload.order.coffe.id,
      )
      return produce(state, (draft) => {
        if (index === -1) {
          draft.orders.push(action.payload.order)
          return draft
        }
        draft.orders[index].quantity += action.payload.order.quantity
      })
    }
    default:
      return state
  }
}
