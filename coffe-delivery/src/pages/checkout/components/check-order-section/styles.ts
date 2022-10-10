import styled from 'styled-components'
import { PageSection, SectionContainer } from '../../styles'

export const OrderSection = styled(PageSection)`
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
