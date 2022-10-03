import { InputHTMLAttributes } from 'react'
import { BaseInput, InputSuffix, InputWrapper } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean
}
export default function Input({ isOptional, className, ...props }: InputProps) {
  return (
    <InputWrapper className={className}>
      <BaseInput {...props} />
      {isOptional && <InputSuffix>Optional</InputSuffix>}
    </InputWrapper>
  )
}
