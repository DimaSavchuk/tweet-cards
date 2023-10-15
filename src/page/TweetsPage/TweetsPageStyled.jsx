import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 20px;
  display: flex;
  gap: 30px;
`;

export const StyledLink = styled(NavLink)`
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);

  color: black;
  padding: 14px 28px;
  border-radius: 10.3px;

  border: none;

  font-family: inherit;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;

  margin-bottom: 8px;

  &:hover {
    background: #cbb6f8;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.5);
  }

  &:active {
    background: #a99de8;
    box-shadow: none;
  }
`;

export const StyledSelect = styled.select`
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);

  width: 192px;
  padding: 14px 28px;
  border-radius: 10.3px;

  border: none;

  font-family: inherit;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;

  margin-bottom: 8px;
`;

export const TweetsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 48px;
`;
