import styled from 'styled-components';

export const Highlight = styled.div`
	width: 100%;
	height: 449px;
	background-color: #2d0c5e;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 900px) {
		height: fit-content;
		margin: 0 auto;
		padding-bottom: 36px;

		justify-content: flex-start;
		align-items: flex-start;
	}
`;

export const Title = styled.p`
	max-width: 850px;
	width: 100%;
	height: 112px;
	margin: 0 auto 40px;
	color: #ffffff;
	font: 48px Roboto, sans-serif;
	letter-spacing: -0.005em;
	font-weight: 700;
	line-height: 56px;

	@media screen and (max-width: 900px) {
		max-width: calc(100% - 32px);
		height: fit-content;
		margin: 40px auto 36px;
		font-size: 36px;

		display: flex;
		justify-content: flex-start;
	}

	@media screen and (max-width: 456px) {
		max-width: calc(100% - 32px);
		height: fit-content;
		font-size: 24px;
		line-height: 28px;
	}
`;

export const FilterText = styled.p`
	width: 100%;
	height: fit-content;
	margin: 0 auto 16px;
	color: #ffffff;
	font: 14px Roboto, sans-serif;
	font-weight: 700;
	line-height: 20px;

	display: flex;
	justify-content: center;

	@media screen and (max-width: 900px) {
		width: 100%;
		margin-left: 6px;

		justify-content: flex-start;
	}
`;

export const MovieTypeSection = styled.div`
	max-width: 1100px;
	height: fit-content;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;

	@media screen and (max-width: 900px) {
		max-width: calc(100% - 32px);
		margin: 0 auto;

		justify-content: flex-start;
	}
`;

export const ButtonType = styled.button`
	width: fit-content;
	height: 40px;
	margin: 6px;
	padding: 8px 16px;
	background-color: #ffffff;
	color: #323232;
	font: 16px Roboto, sans-serif;
	font-weight: 700;
	line-height: 24px;
	border-radius: 4px;
	border: none;
`;
