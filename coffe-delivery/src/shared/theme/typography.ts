import styled, { css } from 'styled-components'
import { ColorType, RobotoFontWeightType } from './default'

interface TextProps {
  color?: ColorType
  robotoWeight?: RobotoFontWeightType
}
export const BalooBoldFont = styled.h1<TextProps>`
  font-family: ${(props) => props.theme.typography.baloo['font-family']};
  font-weight: ${(props) => props.theme.typography.baloo.weight.bold};
  line-height: ${(props) => props.theme.typography['line-height-130']};
  color: ${(props) =>
    props.color
      ? props.theme.color[`${props.color}`]
      : props.theme.color['base-text']};
`
export const BalooExtraBoldFont = styled.h1<TextProps>`
  font-family: ${(props) => props.theme.typography.baloo['font-family']};
  font-weight: ${(props) => props.theme.typography.baloo.weight.extraBold};
  line-height: ${(props) => props.theme.typography['line-height-130']};
  color: ${(props) =>
    props.color
      ? props.theme.color[`${props.color}`]
      : props.theme.color['base-text']};
`

export const RobotoFont = styled.p<TextProps>`
  font-family: ${(props) => props.theme.typography.roboto['font-family']};
  font-weight: ${(props) =>
    props.robotoWeight
      ? props.theme.typography.roboto.weight[`${props.robotoWeight}`]
      : props.theme.typography.roboto.weight.regular};
  line-height: ${(props) => props.theme.typography['line-height-130']};
  color: ${(props) =>
    props.color
      ? props.theme.color[`${props.color}`]
      : props.theme.color['base-text']};
`

export const TitleXL = styled(BalooExtraBoldFont)`
  font-size: ${(props) => props.theme.typography.title.xl};
`
export const TitleL = styled(BalooExtraBoldFont)`
  font-size: ${(props) => props.theme.typography.title.l};
`

export const TitleM = styled(BalooExtraBoldFont)`
  font-size: ${(props) => props.theme.typography.title.m};
`
export const TitleS = styled(BalooBoldFont)`
  font-size: ${(props) => props.theme.typography.title.s};
`

export const TitleXS = styled(BalooBoldFont)`
  font-size: ${(props) => props.theme.typography.title.xs};
`

export const TextXL = styled(RobotoFont)`
  font-size: ${(props) => props.theme.typography.text.xl};
`
export const TextL = styled(RobotoFont)`
  font-size: ${(props) => props.theme.typography.text.l};
`

export const TextM = styled(RobotoFont)`
  font-size: ${(props) => props.theme.typography.text.m};
`
export const TextS = styled(RobotoFont)`
  font-size: ${(props) => props.theme.typography.text.s};
`

export const TextXS = styled(RobotoFont)`
  font-size: ${(props) => props.theme.typography.text.xs};
`
