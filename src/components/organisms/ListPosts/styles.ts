import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const CSSList = styled(Box)({
  padding: '28px',

  '& > div': {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto',
    gap: '56px',
  },

  '& > div article': {
    justifySelf: 'center',
  },

  '@media screen and (min-width: 680px)': {
    '& > div': {
      gridTemplateColumns: '1fr 1fr',
    },
  },

  '@media screen and (min-width: 1000px)': {
    '& > div': {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
    '& article:nth-of-type(3n+1)': {
      justifySelf: 'start',
    },
    '& article:nth-of-type(3n+2)': {
      justifySelf: 'center',
    },
    '& article:nth-of-type(3n)': {
      justifySelf: 'end',
    },
  },
});
