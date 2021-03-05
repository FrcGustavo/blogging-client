import App from 'next/app';
import cookies from 'next-cookies';
import { ThemeProvider } from 'styled-components';
import { AppProvider } from 'store/contexts';
import { GlobalStyles, theme } from 'root/styles';

const MyApp = ({ Component, pageProps, user }) => {
  const appState = {
    user,
    isMenuOpen: false,
    posts: false,
    editingPost: false
  };

  return (
    <AppProvider initialValue={appState}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
    </AppProvider>
  );
}

MyApp.getInitialProps = async function({ Component, ctx }) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  const { user } = cookies(ctx);
    
  return { ...pageProps, user };
}

export default MyApp;
