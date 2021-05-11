import styled from 'styled-components';

export const CSSDownbar = styled.nav`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 64px;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.14);
  ${({ theme }) => theme.breakpoints.up('md')} {
    display: none;
  }
  background-color: ${({ theme }) => theme.palette.primary.dark};
`;
