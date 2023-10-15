import { styled } from 'styled-components';

export const StyledButton = styled.button`
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

  &:hover {
    border: #a99de8;
    box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.5);
    transition:
      background 0.1s,
      box-shadow 0.1s;
  }

  &:focus {
    border: #a99de8;
    outline: none;
    box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.5);
    transition:
      background 0.1s,
      box-shadow 0.1s;
  }

  &:active {
    border: #a99de8;
    box-shadow: none;
    transition:
      background 0.1s,
      box-shadow 0.1s;
  }
`;
