import { Link } from 'react-router-dom';
import { Container } from './HomePageStyled';
import { StyledButton } from '../../components/StyledButton/StyledButton.styled';

const HomePage = () => {
  return (
    <Container>
      <h1 style={{ color: 'white' }}>Home page</h1>
      <Link to="/tweets">
        <StyledButton>To Tweets</StyledButton>
      </Link>
    </Container>
  );
};

export default HomePage;
