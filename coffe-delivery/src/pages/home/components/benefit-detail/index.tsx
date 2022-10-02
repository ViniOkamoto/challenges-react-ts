import { ShoppingCart } from 'phosphor-react'
import { TextM } from '../../../../core/theme/typography'
import { BenefitDetailContainer } from './styles'
import { ReactNode } from 'react'
import { ColorType } from '../../../../core/theme/default'

interface BenefitDetailProps {
  icon: ReactNode
  text: string
  color?: ColorType
}
export default function BenefitDetail({
  icon,
  text,
  color = 'yellow-dark',
}: BenefitDetailProps) {
  return (
    <BenefitDetailContainer color={color}>
      <div>{icon}</div>
      <TextM> {text}</TextM>
    </BenefitDetailContainer>
  )
}
