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
  margin-bottom: 1rem;
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
