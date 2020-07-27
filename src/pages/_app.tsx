import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import Head from 'next/head';
import theme from '@styles/theme';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>Book Recommendation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* NOTE: Spread needed as component props are unknown */}
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
