import styled from 'styled-components'

export const CheckoutContainer = styled.form.attrs({ className: 'wrapper' })`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 2.5rem;
  grid-template-columns: minmax(640px, 1fr) minmax(448px, 1fr);
  grid-row-gap: 2rem;
  grid-column-gap: 1rem;
`

export const CheckoutSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
export const InformationSection = styled(CheckoutSection)`
  display: flex;
  max-width: 640px;
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
    grid-template-columns: repeat(1, 1fr);
  }
`

export const CheckOrderContainer = styled.div`
  background: ${({ theme }) => theme.color['base-card']};
`
