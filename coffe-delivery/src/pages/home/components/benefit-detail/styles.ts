import styled from 'styled-components'
import { ColorType } from '../../../../core/theme/default'

interface BenefitContainerProps {
  color: ColorType
}
export const BenefitDetailContainer = styled.div<BenefitContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  div {
    position: relative;
    display: inline-block;
    width: 100%;
    max-width: 32px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background: ${({ theme, color }) => theme.color[color]};
    color: ${({ theme }) => theme.color.white};
    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin: 0;
    }
  }
`
