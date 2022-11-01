import { FaDesktop, FaGithub, FaBuilding, FaUserFriends } from 'react-icons/fa'
import { TitleL, TextM } from '~/core/theme/typography'
import {
  GithubButton,
  GithubInfoContainer,
  ProfileSectionContainer,
  UserInfoContainer,
} from './styles'
import avatar from '~/assets/images/avatar.png'

export default function ProfileSection() {
  return (
    <ProfileSectionContainer>
      <img src={avatar} alt="github user" />
      <UserInfoContainer>
        <div>
          <TitleL as="strong" color="base-title">
            User name
          </TitleL>
          <GithubButton type="button">
            Github
            <FaDesktop />
          </GithubButton>
        </div>
        <TextM color="base-text">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </TextM>
        <GithubInfoContainer>
          <div>
            <FaGithub />
            <TextM>gituser</TextM>
          </div>
          <div>
            <FaBuilding />
            <TextM>Rocket</TextM>
          </div>
          <div>
            <FaUserFriends />
            <TextM>23</TextM>
          </div>
        </GithubInfoContainer>
      </UserInfoContainer>
    </ProfileSectionContainer>
  )
}
