import styled from 'styled-components'
import { PageSection, SectionContainer } from '../../styles'

export const OrderSection = styled(PageSection)`
  width: 100%;
  gap: 1rem;
`
export const CheckOrderContainer = styled(SectionContainer)`
  border-radius: 6px 44px 6px 44px;
`

export const OrderCostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1.5rem;
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

export const OrderListContainer = styled.div`
  display: flex;
  flex-direction: column;
  hr {
    margin: 1.5rem 0;
    border-top: 1px solid ${({ theme }) => theme.color['base-button']};
  }
`
