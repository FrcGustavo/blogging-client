import React from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from 'root/styles';
import createEmotionCache from 'root/lib/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

const MyApp = ({ Component, pageProps, emotionCache = clientSideEmotionCache }) => {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
