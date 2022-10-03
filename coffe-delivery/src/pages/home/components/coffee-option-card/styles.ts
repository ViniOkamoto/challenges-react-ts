import styled from 'styled-components'
import { ColorType } from '../../../../core/theme/default'
import { TextS } from '../../../../core/theme/typography'

export const CoffeCard = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  text-align: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 1.25rem;
  background: ${({ theme }) => theme.color['base-card']};
  border-radius: 6px 36px 6px 36px;
  > img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
  > strong {
    padding-bottom: 0.5rem;
  }
  > p {
    padding-bottom: 2rem;
  }
`

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;
  width: 100%;
  padding-top: 0.75rem;
  padding-bottom: 1rem;
`

export const CoffeeCategory = styled(TextS)`
  background: ${({ theme }) => theme.color['yellow-light']};
  color: ${({ theme }) => theme.color['yellow-dark']};
  font-size: ${({ theme }) => theme.typography.components.tag};
  font-weight: ${({ theme }) => theme.typography.roboto.weight.bold};
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
`

export const CoffeeFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  > div:first-of-type {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
  }
`

export const AddCartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7.5rem;
  gap: 0.5rem;
`
