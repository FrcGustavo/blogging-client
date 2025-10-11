import Image from 'next/image';
import NextLink from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { alpha, darken } from '@mui/material/styles';
import { useThemePalette } from 'root/styles';

const navButtonSx = {
  borderRadius: '5px',
  paddingY: 0.875,
  paddingX: 1.75,
  backgroundColor: (theme) => alpha(theme.palette.secondary.main, 0.9),
  color: (theme) => theme.palette.secondary.contrastText,
  boxShadow: '0 0 7px rgba(0, 0, 0, 0.14)',
  '&:hover': {
    backgroundColor: (theme) => darken(theme.palette.secondary.main, 0.2),
  },
};

const Header = ({ shadow }) => {
  const { cyclePalette, paletteLabel, mode, toggleMode } = useThemePalette();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundImage: (theme) =>
          `linear-gradient(90deg, ${theme.palette.primary.dark}, ${theme.palette.primary.light})`,
        boxShadow: shadow ? '0 0 7px rgba(0, 0, 0, 0.14)' : 'none',
        paddingX: { xs: 4, md: 8 },
      }}
    >
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          margin: '0 auto',
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            justifyContent: 'space-between',
            minHeight: 60,
          }}
        >
          <Box
            component={NextLink}
            href="/"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            <Image
              src="/icons/bloging-logo-192.png"
              width={40}
              height={40}
              alt="blogging logo"
            />
          </Box>
          <Stack direction="row" spacing={2} alignItems="center">
            <Button component={NextLink} href="/" sx={navButtonSx}>
              Home
            </Button>
            <Button component={NextLink} href="/blog" sx={navButtonSx}>
              Blog
            </Button>
            <Button onClick={cyclePalette} sx={navButtonSx}>
              Paleta: {paletteLabel}
            </Button>
            <Button onClick={toggleMode} sx={navButtonSx}>
              Tema: {mode === 'light' ? 'Claro' : 'Oscuro'}
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
