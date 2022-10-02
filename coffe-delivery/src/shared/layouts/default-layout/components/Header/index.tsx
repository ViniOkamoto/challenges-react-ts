import { HeaderContainer, LocationButton, ShopCartCounter } from './styles'
import coffeDelivery from '../../../../../assets/logo.png'
import { MapPin, Scroll, ShoppingCart, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { TextS } from '../../../../theme/typography'
import { routes } from '../../../../utils/RoutesPath'
export default function Header() {
  return (
    <div className="wrapper">
      <HeaderContainer>
        <img
          src={coffeDelivery}
          alt="coffe delivery logo description: a drawed purple disposable cup with a drawed rocket inside it"
        />
        <nav>
          <LocationButton>
            <MapPin size={22} weight="fill" />
            <TextS color="purple-dark"> Winnipeg, CA</TextS>
          </LocationButton>
          <NavLink to={routes.checkout} title="checkout button nav">
            <ShoppingCart size={24} weight="fill" />
          </NavLink>
        </nav>
      </HeaderContainer>
    </div>
  )
}
