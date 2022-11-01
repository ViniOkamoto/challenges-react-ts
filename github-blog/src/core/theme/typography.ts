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
  line-height: ${({ theme }) => theme.typography['line-height-160']};
  color: ${(props) =>
    props.color
      ? props.theme.color[`${props.color}`]
      : props.theme.color['base-text']};
`

export const TitleL = styled(AppFont)`
  font-size: ${({ theme }) => theme.typography.title.l};
  font-weight: ${({ theme }) => theme.typography.font.weight.bold};
  line-height: ${({ theme }) => theme.typography['line-height-130']};
`

export const TitleM = styled(AppFont)`
  font-size: ${({ theme }) => theme.typography.title.m};
  font-weight: ${({ theme }) => theme.typography.font.weight.bold};
`
export const TitleS = styled(AppFont)`
  font-size: ${({ theme }) => theme.typography.title.s};
  font-weight: ${({ theme }) => theme.typography.font.weight.bold};
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
