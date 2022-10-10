import { Trash } from 'phosphor-react'
import { TextM } from '../../../../../../core/theme/typography'
import { Order } from '../../../../../../models/order'
import { QuantityInput } from '../../../../../../shared/components/quantity-input'
import { OrderContainer, RemoveButton } from './styles'

interface OrderTileProps {
  order: Order
}
export default function OrderTile({ order }: OrderTileProps) {
  const coffee = order.coffee

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
              onIncrease={() => {}}
              onDecrease={() => {}}
              quantity={order.quantity}
            />
            <RemoveButton>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </div>
        </div>
      </div>
      <TextM>R$ {coffee.price.toFixed()}</TextM>
    </OrderContainer>
  )
}
