import { HeaderContainer, LocationButton, ShopCartCounter } from './styles'
import coffeDelivery from '../../../../../assets/logo.png'
import { MapPin, Scroll, ShoppingCart, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { TextS } from '../../../../theme/typography'
export default function Header() {
  return (
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
        <div>
          <NavLink to="/history" title="History button nav">
            <ShoppingCart size={24} weight="fill" />
            <ShopCartCounter>3</ShopCartCounter>
          </NavLink>
        </div>
      </nav>
    </HeaderContainer>
  )
}
