import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import Head from 'next/head';
import theme from '@styles/theme';
import fetcher from '@libs/fetcher';
import { SWRConfig } from 'swr';
import 'nprogress/nprogress.css';
import Router from 'next/router';
import NProgress from 'nprogress';
import GlobalStyle from '@styles/global.style';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>Recommended Reading List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GlobalStyle />

      <ThemeProvider theme={theme}>
        <SWRConfig
          value={{
            fetcher
          }}
        >
          {/* NOTE: Spread needed as component props are unknown */}
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </SWRConfig>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
