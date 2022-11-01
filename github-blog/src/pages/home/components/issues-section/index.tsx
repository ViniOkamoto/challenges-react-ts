import { TextS, TitleS } from '~/core/theme/typography'
import SearchBar from '../search-bar'
import { IssueContainer, IssuesSectionContainer } from './styles'

interface Mockup {
  title: string
  description: string
  createAt: Date
}

const mockup: Mockup[] = [
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    createAt: new Date(),
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    createAt: new Date(),
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    createAt: new Date(),
  },
]

export default function IssuesSection() {
  return (
    <IssuesSectionContainer>
      <div className="section-title">
        <TitleS as="strong" color="base-subtitle">
          Publicações
        </TitleS>
        <TextS color="base-span">6 publicações</TextS>
      </div>
      <SearchBar placeholder="Search for content" />
      <div className="section-list">
        {mockup.map((item) => (
          <IssueContainer key={item.title}>
            <div className="issue-header">
              <TitleS as="strong" color="base-title">
                {item.title}
              </TitleS>
              <TextS color="base-span">
                {item.createAt.toLocaleDateString()}
              </TextS>
            </div>
            <TextS color="base-text">{item.description}</TextS>
          </IssueContainer>
        ))}
      </div>
    </IssuesSectionContainer>
  )
}
