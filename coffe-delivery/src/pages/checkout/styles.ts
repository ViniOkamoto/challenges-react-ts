import styled from 'styled-components'

export const CheckoutContainer = styled.main.attrs({ className: 'wrapper' })`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 2.5rem;
`

export const CheckoutSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const UserInformationContainer = styled.div`
  background: ${({ theme }) => theme.color['base-card']};
`
export const CheckOrderContainer = styled.div`
  background: ${({ theme }) => theme.color['base-card']};
`
