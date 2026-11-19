import { createLink } from '@tanstack/react-router';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';

interface HeaderStyleProps {
  shadow?: boolean;
}

export const CSSHeader = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'shadow',
})<HeaderStyleProps>(({ theme, shadow }) => ({
  position: 'relative',
  width: '100%',
  height: '72px',
  background: `linear-gradient(90deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
  boxShadow: 'none',
  zIndex: 1,

  '& > div': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    top: '9px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: 'calc(100% - 40px)',
    maxWidth: '1040px',
    height: '54px',
    paddingLeft: '18px',
    paddingRight: '18px',
    zIndex: 1000,
    borderRadius: shadow ? '14px' : '0px',
    background: shadow ? 'rgba(255, 255, 255, 0.30)' : 'transparent',
    backdropFilter: shadow ? 'blur(20px) saturate(180%)' : 'none',
    WebkitBackdropFilter: shadow ? 'blur(20px) saturate(180%)' : 'none',
    border: shadow ? '1px solid rgba(255, 255, 255, 0.50)' : '1px solid transparent',
    boxShadow: shadow
      ? `0 8px 32px rgba(0, 0, 0, 0.15),
         inset 0 1px 0 rgba(255, 255, 255, 0.60),
         inset 0 -1px 0 rgba(255, 255, 255, 0.10)`
      : 'none',
    transition: 'all 0.4s ease',
  },
  '& > div nav a': {
    color: shadow ? 'rgba(28, 34, 55, 0.9)' : 'rgba(255, 255, 255, 0.92)',
    transition: 'color 0.4s ease',
    '&:hover': {
      color: shadow ? '#C63F17' : '#ffffff',
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

export const NavItem = createLink(styled('a')({
  display: 'inline-block',
  marginLeft: '8px',
  padding: '6px 14px',
  paddingBottom: '4px',
  borderRadius: '5px',
  textTransform: 'uppercase',
  textDecoration: 'none',
  color: 'inherit',
  fontWeight: '600',
  fontSize: '13px',
  letterSpacing: '0.5px',
  borderBottom: '2px solid transparent',
  '&[data-status="active"]': {
    borderBottomColor: '#C63F17',
  },
  transition: 'color 0.2s ease, border-color 0.2s ease',
  '&:first-of-type': {
    marginLeft: 0,
  },
}));

export const CSSLogo = createLink(styled('a')({
  display: 'block',
  width: '40px',
  height: '40px',
  overflow: 'hidden',
}));
