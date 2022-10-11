import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { Order } from '../models/order'
import {
  addOrderToCartAction,
  decreaseOrderQuantityAction,
  increaseOrderQuantityAction,
  removeOrderFromCartAction,
} from '../reducers/cart/actions'
import cartReducer from '../reducers/cart/reducer'

interface CartContextType {
  orders: Order[]
  totalOrdersPrice: number
  addOrderToCart: (order: Order) => void
  decreaseOrderQuantity: (order: Order) => void
  increaseOrderQuantity: (order: Order) => void
  removeOrderFromCart: (order: Order) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export default function CartContextProvider({
  children,
}: CartContextProviderProps) {
  const localStorageKey = '@coffee-delivery:cart-state-1.0.0'
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      orders: [],
    },
    () => {
      const storedStateAsJson = localStorage.getItem(localStorageKey)
      if (storedStateAsJson) {
        return JSON.parse(storedStateAsJson)
      }
      return {
        orders: [],
      }
    },
  )
  const { orders } = cartState
  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem(localStorageKey, stateJSON)
  }, [cartState])
  const totalOrdersPrice = calculateTotalOrderPrice()

  function calculateTotalOrderPrice(): number {
    let total = 0
    if (orders.length > 0) {
      orders.forEach((order) => {
        total = order.quantity * order.coffee.price
      })
    }
    return total
  }

  function addOrderToCart(order: Order) {
    dispatch(addOrderToCartAction(order))
  }

  function increaseOrderQuantity(order: Order) {
    dispatch(increaseOrderQuantityAction(order))
  }

  function decreaseOrderQuantity(order: Order) {
    dispatch(decreaseOrderQuantityAction(order))
  }

  function removeOrderFromCart(order: Order) {
    dispatch(removeOrderFromCartAction(order))
  }

  return (
    <CartContext.Provider
      value={{
        orders,
        totalOrdersPrice,
        addOrderToCart,
        increaseOrderQuantity,
        decreaseOrderQuantity,
        removeOrderFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
