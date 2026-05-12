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
  height: '60px',
  paddingLeft: '32px',
  paddingRight: '32px',
  background: `linear-gradient(90deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
  boxShadow: shadow ? '0 0 7px rgba(0, 0, 0, 0.14)' : '0 0 0px',
  zIndex: 1,

  '& > div': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  '@media screen and (min-width: 1200px)': {
    '& > div': {
      padding: 0,
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
