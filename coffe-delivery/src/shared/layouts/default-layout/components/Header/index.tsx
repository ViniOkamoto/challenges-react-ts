import { HeaderContainer, LocationButton, ShopCartCounter } from './styles'
import coffeDelivery from '../../../../../assets/logo.png'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { TextS } from '../../../../../core/theme/typography'
import { routes } from '../../../../../core/utils/RoutesPath'
import { useContext } from 'react'
import { CartContext } from '../../../../../contexts/CartContext'
export default function Header() {
  const { orders } = useContext(CartContext)
  return (
    <div className="wrapper">
      <HeaderContainer>
        <NavLink to={routes.home}>
          <img
            src={coffeDelivery}
            alt="coffe delivery logo description: a drawed purple disposable cup with a drawed rocket inside it"
          />
        </NavLink>
        <nav>
          <LocationButton>
            <MapPin size={22} weight="fill" />
            <TextS color="purple-dark"> Winnipeg, CA</TextS>
          </LocationButton>
          <NavLink to={routes.checkout} title="checkout button nav">
            <ShoppingCart size={24} weight="fill" />
            {orders.length > 0 && (
              <ShopCartCounter>{orders.length}</ShopCartCounter>
            )}
          </NavLink>
        </nav>
      </HeaderContainer>
    </div>
  )
}
