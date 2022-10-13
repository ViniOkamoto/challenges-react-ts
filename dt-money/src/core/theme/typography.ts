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

export const TitleXL = styled(RobotoFont)`
  font-weight: ${({ theme }) => theme.typography.font.weight.bold};
  font-size: ${({ theme }) => theme.typography.title.xl};
`
export const TitleL = styled(RobotoFont)`
  font-size: ${({ theme }) => theme.typography.title.l};
`

export const TitleM = styled(RobotoFont)`
  font-size: ${({ theme }) => theme.typography.title.m};
`
export const TitleS = styled(RobotoFont)`
  font-size: ${({ theme }) => theme.typography.title.s};
`

export const TitleXS = styled(RobotoFont)`
  font-size: ${({ theme }) => theme.typography.title.xs};
`
export const TextL = styled(RobotoFont)`
  font-size: ${({ theme }) => theme.typography.text.l};
`

export const TextM = styled(RobotoFont)`
  font-size: ${({ theme }) => theme.typography.text.m};
`
export const TextS = styled(RobotoFont)`
  font-size: ${({ theme }) => theme.typography.text.s};
`

export const TextXS = styled(RobotoFont)`
  font-size: ${({ theme }) => theme.typography.text.xs};
`
