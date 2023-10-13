import React, { useEffect, useState } from 'react';
import { useGetAllUsersQuery } from '../../redux/usersAPI';
import { TweetsList } from './TweetsPageStyled';
import TweetComponent from '../../components/TweetComponent/TweetComponent';
import { CommonContainer } from '../../components/GlobalStyles/CommonContainer';

const TweetsPage = () => {
  const [page, setPage] = useState(1);

  const { data } = useGetAllUsersQuery(page);
  console.log(data);

  useEffect(() => {}, [page]);

  const handleMoreTweets = () => {
    setPage((prevPage) => prevPage + 1);
  };
  return (
    <CommonContainer>
      <TweetsList>
        {data &&
          data.map((user) => <TweetComponent key={user.id} userData={user} />)}
      </TweetsList>
    </CommonContainer>
  );
};

export default TweetsPage;
