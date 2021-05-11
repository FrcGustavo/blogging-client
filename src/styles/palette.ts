type CommonColors = {
  black: '#000';
  white: '#FFF';
};

type PaletteType = 'light' | 'dark';

type PaletteColor = {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
};

interface Palette {
  common: CommonColors;
  type: PaletteType;
  primary: PaletteColor;
  secondary: PaletteColor;
  error?: PaletteColor;
  warning?: PaletteColor;
  info?: PaletteColor;
  success?: PaletteColor;
}

const palette: Palette = {
  common: {
    black: '#000',
    white: '#FFF',
  },
  type: 'light',
  primary: {
    light: '#7a87ba',
    main: '#4b5a8a',
    dark: '#1d315d',
    contrastText: '#ffffff',
  },
  secondary: {
    light: '#ff7043',
    main: '#c63f17',
    dark: '#8e0000',
    contrastText: '#ffffff',
  },
};

export default palette;
