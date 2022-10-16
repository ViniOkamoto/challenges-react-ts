import styled from 'styled-components'
import * as Select from '@radix-ui/react-select'

export const SelectContainer = styled(Select.Trigger)`
  all: 'unset';
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  border: 0;
  background: ${({ theme }) => theme.color['gray-900']};
  color: ${({ theme }) => theme.color['gray-300']};
  padding: 1rem;
  &[data-placeholder] {
    color: ${({ theme }) => theme.color['gray-500']};
  }
  &:hover {
    > span > svg {
      color: ${({ theme }) => theme.color['green-500']};
    }
  }
`

export const SelectIcon = styled(Select.SelectIcon)`
  line-height: 0;
`

export const SelectContent = styled(Select.Content)`
  overflow: hidden;
  background: ${({ theme }) => theme.color['gray-700']};
  border-radius: 6px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`

export const SelectViewport = styled(Select.Viewport)`
  padding: 1rem;
`

export const SelectItem = styled(Select.Item)`
  color: ${({ theme }) => theme.color['gray-300']};
  margin-bottom: 0.5rem;
  user-select: none;
  &[data-highlighted] {
    background: ${({ theme }) => theme.color['green-500']};
    color: ${({ theme }) => theme.color.white};
  }
`
