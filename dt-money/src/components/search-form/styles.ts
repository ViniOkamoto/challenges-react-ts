import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${({ theme }) => theme.color['gray-900']};
    color: ${({ theme }) => theme.color['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme.color['gray-500']};
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.color['green-300']};
    color: ${({ theme }) => theme.color['green-300']};
    font-weight: bold;
    border-radius: 6px;

    &:not(:disabled):hover {
      background: ${({ theme }) => theme.color['green-500']};
      border: 1px solid ${({ theme }) => theme.color['green-500']};
      color: ${({ theme }) => theme.color.white};
      transition: 0.2s;
    }

    &:disabled {
      opacity: 0.3;
    }
  }
`
