import { Provider } from 'next-auth/client';
import { ThemeProvider } from 'styled-components';
import { AppProvider } from 'store/contexts';
import { GlobalStyles, theme } from 'root/styles';

const MyApp = ({ Component, pageProps }) => {
  const appState = {
    isMenuOpen: false,
    posts: false,
    editingPost: false,
  };

  return (
    <Provider session={pageProps.session}>
      <AppProvider initialValue={appState}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </AppProvider>
    </Provider>
  );
};

export default MyApp;
