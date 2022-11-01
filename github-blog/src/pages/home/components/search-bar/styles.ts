import styled from 'styled-components'

export const SearchBarContainer = styled.input`
  width: 100%;
  background: ${({ theme }) => theme.color['base-input']};
  border: 1px solid ${({ theme }) => theme.color['base-border']};
  font-size: ${({ theme }) => theme.typography.text.m};
  border-radius: 6px;
  color: ${({ theme }) => theme.color['base-text']};
  transition: border 0.5s;
  padding: 0.75rem 1rem;
  margin-top: 0.75rem;
  margin-bottom: 3rem;

  :focus {
    border: 1px solid ${({ theme }) => theme.color.blue};
  }
  ::placeholder {
    color: ${({ theme }) => theme.color['base-label']};
  }
`
