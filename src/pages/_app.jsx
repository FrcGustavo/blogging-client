// import { ThemeProvider } from 'styled-components';
// import { GlobalStyles, theme } from 'root/styles';
import '../styles/globals.css';

// const MyApp = ({ Component, pageProps }) => {
//   return (
//     <ThemeProvider theme={theme}>
//       <GlobalStyles />
//       <Component {...pageProps} />
//     </ThemeProvider>
//   );
// };

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}


export default MyApp;
