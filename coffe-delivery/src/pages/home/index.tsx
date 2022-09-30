import { ShoppingCart } from 'phosphor-react'
import { TextL, TextM, TitleXL } from '../../shared/theme/typography'
import {
  BenefitContainer,
  HeroContainer,
  HeroPresentation,
  HomeContainer,
} from './styles'
import heroImage from '../../assets/home/heroImage.png'
import BenefitDetail from './components/BenefitDetail'

export default function HomePage() {
  return (
    <HomeContainer>
      <HeroContainer>
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
              icon={<ShoppingCart size={16} weight="fill" />}
              text="Compra simples e segura"
            ></BenefitDetail>
            <BenefitDetail
              icon={<ShoppingCart size={16} weight="fill" />}
              text="Compra simples e segura"
            ></BenefitDetail>
            <BenefitDetail
              icon={<ShoppingCart size={16} weight="fill" />}
              text="Compra simples e segura"
            ></BenefitDetail>
          </BenefitContainer>
        </HeroPresentation>
        <img src={heroImage} alt="hero image" />
      </HeroContainer>
      <div>Nossos cafés</div>
    </HomeContainer>
  )
}
