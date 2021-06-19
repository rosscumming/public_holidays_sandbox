import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`


html, body{
  box-sizing: border-box;
  background-color:#fafafa;
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
}
`;

const theme = {
  fontColour: {
    dark: '#1f1f1f',
    grey: '#3f3f3f',
    lightGrey: '#707070',
    yellow: '#fee06a',
    white: '#ffffff',
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
