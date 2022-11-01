import IssuesSection from './components/issues-section'
import ProfileSection from './components/profile-section'
import { HomeContainer } from './styles'

export default function Home() {
  return (
    <HomeContainer>
      <ProfileSection />
      <IssuesSection />
    </HomeContainer>
  )
}
