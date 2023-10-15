import {
  Avatar,
  AvatarBorder,
  AvatarContainer,
  AvatarWrapper,
  BackgroundImg,
  InfoWrapper,
  Tweet,
  Info,
  InfoList,
} from './TweetComponent.styled';
import { StyledButton } from '../StyledButton/StyledButton.styled';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import BG_IMG from '../../assets/images/CardBgImg.png';
import { useState } from 'react';

const TweetComponent = ({ userData, isFollowing, followUpdate }) => {
  const { id, tweets, followers, avatar } = userData ?? {};

  const [isFollowed, setIsFollowed] = useState(isFollowing);

  const onFollow = () => {
    setIsFollowed(!isFollowed);
    followUpdate(id, !isFollowed);
    toast.info(isFollowed ? 'Unfollowed' : 'Followed', {
      position: 'top-right',
      autoClose: 1000,
    });
  };

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
          <Info>{`${
            isFollowed
              ? (followers + 1).toLocaleString('es-US')
              : followers.toLocaleString('es-US')
          } followers`}</Info>
        </InfoList>

        <StyledButton
          onClick={onFollow}
          style={{ backgroundColor: isFollowed ? '#5CD3A8' : '#EBD8FF' }}
        >
          {isFollowed ? 'Unfollow' : 'Follow'}
        </StyledButton>
      </InfoWrapper>
    </Tweet>
  );
};

export default TweetComponent;
