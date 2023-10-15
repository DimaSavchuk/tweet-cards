import { Link } from 'react-router-dom';
import { ROUTES } from '../../Routers/Routes';
import { Container } from './HomePageStyled';
import { StyledButton } from '../TweetsPage/TweetsPageStyled';

const HomePage = () => {
  return (
    <Container>
      <h1 style={{ color: 'white' }}>Home page</h1>
      <Link to={ROUTES.TWEETS}>
        <StyledButton>To Tweets</StyledButton>
      </Link>
    </Container>
  );
};

export default HomePage;
