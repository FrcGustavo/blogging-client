import styled from 'styled-components';

export const CSSSocialMedia = styled.div`
display: grid;
grid-template-columns: repeat(2, 28px);
gap: 0 14px;
justify-content: center;

a svg {
	font-size: 28px;
	color: #6EC6FF;
}

@media screen and (min-width: 680px) {
	justify-content: flex-start;
}
`;

export const CSSProfile = styled.section`
width: 100%;
max-width: 1056px;
margin: auto;
padding: 28px;

> div {
	width: 100%;
	&:first-child {
		display: flex;
		justify-content: center;
		padding-bottom: 28px;
	}
}

img {
	width: 150px;
	height: 150px;
	border-radius: 50%;
}

h1, h2, p {
	margin-bottom: 14px;
	color: #FFF;
	font-weight: bold;
	text-align: center;
	letter-spacing: 1px;
}

h1 {
	font-size: 28px;
}

h2 {
	font-size: 21px;
}

p {
	font-weight: normal;
}

@media screen and (min-width: 680px) {
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 28px;
	padding-top: 56px;

	h1, h2, p {
		text-align: left;
	}
}
`;
