import styled from 'styled-components'
import cover from '~/assets/images/cover.png'
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: auto;
  background-image: url(${cover});
  background-size: cover;
  aspect-ratio: 4.864;
  padding-top: 4rem;
  margin-left: auto;
  margin-right: auto;
  img {
    max-width: 148px;
    width: 100%;
    aspect-ratio: 1.51;
    height: auto;
  }
`
