import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { TextL, TitleL, TitleXL } from '../../core/theme/typography'
import {
  BenefitContainer,
  CoffesContainer,
  CoffesListContainer,
  HeroBackground,
  HeroContainer,
  HeroPresentation,
  HomeContainer,
} from './styles'
import heroImage from '../../assets/home/heroImage.png'
import InfoTile from './components/info-tile'
import CoffeeOptionCard from './components/coffee-option-card'
import { coffees } from '../../assets/data/data'

export default function HomePage() {
  return (
    <HomeContainer>
      <HeroBackground>
        <HeroContainer>
          <HeroPresentation>
            <TitleXL>Find the perfect coffee for any time of day</TitleXL>
            <TextL>
              With Coffe Delivery you get your coffee wherever you are, anytime
            </TextL>
            <BenefitContainer>
              <InfoTile
                icon={<ShoppingCart size={16} weight="fill" />}
                text="Simple and secure purchase"
              ></InfoTile>
              <InfoTile
                icon={<Package size={16} weight="fill" />}
                text="Packaging keeps the coffee intact"
                color="base-text"
              />
              <InfoTile
                icon={<Timer size={16} weight="fill" />}
                text="Fast and tracked delivery"
                color="yellow-default"
              />
              <InfoTile
                icon={<Coffee size={16} weight="fill" />}
                text="Coffee arrives fresh and hot to you"
                color="purple-default"
              />
            </BenefitContainer>
          </HeroPresentation>
          <img src={heroImage} alt="hero image" />
        </HeroContainer>
      </HeroBackground>
      <CoffesContainer className="wrapper">
        <TitleL>Our Coffees</TitleL>
        <CoffesListContainer>
          {coffees.map((coffee) => (
            <CoffeeOptionCard key={coffee.id} coffee={coffee} />
          ))}
        </CoffesListContainer>
      </CoffesContainer>
    </HomeContainer>
  )
}
