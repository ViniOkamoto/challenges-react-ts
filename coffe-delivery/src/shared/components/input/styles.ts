import styled, { css } from 'styled-components'
import { TextXS } from '../../../core/theme/typography'

export interface BaseInputProps {
  error?: string
}
export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const InputError = styled(TextXS)`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.color['base-error']};
`
export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`

export const BaseInput = styled.input<BaseInputProps>`
  border: 1px transparent solid;
  flex: 1;
  background: ${({ theme }) => theme.color['base-input']};
  font-size: ${({ theme }) => theme.typography.text.s};
  color: ${({ theme }) => theme.color['base-text']};
  padding: 0.75rem;
  border-radius: 4px;
  transition: 0.2s border;
  ::placeholder {
    color: ${({ theme }) => theme.color['base-label']};
    font-size: ${({ theme }) => theme.typography.text.s};
  }
  :focus {
    border: 1px ${({ theme }) => theme.color['yellow-dark']} solid;
  }

  ${({ error, theme }) => {
    return (
      error &&
      css`
        border-color: ${theme.color['base-error']};
      `
    )
  }}
`

export const InputSuffix = styled(TextXS)`
  position: absolute;
  right: 0.75rem;
  color: ${({ theme }) => theme.color['base-label']};
`
