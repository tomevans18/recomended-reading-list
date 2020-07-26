import { ReactElement, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { render, RenderResult, RenderOptions } from '@testing-library/react';
import theme from '@styles/theme';

const Providers = ({ children }: { children?: ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const customRender = (ui: ReactElement, options: Omit<RenderOptions, 'queries'>): RenderResult =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
