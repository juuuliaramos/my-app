import styled from 'styled-components';

export const HeaderWrapper = styled.div`
	width: 100%;
	height: 56px;
	background-color: #5c16c5;
`;

export const HeaderContent = styled.div`
	width: 100%;
	max-width: 1280px;
	height: 56px;
	margin: 0 auto;
	background-color: #5c16c5;

	@media screen and (min-width: 414px) and (max-width: 1280px) {
		margin-left: 16px;
	}
`;

export const Image = styled.img`
	width: 184px;
	height: 24px;
	margin: 16px auto 15px;

	@media screen and (max-width: 415px) {
		width: 100%;
		height: 18px;
		margin: 19px auto 18px;
	}
`;
