import styled from 'styled-components'

export const HomeContainer = styled.div``

export const HeroContainer = styled.div`
  width: 100%;
  margin-top: 6rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 3.5rem;

  img {
    width: 29.75rem;
    height: 22.5rem;
  }
`

export const HeroPresentation = styled.div`
  flex: 1;
  min-width: 360px;

  > p {
    color: ${({ theme }) => theme.color['base-subtitle']};
    margin-top: 1rem;
  }
`

export const BenefitContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
  justify-items: start;
`
