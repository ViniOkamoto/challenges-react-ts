import styled from 'styled-components'

export const ProfileSectionContainer = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.color['base-profile']};
  border-radius: 10px;
  gap: 2rem;
  padding: 2rem;
  img {
    border-radius: 8px;
    max-width: 148px;
    max-height: 148px;
    width: 100%;
    height: auto;
    aspect-ratio: 1;
  }
`
export const GithubInfoContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.color['base-subtitle']};
    svg {
      color: ${({ theme }) => theme.color['base-label']};
    }
  }
`
export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 0.5rem;
  }
`
export const GithubButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  background: transparent;
  font-size: ${({ theme }) => theme.typography.text.link};
  text-transform: uppercase;
  gap: 0.5rem;
  color: ${({ theme }) => theme.color.blue};
`
