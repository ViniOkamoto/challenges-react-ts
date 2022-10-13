import styled, { css } from 'styled-components'
import { ColorType, RobotoFontWeightType } from './theme'

interface TextProps {
  color?: ColorType
  robotoWeight?: RobotoFontWeightType
}
export const RobotoFont = styled.p<TextProps>`
  font-family: ${(props) => props.theme.typography.font['font-family']};
  font-weight: ${(props) =>
    props.robotoWeight
      ? props.theme.typography.font.weight[`${props.robotoWeight}`]
      : props.theme.typography.font.weight.regular};
  line-height: ${(props) => props.theme.typography['line-height-130']};
  color: ${(props) =>
    props.color
      ? props.theme.color[`${props.color}`]
      : props.theme.color['gray-500']};
`
