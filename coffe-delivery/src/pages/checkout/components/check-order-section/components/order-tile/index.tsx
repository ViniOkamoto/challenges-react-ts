import { Trash } from 'phosphor-react'
import { ButtonHTMLAttributes, FormEvent, useContext } from 'react'
import { CartContext } from '../../../../../../contexts/CartContext'
import { TextM } from '../../../../../../core/theme/typography'
import { Order } from '../../../../../../models/order'
import { QuantityInput } from '../../../../../../shared/components/quantity-input'
import { OrderContainer, RemoveButton } from './styles'

interface OrderTileProps {
  order: Order
}
export default function OrderTile({ order }: OrderTileProps) {
  const { increaseOrderQuantity, decreaseOrderQuantity, removeOrderFromCart } =
    useContext(CartContext)
  const coffee = order.coffee

  function handleIncreaseOrderQuantity() {
    increaseOrderQuantity(order)
  }

  function handleDecreaseOrderQuantity() {
    decreaseOrderQuantity(order)
  }

  function handleRemoveOrder(e: FormEvent) {
    e.preventDefault()
    removeOrderFromCart(order)
  }

  return (
    <OrderContainer>
      <div>
        <div>
          <img src={`/coffees/${coffee.photo}`} alt="" />
        </div>
        <div>
          <TextM>{coffee.name}</TextM>
          <div>
            <QuantityInput
              onIncrease={handleIncreaseOrderQuantity}
              onDecrease={handleDecreaseOrderQuantity}
              quantity={order.quantity}
            />
            <RemoveButton onClick={handleRemoveOrder}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </div>
        </div>
      </div>
      <TextM>R$ {coffee.price.toFixed(2)}</TextM>
    </OrderContainer>
  )
}
