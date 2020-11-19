import styled, { createGlobalStyle } from 'styled-components';

export const theme = {
  primaryDark: '#1C2237',
  primarylight: '#4B5A8A',
  secondary: '#C63F17',
};

export const GlobalStyles = createGlobalStyle`
* {
  border: 0;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  font-weight: normal;
}

body, #__next {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
`;

export const Container = styled.div`
width: 100%;
max-width: 1200px;
margin: auto;
`;


export const CSSMain = styled.main`
min-height: calc(100vh - 60px);
background: ${props => props.degraded 
  ? `linear-gradient(90deg, ${props.theme.primaryDark}, ${props.theme.primarylight})`
  : 'rgba(75, 90, 138, 0.14);'};
`;