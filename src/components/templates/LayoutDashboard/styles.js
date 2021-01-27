import styled from 'styled-components';

export const CSSDashboard = styled.div`
display: grid;
grid-template-columns: 0px 1fr;
grid-template-rows: 60px 1fr;
width: 100vw;
height: 100vh;
margin-left: ${props => props.showNavbar ? '230px' : '0px'};
overflow: hidden;
transition: margin-left 0.2s;

@media screen and (min-width: 680px) {
  margin-left: 0;
  grid-template-columns: ${props => props.showNavbar ? '230px 1fr' : '0px 1fr'};
}
`; 

export const CSSMain = styled.main`
grid-column: 2 / 3;
grid-row: 2 / 3;
width: 100%;
height: 100%;
overflow: hidden;
`;