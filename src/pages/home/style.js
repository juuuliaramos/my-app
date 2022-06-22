import styled from 'styled-components';

import { devices } from '../../utils/breakpoints/breakpoints';

export const Highlight = styled.div`
	width: 100%;
	height: 449px;
	background-color: #2d0c5e;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media screen and (${devices.mobile}) {
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

	@media screen and (${devices.mobile}) {
		max-width: calc(100% - 26px);
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

	@media screen and (${devices.tablet}) {
		width: 100%;
		margin-left: 6px;

		justify-content: flex-start;
	}
`;

export const MovieTypeSection = styled.div`
	width: calc(100% - 32px);
	max-width: 1100px;
	height: fit-content;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 12px;

	@media screen and (${devices.tablet}) {
		max-width: calc(100% - 32px);
		margin: 0 auto;

		justify-content: flex-start;
		gap: 6px;
	}
`;

export const ButtonType = styled.button`
	width: fit-content;
	height: 40px;
	margin: 6px 0;
	padding: 8px 16px;
	background-color: #ffffff;
	color: #323232;
	font: 16px Roboto, sans-serif;
	font-weight: 700;
	line-height: 24px;
	border-radius: 4px;
	border: none;
	cursor: pointer;

	@media screen and (${devices.mobile}) {
		padding: 6px 18px;
		font-size: 14px;
	}
`;

export const Body = styled.div`
	max-width: 1260px;
	margin: 0 auto;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const MoviesSection = styled.div`
	width: calc(100% - 32px);
	height: fit-content;
	margin: 29px auto 0;
	padding-left: 16px;

	display: flex;
	flex-wrap: wrap;
	gap: 32px;

	@media screen and (${devices.mobile}) {
		padding-left: 0;
		gap: 16px;
	}
`;

export const MovieCard = styled.div`
	width: 176px;
	height: 264px;
	margin: 0 0 104px;
	background-color: #ffffff;

	@media screen and (${devices.mobile}) {
		width: 156px;
		height: 232px;
		margin: 0 auto 80px;
	}
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 4px;
`;

export const MovieTitle = styled.p`
	width: fit-content;
	height: fit-content;
	margin: 8px 0 0;
	color: #000000;
	font: 16px Roboto, sans-serif;
	font-weight: 700;
	line-height: 24px;

	@media screen and (${devices.mobile}) {
		font-size: 14px;
	}
`;

export const MovieDate = styled.p`
	width: fit-content;
	height: fit-content;
	margin: 0;
	color: #646464;
	font: 14px Roboto, sans-serif;
	font-weight: 700;
	line-height: 24px;

	@media screen and (${devices.mobile}) {
		font-size: 12px;
	}
`;
