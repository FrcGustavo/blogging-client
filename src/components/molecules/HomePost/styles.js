import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const CSSCardContainer = styled('section')({
  padding: '28px',

  '@media screen and (min-width: 680px)': {
    display: 'flex',
    justifyContent: 'center',
  },
});

export const CSSCard = styled('article')({
  width: '100%',
  maxWidth: '290px',
  borderRadius: '7px',
  margin: 'auto',
  boxShadow: '0 0 7px rgba(0, 0, 0, 0.14)',
  backgroundColor: '#fff',
  overflow: 'hidden',

  '& > div:last-child': {
    padding: '14px',
  },

  '& img': {
    width: '100%',
    objectFit: 'cover',
  },

  '& h3': {
    marginBottom: '14px',
    fontSize: '21px',
    fontWeight: 'bold',
  },

  '& p': {
    marginBottom: '14px',
  },

  '@media screen and (min-width: 680px)': {
    display: 'grid',
    gridTemplateColumns: '318px 1fr',
    gap: '21px',
    width: '100%',
    maxWidth: '1000px',
    height: '218px',

    '& div:first-of-type': {
      height: '100%',
      padding: '14px',
      overflow: 'hidden',
    },

    '& img': {
      width: '290px',
      borderRadius: '7px',
    },
  },
});
