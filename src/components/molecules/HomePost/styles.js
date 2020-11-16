import styled from 'styled-components';

export const CSSCardContainer = styled.section`
padding: 28px;
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
}

h3 {
	margin-bottom: 14px;
	font-size: 21px;
	font-weight: bold;
}

p {
	margin-bottom: 14px;
}

`;

export const CSSButton = styled.button`
border-radius: 7px;
padding: 7px 14px;
box-shadow: 0 0 7px rgba(0, 0, 0, 0.14);
background-color: ${props => props.theme.secondary};
color: #FFF;
text-transform: uppercase;
`;
