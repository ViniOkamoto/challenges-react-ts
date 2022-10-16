import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${({ theme }) => theme.color['gray-800']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background: ${({ theme }) => theme.color['gray-900']};
      color: ${({ theme }) => theme.color['gray-300']};
      padding: 1rem;

      &::placeholder {
        color: ${({ theme }) => theme.color['gray-500']};
      }
    }
    button[type='submit'] {
      height: 58px;
      border: 0;
      background: ${({ theme }) => theme.color['green-500']};
      color: ${({ theme }) => theme.color.white};
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      cursor: pointer;
      &:disabled {
        opacity: 0.5;
      }
      &:hover {
        background: ${({ theme }) => theme.color['green-700']};
        transition: background-color 0.2s;
      }
    }
  }
`
export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  line-height: 0;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.color['gray-500']};
`
export const TransactionTypeContainer = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  background: ${({ theme }) => theme.color['gray-700']};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  color: ${({ theme }) => theme.color['gray-300']};

  svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme.color['green-300']
        : props.theme.color['red-300']};
  }
  &[data-state='unchecked']:hover {
    background: ${({ theme }) => theme.color['gray-600']};
    transition: background 0.2s;
  }
  &[data-state='checked'] {
    color: ${({ theme }) => theme.color.white};
    background: ${(props) =>
      props.variant === 'income'
        ? props.theme.color['green-300']
        : props.theme.color['red-300']};

    svg {
      color: ${({ theme }) => theme.color.white};
    }
  }
`
