import { ShoppingCart } from 'phosphor-react'
import { TextM } from '../../../../shared/theme/typography'
import { BenefitDetailContainer } from './styles'
import { ReactNode } from 'react'

interface BenefitDetailProps {
  icon: ReactNode
  text: string
}
export default function BenefitDetail({ icon, text }: BenefitDetailProps) {
  return (
    <BenefitDetailContainer>
      <div>{icon}</div>
      <TextM> {text}</TextM>
    </BenefitDetailContainer>
  )
}
