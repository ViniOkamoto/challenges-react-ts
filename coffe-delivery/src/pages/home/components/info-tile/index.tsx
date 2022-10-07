import { ShoppingCart } from 'phosphor-react'
import { TextM } from '../../../../core/theme/typography'
import { BenefitDetailContainer } from './styles'
import { ReactNode } from 'react'
import { ColorType } from '../../../../core/theme/default'

interface InfoTileProps {
  icon: ReactNode
  text: string | ReactNode
  color?: ColorType
}
export default function InfoTile({
  icon,
  text,
  color = 'yellow-dark',
}: InfoTileProps) {
  return (
    <BenefitDetailContainer color={color}>
      <div>{icon}</div>
      {typeof text === 'string' ? <TextM> {text}</TextM> : text}
    </BenefitDetailContainer>
  )
}
