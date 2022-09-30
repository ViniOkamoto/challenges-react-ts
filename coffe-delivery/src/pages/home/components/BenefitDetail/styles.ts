import styled from 'styled-components'

export const BenefitDetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.color['yellow-dark']};
    color: ${({ theme }) => theme.color.white};
  }
`
