import { useEffect, useState } from 'react';
import {
  TweetsList,
  StyledSelect,
  Container,
  StyledLink,
} from './TweetsPageStyled';
import { StyledButton } from '../../components/StyledButton/StyledButton.styled';

import TweetComponent from '../../components/TweetComponent/TweetComponent';
import { CommonContainer } from '../../components/GlobalStyles/CommonContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../redux/users/usersOperations';
import { changeFollowingStatus } from '../../redux/following/followingSlice';
import Loader from '../../components/Loader/Loader';

const TweetsPage = () => {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(3);
  const [filter, setFilter] = useState('show all');

  const followingStatus = useSelector((state) => state.followingStatus);
  const isLoading = useSelector((state) => state.users.isLoading);
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const updateFollowingStatus = async (userId, isFollowing) => {
    await dispatch(changeFollowingStatus({ userId, isFollowing }));
  };

  const filteredUsers = () => {
    switch (filter) {
      case 'follow':
        return users.filter((user) => followingStatus[user.id]);
      case 'followings':
        return users.filter((user) => !followingStatus[user.id]);
      default:
        return users;
    }
  };

  return (
    <CommonContainer>
      <Container>
        <StyledLink to={'/'}>To Home</StyledLink>

        <StyledSelect
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="show all">All</option>
          <option value="follow">Follow</option>
          <option value="followings">Followings</option>
        </StyledSelect>
      </Container>

      {isLoading ? (
        <Loader />
      ) : (
        <TweetsList>
          {filteredUsers()
            .slice(0, visible)
            .map((user) => (
              <TweetComponent
                key={user.id}
                userData={user}
                isFollowing={followingStatus[user.id]}
                followUpdate={updateFollowingStatus}
              />
            ))}
        </TweetsList>
      )}

      {visible < filteredUsers().length && (
        <StyledButton onClick={() => setVisible(visible + 3)}>
          Load More
        </StyledButton>
      )}
    </CommonContainer>
  );
};

export default TweetsPage;
