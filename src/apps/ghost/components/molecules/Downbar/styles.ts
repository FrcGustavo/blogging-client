import styled from 'styled-components';

export const CSSDownbar = styled.nav`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 64px;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing(0.5)};
  padding: ${({ theme }) => theme.spacing(0.5)} ${({ theme }) => theme.spacing(1)};
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.14);
  ${({ theme }) => theme.breakpoints.up('md')} {
    display: none;
  }
  background-color: ${({ theme }) => theme.palette.primary.dark};
`;

export const CSSLinkItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
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
