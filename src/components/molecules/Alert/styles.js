import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const handleStatus = ({ status, theme }) => {
  switch (status) {
    case 'success':
      return '#42B72A';
    case 'fail':
      return '#FA3E3E';
    default:
      return theme.palette.primary.dark;
  }
};

export const CSSAlert = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'status',
})(({ theme, status }) => ({
  position: 'absolute',
  top: '70px',
  right: '30px',
  width: '250px',
  borderRadius: '7px',
  padding: '14px',
  boxShadow: '0 0 7px rgba(0, 0, 0, 0.14)',
  backgroundColor: handleStatus({ status, theme }),
  color: status !== 'success' ? '#FFF' : theme.palette.primary.dark,
  transition: 'all 0.2s ease-in-out',

  '& svg': {
    color: status !== 'success' ? '#FFF' : theme.palette.primary.dark,
    transition: 'all 0.2s ease-in-out',
  },
}));

export const CSSTitle = styled('p')({
  fontSize: '16px',
  fontWeight: 'bold',
});

export const CSSMessage = styled('p')({});

export const CSSCloseButton = styled('button')({
  position: 'absolute',
  top: '14px',
  right: '14px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  outline: 'none',

  '& svg': {
    fontSize: '18px',
  },
});
