import { useEffect, useRef, useState } from 'react';
import {
  StyledButton,
  TweetsList,
  StyledSelect,
  Container,
  StyledLink,
} from './TweetsPageStyled';
import TweetComponent from '../../components/TweetComponent/TweetComponent';
import { CommonContainer } from '../../components/GlobalStyles/CommonContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/users/usersOperations';
import { isLoading, selectUsers } from '../../redux/users/selectors';
import { changeFollowingStatus } from '../../redux/followingStatus/followingStatusSlice';
import { useLocation } from 'react-router-dom';

const TweetsPage = () => {
  const [visible, setVisible] = useState(3);
  const [filter, setFilter] = useState('show all');

  const dispatch = useDispatch();

  const data = useSelector(selectUsers);
  const following = useSelector((state) => state.followingStatus);

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const followUpdate = async (id, ifFollowing) => {
    await dispatch(changeFollowingStatus({ id, ifFollowing }));
  };

  const filteredUsers = () => {
    switch (filter) {
      case 'follow':
        return data.filter((user) => following[user.id]);
      case 'followings':
        return data.filter((user) => !following[user.id]);
      default:
        return data;
    }
  };

  return (
    <CommonContainer>
      <Container>
        <StyledLink to={backLink.current}>To Home</StyledLink>

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
        <div>Loading...</div>
      ) : (
        <TweetsList>
          {data &&
            data
              .slice(0, visible)
              .map((user) => (
                <TweetComponent
                  key={user.id}
                  userData={user}
                  isFollowing={following[user.id]}
                  followUpdate={followUpdate}
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
