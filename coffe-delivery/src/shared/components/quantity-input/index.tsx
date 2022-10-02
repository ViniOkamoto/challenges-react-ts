import { Minus, Plus } from 'phosphor-react'
import { IconWrapper, QuantityInputContainer } from './styles'

export function QuantityInput() {
  return (
    <QuantityInputContainer>
      <IconWrapper>
        <Minus weight="bold" size={14}></Minus>
      </IconWrapper>
      <input type="number" name="quantity" id="quantity" placeholder="0" />
      <IconWrapper>
        <Plus weight="bold" size={14}></Plus>
      </IconWrapper>
    </QuantityInputContainer>
  )
}
