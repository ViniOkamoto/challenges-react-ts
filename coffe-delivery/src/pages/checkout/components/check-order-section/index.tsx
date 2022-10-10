import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../../../contexts/CartContext'
import { TextL, TextM, TextS, TitleXS } from '../../../../core/theme/typography'
import { routes } from '../../../../core/utils/RoutesPath'
import { Button } from '../../../../shared/components/button'
import OrderTile from './components/order-tile'
import {
  CheckOrderContainer,
  OrderCostContainer,
  OrderListContainer,
  OrderSection,
} from './styles'

export default function CheckOrderSection() {
  const deliveryFee = 3.7
  const { orders, totalOrdersPrice } = useContext(CartContext)

  const totalPrice = totalOrdersPrice + deliveryFee
  const navigate = useNavigate()
  function handleOnClick() {
    navigate(routes.checkoutSucess)
  }
  return (
    <OrderSection>
      <TitleXS>Selected coffees</TitleXS>
      <CheckOrderContainer>
        <OrderListContainer>
          {orders.map((order) => (
            <>
              <OrderTile key={order.coffee.id} order={order} />
              <hr />
            </>
          ))}
        </OrderListContainer>
        <OrderCostContainer>
          <div>
            <TextS>Itens total</TextS>
            <TextS>R$ {totalOrdersPrice.toFixed(2)}</TextS>
          </div>
          <div>
            <TextS>Delivery fee</TextS>
            <TextS>R$ {deliveryFee.toFixed(2)}</TextS>
          </div>
          <div>
            <TextL as="strong">Total</TextL>
            <TextL as="strong">R$ {totalPrice.toFixed(2)}</TextL>
          </div>
          <Button
            text={'Confirm order'}
            onClick={handleOnClick}
            disabled={orders.length === 0}
          />
        </OrderCostContainer>
      </CheckOrderContainer>
    </OrderSection>
  )
}
