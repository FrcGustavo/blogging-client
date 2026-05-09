import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const CSSPostCard = styled(Box)({
  backgroundColor: '#fff',

  '@media screen and (min-width: 1000px)': {
    borderRadius: '7px',
    boxShadow: '0 0 7px rgba(0, 0, 0, 0.14)',
    overflow: 'hidden',
  },
});

export const CSSPostContainer = styled('article')({
  '@media screen and (min-width: 1000px)': {
    padding: '64px 0',
  },
});

export const CSSImage = styled('section')({
  position: 'relative',
  height: '200px',

  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

export const CSSPostContent = styled(Box)({
  paddingLeft: '32px',
  paddingRight: '32px',
});

export const CSSTitle = styled('section')({
  maxWidth: '700px',
  margin: 'auto',
  padding: '14px 0',

  '& h1': {
    borderBottom: 'solid 1px gray',
    paddingBottom: '14px',
    fontSize: '24.5px',
    fontWeight: 'bold',
  },

  '@media screen and (min-width: 680px)': {
    '& h1': {
      fontSize: '28px',
    },
  },

  '@media screen and (min-width: 1000px)': {
    '& h1': {
      fontSize: '35px',
    },
  },
});

export const CSSPost = styled('section')({
  maxWidth: '700px',
  margin: 'auto',
  overflow: 'hidden',

  '& a': {
    color: '#4183c4',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },

  '& p, & strong, & a': {
    fontSize: '18px',
    letterSpacing: '0.25px',
    lineHeight: 1.5,
  },

  '& strong': {
    fontWeight: 700,
  },

  '& p, & blockquote, & ul, & ol, & dl, & table, & pre': {
    margin: '14px 0',
  },

  '& p': {
    marginTop: 0,
    marginBottom: '30px',
  },

  '& pre': {
    borderRadius: '4.5px',
    padding: '14px',
    overflow: 'auto',
    backgroundColor: '#f6f8fa',
    lineHeight: 1.45,

    '& code': {
      display: 'block',
      maxWidth: 'auto',
      padding: 0,
      margin: 0,
      overflow: 'visible',
      lineHeight: 'inherit',
      wordWrap: 'normal',
      backgroundColor: 'initial',
      border: 0,
    },
  },

  '& ul, & ol': {
    paddingLeft: '30px',
  },

  '& h2': {
    borderBottom: '1px solid #eee',
    color: '#000',
    fontSize: '1.75em',
  },

  '& h3': {
    fontSize: '1.5em',
  },

  '& h4': {
    fontSize: '1.2em',
  },

  '& h5': {
    fontSize: '1em',
  },

  '& h6': {
    color: '#777',
    fontSize: '1em',
  },

  '& h2, & h3, & h4, & h5, & h6': {
    fontWeight: 'bold',
    lineHeight: 1.7,
    margin: '1em 0 15px 0',
  },

  '& h2 + p, & h3 + p': {
    marginTop: '14px',
  },

  '& code': {
    backgroundColor: '#f8f8f8',
    borderRadius: '4.5px',
    border: '1px solid #ddd',
    fontFamily: "Consolas, 'Liberation Mono', Courier, monospace",
    fontSize: '14px',
    margin: '0 2px',
    padding: '0 5px',
    whiteSpace: 'pre',
  },

  '& img': {
    maxWidth: '100%',
    height: 'auto',
  },

  '@media screen and (min-width: 680px)': {
    '& h2': {
      fontSize: '2em',
    },
    '& p, & strong, & a': {
      fontSize: '20px',
    },
  },

  '@media screen and (min-width: 1000px)': {
    paddingBottom: '32px',
  },
});
