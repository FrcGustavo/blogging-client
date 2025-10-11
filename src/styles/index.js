import React from 'react';
import { GlobalStyles as MuiGlobalStyles } from '@mui/material';
import ContainerBase from '@mui/material/Container';
import Box from '@mui/material/Box';
import {
  createTheme,
  styled,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';
import { indigo, blueGrey, blue, deepOrange } from '@mui/material/colors';

const baseThemeOptions = {
  typography: {
    fontFamily: "'Lato', sans-serif",
    fontSize: 16,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 7,
          textTransform: 'uppercase',
          boxShadow: '0 0 7px rgba(0, 0, 0, 0.14)',
        },
      },
    },
  },
};

const createPaletteTheme = (palette) =>
  createTheme({
    ...baseThemeOptions,
    palette,
  });

// 🟣 Indigo + Deep Orange
export const indigoDeepOrange = {
  light: createPaletteTheme({
    mode: 'light',
    primary: {
      main: indigo[500],
      dark: indigo[900],
      contrastText: '#fff',
    },
    secondary: {
      main: deepOrange[800],
      contrastText: '#fff',
    },
    background: {
      default: '#F7F8FC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#4A5568',
    },
    divider: '#E2E8F0',
  }),
  dark: createPaletteTheme({
    mode: 'dark',
    primary: {
      main: indigo[500],
      dark: indigo[900],
      contrastText: '#fff',
    },
    secondary: {
      main: deepOrange[800],
      contrastText: '#fff',
    },
    background: {
      default: '#0b0f1a',
      paper: '#101522',
    },
    text: {
      primary: '#EAEAEA',
      secondary: '#B0B0B0',
    },
    divider: '#2D3748',
  }),
};

// 🩶 Blue Grey + Deep Orange
export const blueGreyDeepOrange = {
  light: createPaletteTheme({
    mode: 'light',
    primary: {
      main: blueGrey[600],
      dark: blueGrey[900],
      contrastText: '#fff',
    },
    secondary: {
      main: deepOrange[800],
      contrastText: '#fff',
    },
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#4A5568',
    },
    divider: '#E2E8F0',
  }),
  dark: createPaletteTheme({
    mode: 'dark',
    primary: {
      main: blueGrey[600],
      dark: blueGrey[900],
      contrastText: '#fff',
    },
    secondary: {
      main: deepOrange[800],
      contrastText: '#fff',
    },
    background: {
      default: '#0F1416',
      paper: '#1A202C',
    },
    text: {
      primary: '#EAEAEA',
      secondary: '#A8B3B8',
    },
    divider: '#2D3748',
  }),
};

// 🔵 Blue + Deep Orange
export const blueDeepOrange = {
  light: createPaletteTheme({
    mode: 'light',
    primary: {
      main: blue[500],
      dark: blue[900],
      contrastText: '#fff',
    },
    secondary: {
      main: deepOrange[800],
      contrastText: '#fff',
    },
    background: {
      default: '#F5F9FF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#4A5568',
    },
    divider: '#E2E8F0',
  }),
  dark: createPaletteTheme({
    mode: 'dark',
    primary: {
      main: blue[500],
      dark: blue[900],
      contrastText: '#fff',
    },
    secondary: {
      main: deepOrange[800],
      contrastText: '#fff',
    },
    background: {
      default: '#0E1524',
      paper: '#101522',
    },
    text: {
      primary: '#EAEAEA',
      secondary: '#9FB4D0',
    },
    divider: '#2D3748',
  }),
};

export const theme = indigoDeepOrange.light;

const paletteDefinitions = [
  {
    id: 'indigoDeepOrange',
    label: 'Indigo / Deep Orange',
    variants: indigoDeepOrange,
  },
  {
    id: 'blueGreyDeepOrange',
    label: 'Blue Grey / Deep Orange',
    variants: blueGreyDeepOrange,
  },
  {
    id: 'blueDeepOrange',
    label: 'Blue / Deep Orange',
    variants: blueDeepOrange,
  },
];

const ThemePaletteContext = React.createContext({
  paletteId: paletteDefinitions[0].id,
  paletteLabel: paletteDefinitions[0].label,
  cyclePalette: () => {},
  mode: 'light',
  toggleMode: () => {},
});

export const ThemePaletteProvider = ({ children }) => {
  const [paletteIndex, setPaletteIndex] = React.useState(0);
  const [mode, setMode] = React.useState('light');

  const cyclePalette = React.useCallback(() => {
    setPaletteIndex((prev) => (prev + 1) % paletteDefinitions.length);
  }, []);

  const toggleMode = React.useCallback(() => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const value = React.useMemo(() => {
    const current = paletteDefinitions[paletteIndex];
    return {
      paletteId: current.id,
      paletteLabel: current.label,
      cyclePalette,
      mode,
      toggleMode,
    };
  }, [paletteIndex, cyclePalette, mode, toggleMode]);

  const themePalette = React.useMemo(
    () => paletteDefinitions[paletteIndex].variants[mode],
    [paletteIndex, mode]
  );

  return (
    <ThemePaletteContext.Provider value={value}>
      <MuiThemeProvider theme={themePalette}>{children}</MuiThemeProvider>
    </ThemePaletteContext.Provider>
  );
};

export const useThemePalette = () => React.useContext(ThemePaletteContext);

export const GlobalStyles = () => (
  <MuiGlobalStyles
    styles={{
      '*': {
        border: 0,
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        fontFamily: "'Lato', sans-serif",
        fontSize: '16px',
        fontWeight: 'normal',
      },
      body: {
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      },
      '#__next': {
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      },
    }}
  />
);

export const Container = styled(ContainerBase)(({ theme: muiTheme }) => ({
  width: '100%',
  maxWidth: 1040,
  margin: '0 auto',
  paddingLeft: muiTheme.spacing(4),
  paddingRight: muiTheme.spacing(4),
  [muiTheme.breakpoints.down('sm')]: {
    paddingLeft: muiTheme.spacing(3),
    paddingRight: muiTheme.spacing(3),
  },
}));

const MainRoot = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'degraded',
})(({ theme: muiTheme, degraded }) => ({
  minHeight: 'calc(100vh - 60px)',
  background: degraded
    ? `linear-gradient(90deg, ${muiTheme.palette.primary.dark}, ${muiTheme.palette.primary.light})`
    : 'rgba(75, 90, 138, 0.14)',
  width: '100%',
}));

export const CSSMain = (props) => <MainRoot component="main" {...props} />;
