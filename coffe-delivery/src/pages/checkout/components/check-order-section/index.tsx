import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../../../contexts/CartContext'
import { TextL, TextM, TextS, TitleXS } from '../../../../core/theme/typography'
import { routes } from '../../../../core/utils/RoutesPath'
import { Button } from '../../../../shared/components/button'
import OrderTile from './components/order-tile'
import { OrderCostContainer } from './components/order-tile/styles'
import { CheckOrderContainer, OrderListContainer, OrderSection } from './styles'

export default function CheckOrderSection() {
  const { orders } = useContext(CartContext)
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
            <OrderTile key={order.coffee.id} order={order} />
          ))}
        </OrderListContainer>
        <OrderCostContainer>
          <div>
            <TextS>Itens total</TextS>
            <TextS>R$ 29,70</TextS>
          </div>
          <div>
            <TextS>Entrega</TextS>
            <TextS>R$ 3,70</TextS>
          </div>
          <div>
            <TextL as="strong">Itens total</TextL>
            <TextL as="strong">R$ 29,70</TextL>
          </div>
          <Button text={'Confirm order'} onClick={handleOnClick} />
        </OrderCostContainer>
      </CheckOrderContainer>
    </OrderSection>
  )
}
