import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';

import MontserratMediumEot from '../../assets/fonts/Montserrat-Medium/Montserrat-Medium.eot';
import MontserratMediumEotIndex from '../../assets/fonts/Montserrat-Medium/Montserrat-Medium.eot?#iefix';
import MontserratMediumWoff from '../../assets/fonts/Montserrat-Medium/Montserrat-Medium.woff';
import MontserratMediumTtf from '../../assets/fonts/Montserrat-Medium/Montserrat-Medium.ttf';

import MontserratSemiBoldEot from '../../assets/fonts/Montserrat-SemiBold/Montserrat-SemiBold.eot';
import MontserratSemiBoldEotIndex from '../../assets/fonts/Montserrat-SemiBold/Montserrat-SemiBold.eot?#iefix';
import MontserratSemiBoldWoff from '../../assets/fonts/Montserrat-SemiBold/Montserrat-SemiBold.woff';
import MontserratSemiBoldTtf from '../../assets/fonts/Montserrat-SemiBold/Montserrat-SemiBold.ttf';

export const GlobalStyle = createGlobalStyle`

@font-face {
	font-family: 'Montserrat';
	src: url(${MontserratMediumEot});
	src: local('Montserrat Medium'), local('Montserrat-Medium'),
		url(${MontserratMediumEotIndex}) format('embedded-opentype'),
		url(${MontserratMediumWoff}) format('woff'),
		url(${MontserratMediumTtf}) format('truetype');
	font-weight: 500;
	font-style: normal;
}
@font-face {
	font-family: 'Montserrat';
	src: url(${MontserratSemiBoldEot});
	src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'),
		url(${MontserratSemiBoldEotIndex}) format('embedded-opentype'),
		url(${MontserratSemiBoldWoff}) format('woff'),
		url(${MontserratSemiBoldTtf}) format('truetype');
	font-weight: 600;
	font-style: normal;
}
`;
