import type { ReactNode } from 'react';
import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from 'root/styles';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#4b5a8a' },
    ],
    links: [
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'apple-touch-icon', href: '/icons/bloging-logo-192.png' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;500;700&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: () => <p>Página no encontrada.</p>,
});

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="es-mx">
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
          <div id="modal" />
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  );
}
