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

`;

export const CSSProfile = styled.section`
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

`;
