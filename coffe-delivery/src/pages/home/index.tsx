import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { TextL, TextM, TitleL, TitleXL } from '../../shared/theme/typography'
import {
  BenefitContainer,
  HeroBackground,
  HeroContainer,
  HeroPresentation,
  HomeContainer,
} from './styles'
import heroImage from '../../assets/home/heroImage.png'
import BenefitDetail from './components/BenefitDetail'

export default function HomePage() {
  return (
    <HomeContainer>
      <HeroBackground>
        <HeroContainer className="wrapper">
          <HeroPresentation>
            <TitleXL>Find the perfect coffee for any time of day</TitleXL>
            <TextL>
              Com o Coffe Delivery você recebe seu café onde estiver a qualquer
              hora
            </TextL>
            <BenefitContainer>
              <BenefitDetail
                icon={<ShoppingCart size={16} weight="fill" />}
                text="Compra simples e segura"
              ></BenefitDetail>
              <BenefitDetail
                icon={<Package size={16} weight="fill" />}
                text="Embalagem mantém o café intacto"
                color="base-text"
              />
              <BenefitDetail
                icon={<Timer size={16} weight="fill" />}
                text="Compra simples e segura"
                color="yellow-default"
              />
              <BenefitDetail
                icon={<Coffee size={16} weight="fill" />}
                text="Compra simples e segura"
                color="purple-default"
              />
            </BenefitContainer>
          </HeroPresentation>
          <img src={heroImage} alt="hero image" />
        </HeroContainer>
      </HeroBackground>
      <div className="wrapper">
        <TitleL>Nossos cafés</TitleL>
      </div>
    </HomeContainer>
  )
}
