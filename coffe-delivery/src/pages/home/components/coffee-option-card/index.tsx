import { ShoppingCart } from 'phosphor-react'
import Coffe from '../../../../models/coffee'
import { IconButton } from '../../../../shared/components/icon-button'
import { QuantityInput } from '../../../../shared/components/quantity-input'
import { TextS, TitleM, TitleS } from '../../../../core/theme/typography'
import {
  AddCartWrapper,
  CategoryContainer,
  CoffeCard,
  CoffeeCategory,
  CoffeeFooter,
} from './styles'

interface CoffeOptionCardProps {
  coffee: Coffe
}
export default function CoffeeOptionCard({ coffee }: CoffeOptionCardProps) {
  return (
    <CoffeCard>
      <img src={`/coffees/${coffee.photo}`} alt="" />
      <CategoryContainer>
        {coffee.tags.map((tag) => (
          <CoffeeCategory key={tag}>{tag}</CoffeeCategory>
        ))}
      </CategoryContainer>
      <TitleS as="strong">{coffee.name}</TitleS>
      <TextS>{coffee.description}</TextS>
      <CoffeeFooter>
        <div>
          <TextS as="span">R$</TextS>
          <TitleM as="span">{coffee.price.toFixed(2)}</TitleM>
        </div>
        <AddCartWrapper>
          <QuantityInput />
          <IconButton variant="card">
            <ShoppingCart weight="fill" size={22} />
          </IconButton>
        </AddCartWrapper>
      </CoffeeFooter>
    </CoffeCard>
  )
}
