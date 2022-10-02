import styled from 'styled-components'
import { TextS } from '../../../../../core/theme/typography'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
  img {
    width: 5.25rem;
    height: 2.5rem;
  }
  nav {
    display: flex;
    gap: 0.5rem;

    a {
      position: relative;
      svg {
        color: ${(props) => props.theme.color['yellow-dark']};
      }
      background: ${(props) => props.theme.color['yellow-light']};
      padding: 0.5rem;
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`
export const LocationButton = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme.color['purple-light']};
  justify-content: center;
  gap: 0.25rem;
  padding: 0.5em;
  color: ${(props) => props.theme.color['purple-dark']};
  svg {
    color: ${(props) => props.theme.color['purple-default']};
  }
`

export const ShopCartCounter = styled(TextS)`
  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  top: calc(-1.25rem / 2);
  right: calc(-1.25rem / 2);
  color: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.color['yellow-dark']};
  line-height: 1;
  font-weight: bold;
`
