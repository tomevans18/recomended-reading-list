import 'styled-components';

const theme = {
  colors: {
    primary: '#0070f3'
  }
} as const;

export type Theme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

export default theme;
