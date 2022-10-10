import {
  createContext,
  ReactNode,
  useState,
  useReducer,
  useEffect,
} from 'react'
import { Order } from '../models/order'
import { addOrderToCartAction } from '../reducers/cart/actions'
import cartReducer from '../reducers/cart/reducer'

interface CartContextType {
  orders: Order[]
  totalOrdersPrice: number
  addOrderToCart: (order: Order) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export default function CartContextProvider({
  children,
}: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      orders: [],
    },
    () => {
      return {
        orders: [],
      }
    },
  )
  const { orders } = cartState
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
  //   useEffect(() => {
  //     const stateJSON = JSON.stringify(cartState)

  //     localStorage.setItem('@ignite-timer:cycles-state-1.0.0', stateJSON)
  //   }, [cartState])

  return (
    <CartContext.Provider
      value={{
        orders,
        totalOrdersPrice,
        addOrderToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
