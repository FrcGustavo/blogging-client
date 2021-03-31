import styled from 'styled-components';

export const CSSNavbar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => (props.showNavbar ? '230px' : '0px')};
  height: 100%;
  background-color: ${(props) => props.theme.primarylight};
  overflow: hidden;
  transition: width 0.2s;

  > div {
    padding: 14px;
  }

  @media screen and (min-width: 680px) {
    position: static;
    width: 100%;
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }
`;

export const CSSNavItem = styled.div`
  display: block;
  border-radius: 7px;
  padding: 7px;
  background-color: ${(props) =>
    props.active ? props.theme.primaryDark : props.theme.primarylight};
  text-decoration: none;
  color: #fff;
  cursor: pointer;
`;
