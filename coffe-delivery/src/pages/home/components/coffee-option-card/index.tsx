import { ShoppingCart } from 'phosphor-react'
import Coffee from '../../../../models/coffee'
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
import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

interface CoffeOptionCardProps {
  coffee: Coffee
}
export default function CoffeeOptionCard({ coffee }: CoffeOptionCardProps) {
  const { addOrderToCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(0)

  function handleOnIncrease() {
    setQuantity(quantity + 1)
  }

  function handleOnDecrease() {
    if (quantity === 0) return
    setQuantity(quantity - 1)
  }

  function handleOnAddOrder() {
    addOrderToCart({
      coffee,
      quantity,
    })
    setQuantity(0)
  }

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
          <QuantityInput
            onIncrease={handleOnIncrease}
            onDecrease={handleOnDecrease}
            quantity={quantity}
          />
          <IconButton
            variant="card"
            onClick={handleOnAddOrder}
            disabled={quantity === 0}
          >
            <ShoppingCart weight="fill" size={22} />
          </IconButton>
        </AddCartWrapper>
      </CoffeeFooter>
    </CoffeCard>
  )
}
