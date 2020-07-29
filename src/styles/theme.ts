import 'styled-components';

const theme = {
  colors: {
    black: '#282828',
    grey: '#dfdfdf',
    white: '#f1f3f5',
    text: '#525252'
  },
  component: {
    spacing: 2
  }
} as const;

export type Theme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

export default theme;
