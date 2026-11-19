import { styled } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';
import Link from 'next/link';

export const CSSButton = styled(MuiButton)(({ theme }) => ({
  borderRadius: '7px',
  padding: '7px 14px',
  boxShadow: '0 0 7px rgba(0, 0, 0, 0.14)',
  backgroundColor: theme.palette.secondary.main,
  color: '#fff',
  textTransform: 'uppercase',
  outline: 'none',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark || theme.palette.secondary.main,
  },
}));

export const CSSButtonLink = styled(MuiButton)(({ theme }) => ({
  display: 'inline-block',
  borderRadius: '7px',
  padding: '7px 14px',
  boxShadow: '0 0 7px rgba(0, 0, 0, 0.14)',
  backgroundColor: theme.palette.secondary.main,
  color: '#fff',
  textTransform: 'uppercase',
  textDecoration: 'none',
  outline: 'none',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark || theme.palette.secondary.main,
    textDecoration: 'none',
  },
}));
