import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const CSSSocialMedia = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 28px)',
  gap: '0 14px',
  justifyContent: 'center',

  '& a': {
    fontSize: 0,
  },

  '& a svg': {
    fontSize: '28px',
    color: '#6ec6ff',
  },

  '@media screen and (min-width: 680px)': {
    justifyContent: 'flex-start',
  },
});

export const CSSProfile = styled('section')({
  width: '100%',
  maxWidth: '1056px',
  margin: 'auto',
  padding: '28px',

  '& > div': {
    width: '100%',
    '&:first-of-type': {
      display: 'flex',
      justifyContent: 'center',
      paddingBottom: '28px',
    },
  },

  '& img': {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
  },

  '& h1, & h2, & p': {
    marginBottom: '14px',
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: '1px',
  },

  '& h1': {
    fontSize: '28px',
  },

  '& h2': {
    fontSize: '21px',
  },

  '& p': {
    fontWeight: 'normal',
  },

  '@media screen and (min-width: 680px)': {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: '28px',
    paddingTop: '56px',

    '& h1, & h2, & p': {
      textAlign: 'left',
    },
  },
});
