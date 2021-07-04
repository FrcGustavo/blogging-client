import styled from 'styled-components';

export const CSSSidebarContainer = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) => (props.openMobile ? '0' : '-100%')};
  width: 100%;
  height: 100%;
  transition: all 0.2s;
  z-index: 1000;

  ${({ theme }) => theme.breakpoints.up('md')} {
    position: static;
    width: 256px;
    left: 0;
  }
`;

export const CSSSidebar = styled.div`
  width: 256px;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.primary.dark};
`;

export const CSSLogo = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(1)};
`;

export const CSSTitleLogo = styled.p`
  margin-left: ${({ theme }) => theme.spacing(1.25)};
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  font-size: ${({ theme }) => theme.spacing(1.25)};
  color: #fff;
`;

export const CSSNav = styled.nav`
  padding-left: ${({ theme }) => theme.spacing(1)};
  padding-right: ${({ theme }) => theme.spacing(1)};
`;

export const CSSNavSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const CSSLinkItem = styled.a`
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.spacing(0.5)};
  padding-top: ${({ theme }) => theme.spacing(0.5)};
  padding-bottom: ${({ theme }) => theme.spacing(0.5)};
  padding-left: ${({ theme }) => theme.spacing(1)};
  padding-right: ${({ theme }) => theme.spacing(1)};
  color: ${({ theme }) => theme.palette.common.white};
  font-size: ${({ theme }) => theme.spacing(0.8)};
  text-decoration: none;
  transition: all 0.2s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  svg {
    margin-right: ${({ theme }) => theme.spacing(0.5)};
  }
`;

export const CSSStaticItem = styled.h3`
  display: block;
  padding-top: ${({ theme }) => theme.spacing(0.5)};
  padding-bottom: ${({ theme }) => theme.spacing(0.5)};
  color: ${({ theme }) => theme.palette.common.white};
  font-size: ${({ theme }) => theme.spacing(0.7)};
  text-transform: uppercase;
`;
