import styled from 'styled-components';

export const CSSCardContainer = styled.section`
padding: 28px;

@media screen and (min-width: 680px) {
	display: flex;
	justify-content: center;
}
`;

export const CSSCard = styled.article`
width: 100%;
max-width: 290px;
border-radius: 7px;
margin: auto;
box-shadow: 0 0 7px rgba(0, 0, 0, 0.14);
background-color: #FFF;
overflow: hidden;

> div:last-child {
	padding: 14px;
}

img {
	width: 100%;
	object-fit: cover;
}

h3 {
	margin-bottom: 14px;
	font-size: 21px;
	font-weight: bold;
}

p {
	margin-bottom: 14px;
}

@media screen and (min-width: 680px) {
	display: grid;
	grid-template-columns: 318px 1fr;
	gap: 21px;
	width: 100%;
	max-width: 1000px;
	height: 218px;
	
	div:first-child {
		height: 100%;
		padding: 14px;
		overflow: hidden;
	}

	img {
		width: 290px;
		border-radius: 7px;
	}
}
`;