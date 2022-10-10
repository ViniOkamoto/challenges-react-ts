import styled from 'styled-components'

export const OrderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3rem;
  > p {
    font-weight: bold;
  }
  > div {
    flex: 1 1 70%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 1.25rem;

    > div:first-child {
      width: 4rem;
      img {
        width: 100%;
      }
    }
    > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      > div {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
      }
    }
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({ theme }) => theme.color['base-text']};
  font-size: ${({ theme }) => theme.typography.components.buttonS};
  font-family: ${({ theme }) => theme.typography.roboto['font-family']};
  padding: 0.6rem;
  border: none;
  background: ${({ theme }) => theme.color['base-button']};
  border-radius: 6px;
  transition: 0.4s;

  svg {
    color: ${({ theme }) => theme.color['purple-default']};
  }

  &:hover {
    background: ${({ theme }) => theme.color['base-hover']};
  }
`
