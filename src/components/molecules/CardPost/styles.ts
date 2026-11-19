import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const CSSArticle = styled('article')({
  width: '100%',
  maxWidth: '290px',
  boxShadow: '0 0 7px rgba(0, 0, 0, 0.14)',
  borderRadius: '7px',
  backgroundColor: '#fff',
  overflow: 'hidden',
});

export const CSSInfo = styled(Box)({
  padding: '14px',

  '& h2': {
    marginBottom: '14px',
    fontSize: '21px',
    fontWeight: 'bold',
  },

  '& p': {
    marginBottom: '14px',
  },
});

export const CSSImage = styled(Box)({
  height: '150px',
  overflow: 'hidden',

  '& img': {
    width: '100%',
    objectFit: 'cover',
  },
});
