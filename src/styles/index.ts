import { createTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const theme = createTheme({
  palette: {
    primary: {
      dark: '#1C2237',
      main: '#4B5A8A',
      light: '#6B7AAA',
    },
    secondary: {
      main: '#C63F17',
    },
  },
  typography: {
    fontFamily: "'Lato', sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        * {
          border: 0;
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          font-family: 'Lato', sans-serif;
          font-size: 16px;
          font-weight: normal;
        }
        body, #__next {
          width: 100vw;
          height: 100vh;
          overflow: hidden;
        }
      `,
    },
  },
});

export const Container = styled(Box)({
  width: '100%',
  maxWidth: '1040px',
  margin: 'auto',
});

interface CSSMainProps {
  degraded?: boolean;
}

export const CSSMain = styled('main', {
  shouldForwardProp: (prop) => prop !== 'degraded',
})<CSSMainProps>(({ theme, degraded }) => ({
  minHeight: 'calc(100vh - 60px)',
  background: degraded
    ? `linear-gradient(90deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`
    : 'rgba(75, 90, 138, 0.14)',
}));

