import styled from 'styled-components';

export const CSSSidebarContainer = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) => (props.openMobile ? '0' : '-100%')};
  width: 100%;
  height: 100%;
  transition: all 0.2s;

  ${({ theme }) => theme.breakpoints.up('md')} {
    position: static;
    width: 256px;
    left: 0;
  }
`;

export const CSSSidebar = styled.nav`
  width: 256px;
  height: 100%;
  background-color: ${({ theme }) => theme.primarylight};
`;
