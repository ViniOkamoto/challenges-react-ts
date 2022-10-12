import { forwardRef, InputHTMLAttributes } from 'react'
import {
  BaseInput,
  InputContainer,
  InputError,
  InputSuffix,
  InputWrapper,
} from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  isOptional?: boolean
  error?: string
}
// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
  // eslint-disable-next-line n/handle-callback-err
  ({ error, isOptional, className, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputContainer>
          <BaseInput error={error} {...props} ref={ref} />
          {isOptional && <InputSuffix>Optional</InputSuffix>}
        </InputContainer>

        {error && <InputError>{error}</InputError>}
      </InputWrapper>
    )
  },
)
