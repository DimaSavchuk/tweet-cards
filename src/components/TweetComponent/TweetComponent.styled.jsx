import styled from 'styled-components';

import BG_IMG from '../../assets/images/CardBgImg.png';

export const Tweet = styled.li`
  position: relative;
  /* width: 380px; */
  /* height: 460px; */

  padding: 28px 36px;
  border-radius: 20px;

  background: linear-gradient(
    115deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.62157px 0px rgba(0, 0, 0, 0.23);

  &::after {
    position: absolute;
    right: 0;
    top: 50%;

    content: '';
    height: 8px;
    width: 100%;
    flex-shrink: 0;

    background: #ebd8ff;
    box-shadow:
      0px 3.43693px 2.5777px 0px #fbf8ff inset,
      0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.06),
      0px -1.71846px 3.43693px 0px #ae7be3 inset;

    transform: translate(0, -50%);
  }
`;

export const BackgroundImg = styled.img`
  width: 308px;
  height: 168px;

  margin-bottom: 88px;
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const AvatarBorder = styled.div`
  height: 80px;
  width: 80px;
  border: 8px;
  border-radius: 50%;

  background: #ebd8ff;
  box-shadow:
    0px 3.43693px 2.5777px 0px #fbf8ff inset,
    0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.06),
    0px -1.71846px 3.43693px 0px #ae7be3 inset;
`;

export const AvatarContainer = styled.div`
  width: 62px;
  height: 62px;

  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Avatar = styled.img`
  width: 100%;
  border-radius: 50%;
`;

export const InfoWrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;

  align-items: center;
  gap: 10px;
`;

export const InfoList = styled.ul``;

export const Info = styled.li`
  color: #ebd8ff;

  font-size: 20px;
  font-weight: 500;
  font-style: normal;

  text-transform: uppercase;

  padding-bottom: 16px;
`;
