import { ReactElement, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { render, RenderResult, RenderOptions } from '@testing-library/react';
import theme from '@styles/theme';
import { SWRConfig } from 'swr';
import fetcher from '@libs/fetcher';

const Providers = ({ children }: { children?: ReactNode }) => (
  <ThemeProvider theme={theme}>
    <SWRConfig
      value={{
        fetcher,
        dedupingInterval: 0
      }}
    >
      {children}
    </SWRConfig>
  </ThemeProvider>
);

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>): RenderResult =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
