import styled from 'styled-components'
import { ColorType, AppFontWeightType } from './theme'

interface TextProps {
  color?: ColorType
  fontWeight?: AppFontWeightType
}
export const AppFont = styled.p<TextProps>`
  font-family: ${(props) => props.theme.typography.font['font-family']};
  font-weight: ${(props) =>
    props.fontWeight
      ? props.theme.typography.font.weight[`${props.fontWeight}`]
      : props.theme.typography.font.weight.regular};
  line-height: ${(props) => props.theme.typography['line-height-130']};
  color: ${(props) =>
    props.color
      ? props.theme.color[`${props.color}`]
      : props.theme.color['base-text']};
`

export const TitleL = styled(AppFont)`
  font-size: ${({ theme }) => theme.typography.title.l};
`

export const TitleM = styled(AppFont)`
  font-size: ${({ theme }) => theme.typography.title.m};
`
export const TitleS = styled(AppFont)`
  font-size: ${({ theme }) => theme.typography.title.s};
`

export const TextM = styled(AppFont)`
  font-size: ${({ theme }) => theme.typography.text.m};
`
export const TextS = styled(AppFont)`
  font-size: ${({ theme }) => theme.typography.text.s};
`

export const TextXS = styled(AppFont)`
  font-size: ${({ theme }) => theme.typography.text.link};
`
