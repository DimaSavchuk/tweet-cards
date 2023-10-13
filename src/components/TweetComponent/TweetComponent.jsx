import {
  Avatar,
  AvatarBorder,
  AvatarContainer,
  AvatarWrapper,
  BackgroundImg,
  InfoWrapper,
  Tweet,
  Info,
  StyledButton,
  InfoList,
} from './TweetComponent.styled';

import BG_IMG from '../../assets/images/CardBgImg.png';
import { useEffect, useState } from 'react';

const TweetComponent = ({ userData }) => {
  const { id, user, tweets, followers, avatar } = userData ?? {};

  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(followers);

  let formattedFollowers = followers.toLocaleString('en-US');

  const toggleFollow = () => {
    if (isFollowing) {
      setFollowersCount(followersCount - 1);
    } else {
      setFollowersCount(followersCount + 1);
    }
    setIsFollowing(!isFollowing);
  };

  useEffect(() => {
    const formatted = followersCount.toLocaleString('en-US');

    if (formatted !== formattedFollowers) {
      formattedFollowers = formatted;
    }
  }, [followersCount]);

  return (
    <Tweet key={id}>
      <BackgroundImg src={BG_IMG} alt="bg" />

      <AvatarWrapper>
        <AvatarBorder>
          <AvatarContainer>
            <Avatar src={avatar} />
          </AvatarContainer>
        </AvatarBorder>
      </AvatarWrapper>

      <InfoWrapper>
        <InfoList>
          <Info>{`${tweets} tweets`}</Info>
          <Info>{`${formattedFollowers} followers`}</Info>
        </InfoList>

        <StyledButton onClick={toggleFollow}>
          {isFollowing ? 'Unfollow' : 'Follow'}
        </StyledButton>
      </InfoWrapper>
    </Tweet>
  );
};

export default TweetComponent;
