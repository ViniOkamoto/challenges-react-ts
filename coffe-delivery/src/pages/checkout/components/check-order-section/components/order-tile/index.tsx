import { Trash } from 'phosphor-react'
import { TextM } from '../../../../../../core/theme/typography'
import { Order } from '../../../../../../models/order'
import { QuantityInput } from '../../../../../../shared/components/quantity-input'
import { OrderContainer, RemoveButton } from './styles'

interface OrderTileProps {
  order: Order
}
export default function OrderTile({ order }: OrderTileProps) {
  return (
    <OrderContainer>
      <div>
        <div>
          <img src="/coffees/americano.png" alt="" />
        </div>
        <div>
          <TextM>Americano Espresso</TextM>
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
      <TextM>R$ 9,90</TextM>
    </OrderContainer>
  )
}
