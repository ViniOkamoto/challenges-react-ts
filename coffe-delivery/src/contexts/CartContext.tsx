import { createContext, ReactNode, useState, useReducer } from 'react'
import { Order } from '../models/order'
import { addOrderToCartAction } from '../reducers/cart/actions'
import cartReducer from '../reducers/cart/reducer'

interface CartContextType {
  orders: Order[]
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
        addOrderToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
