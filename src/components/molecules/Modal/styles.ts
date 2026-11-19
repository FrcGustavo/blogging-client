import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const CSSContainer = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
  padding: '0 20px',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
});

export const CSSWraper = styled(Box)({
  position: 'relative',
  width: '100%',
  maxWidth: '335px',
});

export const CSSCloseButton = styled('button')({
  position: 'absolute',
  right: '20px',
  top: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  backgroundColor: '#fa3e3e',
  boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
  color: '#fff',
  cursor: 'pointer',
  outline: 'none',
});
