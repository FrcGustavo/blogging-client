import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const CSSFooter = styled('footer')(({ theme }) => ({
  background: `linear-gradient(90deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
  padding: '28px',
}));

export const CSSSocialMedia = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 28px)',
  gap: '0 14px',

  '& a': {
    fontSize: 0,
  },

  '& a svg': {
    fontSize: '28px',
    color: '#6ec6ff',
  },
});
