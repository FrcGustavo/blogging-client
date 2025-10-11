import * as React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  type DocumentContext,
  type DocumentInitialProps,
} from 'next/document';
import type { EmotionCache } from '@emotion/cache';
import type { AppProps } from 'next/app';
import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from 'root/styles/createEmotionCache';
import { theme } from 'root/styles';

type AppPropsWithEmotionCache = AppProps & {
  emotionCache: EmotionCache;
};

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="es-mx">
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icons/bloging-logo-192.png" />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <div id="modal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (
  ctx: DocumentContext,
): Promise<DocumentInitialProps> => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp:
        (App: React.ComponentType<AppPropsWithEmotionCache>) =>
        function EnhanceApp(props: AppProps) {
          return <App {...props} emotionCache={cache} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      ...emotionStyleTags,
    ],
  };
};
