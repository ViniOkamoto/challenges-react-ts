import styled from 'styled-components'
import { TextL, TextS, TextXS } from '../../core/theme/typography'

export const CheckoutContainer = styled.form.attrs({ className: 'wrapper' })`
  display: block;

  @media (min-width: 62em) {
    display: grid;
    grid-template-columns: minmax(640px, auto) 1fr;
    grid-column-gap: 2rem;
  }
`
export const PageSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
export const InformationSection = styled(PageSection)`
  width: 100%;
  gap: 1rem;
`
export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${({ theme }) => theme.color['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
`
export const InstructionContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  strong {
    color: ${({ theme }) => theme.color['base-subtitle']};
  }
`
export const AddressForm = styled.div`
  width: 100%;
  display: grid;
  column-gap: 1rem;
  row-gap: 0.75rem;
  grid-auto-flow: dense;

  @media (min-width: 38em) {
    grid-template-columns: 12.75rem 1fr;
    .postalCode {
      grid-column: span 2;
      max-width: 12.5rem;
    }
    .address {
      grid-column: span 2;
    }

    .addressComplement {
      grid-column: span 1;
    }
  }
`

export const PaymentOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

  @media (max-width: 38em) {
    grid-template-columns: 1fr;
  }
`

export const CheckOrderSection = styled(PageSection)`
  width: 100%;
  gap: 1rem;
`
export const CheckOrderContainer = styled(SectionContainer)`
  border-radius: 6px 44px 6px 44px;
`

export const OrderListContainer = styled.div`
  hr {
    border-top: 1px solid ${({ theme }) => theme.color['base-button']};
  }
`

export const Order = styled.div`
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
    img {
      max-width: 64px;
      width: 100%;
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
export const OrderCostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1.5rem 0;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    strong {
      font-weight: bold;
    }
  }
  > div:not(:last-child) {
    margin-bottom: 0.75rem;
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
