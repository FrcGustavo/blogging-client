import * as React from 'react';
import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import type { EmotionCache } from '@emotion/cache';
import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import createEmotionCache from 'root/styles/createEmotionCache';
import { GlobalStyles, ThemePaletteProvider } from 'root/styles';

const clientSideEmotionCache = createEmotionCache();

type MyAppProps = AppProps & {
  emotionCache?: EmotionCache;
};

const MyApp = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProps) => {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemePaletteProvider>
        <CssBaseline />
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemePaletteProvider>
    </CacheProvider>
  );
};

export default MyApp;
