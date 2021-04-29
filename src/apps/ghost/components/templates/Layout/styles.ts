import styled from 'styled-components';

export const CSSLayout = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  ${({ theme }) => theme.breakpoints.up('md')} {
    display: flex;
    flew-wrap: wrap;
  }
`;

export const CSSMain = styled.main`
  width: 100%;
  height: 100%;
  overflow: hidden;

  ${({ theme }) => theme.breakpoints.up('md')} {
    width: calc(100% - 256px);
  }
`;
