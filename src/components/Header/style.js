import styled from 'styled-components';

export const HeaderWrapper = styled.div`
	width: 100%;
	height: 56px;
	background-color: #5c16c5;
`;

export const HeaderContent = styled.div`
	width: 100%;
	max-width: 1260px;
	height: 56px;
	margin: 0 auto;
`;

export const Image = styled.img`
	width: 184px;
	height: 24px;
	margin: 16px 16px 15px 16px;

	@media screen and (max-width: 481px) {
		width: 100%;
		height: 18px;
		margin: 19px auto 18px;
	}
`;
