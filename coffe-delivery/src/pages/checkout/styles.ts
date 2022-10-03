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
export const UserInformationSection = styled(CheckoutSection)`
  display: flex;
  justify-content: flex-start;
  max-width: 640px;
  width: 100%;
  > h1 {
    margin-bottom: 1rem;
  }
`
export const UserInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${({ theme }) => theme.color['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
`

export const UserInformationIntroContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  strong {
    color: ${({ theme }) => theme.color['base-subtitle']};
  }

  svg {
    color: ${({ theme }) => theme.color['yellow-dark']};
  }
`
export const AddressForm = styled.div`
  width: 100%;
  display: grid;
  column-gap: 1rem;
  row-gap: 0.75rem;
  grid-auto-flow: dense;

  @media (min-width: 35em) {
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

export const CheckOrderContainer = styled.div`
  background: ${({ theme }) => theme.color['base-card']};
`
