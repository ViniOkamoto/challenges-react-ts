import styled from 'styled-components'

export const IssuesSectionContainer = styled.section`
  margin-top: 4.5rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  .section-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .section-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    * {
      max-width: 416px;
    }
  }
`
export const IssueContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  border-radius: 10px;
  background: ${({ theme }) => theme.color['base-post']};

  .issue-header {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 1.25rem;
    gap: 1rem;
    > strong {
      width: 100%;
      color: ${({ theme }) => theme.color['base-title']};
    }
    > span {
      color: ${({ theme }) => theme.color['base-span']};
    }
  }

  .issue-description {
    color: ${({ theme }) => theme.color['base-text']};
    height: 7rem;
  }
`
