import Link from 'next/link';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';

interface HeaderStyleProps {
  shadow?: boolean;
}

export const CSSHeader = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'shadow',
})<HeaderStyleProps>(({ theme, shadow }) => ({
  position: 'sticky',
  top: 0,
  left: 0,
  width: '100%',
  height: '72px',
  paddingLeft: '20px',
  paddingRight: '20px',
  background: `linear-gradient(90deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
  boxShadow: shadow ? '0 4px 24px rgba(0, 0, 0, 0.25)' : '0 0 0px',
  zIndex: 1,
  transition: 'box-shadow 0.3s ease',

  '& > div': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 'calc(100% - 18px)',
    marginTop: '9px',
    marginBottom: '9px',
    paddingLeft: '18px',
    paddingRight: '18px',
    borderRadius: '14px',
    background: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(24px) saturate(200%)',
    WebkitBackdropFilter: 'blur(24px) saturate(200%)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    boxShadow: `
      0 4px 20px rgba(0, 0, 0, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.22),
      inset 0 -1px 0 rgba(255, 255, 255, 0.06)
    `,
  },

  '@media screen and (min-width: 1200px)': {
    '& > div': {
      padding: '0 18px',
    },
  },
}));

export const CSSNav = styled('nav')({
  display: 'flex',
  alignItems: 'center',
  '& a': {
    display: 'flex',
    '& img': {
      width: '35px',
    },
  },
});

export const NavItem = styled(Link)({
  display: 'inline-block',
  borderRadius: '5px',
  marginLeft: '21px',
  padding: '7px 14px',
  boxShadow: '0 0 7px rgba(0, 0, 0, 0.14)',
  backgroundColor: 'rgba(0, 0, 0, 0.14)',
  textTransform: 'uppercase',
  textDecoration: 'none',
  color: 'white',
  cursor: 'pointer',
  '&:first-of-type': {
    marginLeft: 0,
  },
});

export const CSSLogo = styled(Link)({
  display: 'block',
  width: '40px',
  height: '40px',
  overflow: 'hidden',
});
