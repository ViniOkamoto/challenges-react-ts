import { ShoppingCart } from 'phosphor-react'
import { IconButton } from '../../../../shared/components/icon-button'
import { QuantityInput } from '../../../../shared/components/quantity-input'
import { TextS, TitleM, TitleS } from '../../../../shared/theme/typography'
import {
  AddCartWrapper,
  CategoryContainer,
  CoffeCard,
  CoffeeCategory,
  CoffeeFooter,
} from './styles'

export default function CoffeeOptionCard() {
  return (
    <CoffeCard>
      <img src="/coffees/americano.png" alt="" />
      <CategoryContainer>
        <CoffeeCategory>Traditional</CoffeeCategory>
      </CategoryContainer>
      <TitleS as="strong">Expresso Traditional</TitleS>
      <TextS>O tradicional café feito com água quente e grãos moídos</TextS>
      <CoffeeFooter>
        <div>
          <TextS as="span">R$</TextS>
          <TitleM as="span">9.90</TitleM>
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
