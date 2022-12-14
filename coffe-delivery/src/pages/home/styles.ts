import styled from 'styled-components'
import imageBackground from '../../assets/home/background.svg'
import { rgba } from 'polished'

export const HomeContainer = styled.main``

export const HeroBackground = styled.div`
  background: ${({ theme }) => `url(${imageBackground}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.color.background} 0%,
        ${rgba(theme.color.background, 1)} 50%,
        ${theme.color.background} 100%
      )`};
  background-size: cover;
  height: 100%;
  width: 100%;
  padding: 6rem 0;
`

export const HeroContainer = styled.section.attrs({ className: 'wrapper' })`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 3.5rem;

  img {
    width: 100%;
    max-width: 476px;
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

export const CoffesContainer = styled.section`
  margin-top: 2rem;
  margin-bottom: 10rem;
`
export const CoffesListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 1.25rem;
  margin-top: 3.5rem;
`
