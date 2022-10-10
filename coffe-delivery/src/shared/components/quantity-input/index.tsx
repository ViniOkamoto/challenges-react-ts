import { Minus, Plus } from 'phosphor-react'
import { IconWrapper, QuantityInputContainer } from './styles'

interface QuantityInputProps {
  onIncrease: () => void
  onDecrease: () => void
  quantity: number
}
export function QuantityInput({
  onIncrease,
  onDecrease,
  quantity,
}: QuantityInputProps) {
  return (
    <QuantityInputContainer>
      <IconWrapper onClick={onDecrease}>
        <Minus weight="bold" size={14}></Minus>
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper onClick={onIncrease}>
        <Plus weight="bold" size={14}></Plus>
      </IconWrapper>
    </QuantityInputContainer>
  )
}
