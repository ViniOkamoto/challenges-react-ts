import styled from 'styled-components'

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
