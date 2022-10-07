import styled from 'styled-components'

export const SucceedOrderContainer = styled.main.attrs({
  className: 'wrapper',
})`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h1 {
    color: ${({ theme }) => theme.color['yellow-dark']};
    margin-bottom: 0.25rem;
  }
  > p {
    margin-bottom: 2.5rem;
  }
  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 7rem;
    img {
      width: 100%;
      max-width: 492px;
    }
  }
`
export const OrderDeliverInformationsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;
  flex: 1;
  min-width: 360px;
  ::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 6px 36px;
    padding: 1px;
    background: linear-gradient(45deg, #dbac2c, #8047f8);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`
