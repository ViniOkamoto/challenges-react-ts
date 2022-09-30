import styled from 'styled-components'
import { ColorType } from '../../../../shared/theme/default'

interface BenefitContainerProps {
  color: ColorType
}
export const BenefitDetailContainer = styled.div<BenefitContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: ${({ theme, color }) => theme.color[color]};
    color: ${({ theme }) => theme.color.white};
  }
`
