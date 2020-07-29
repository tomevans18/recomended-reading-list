import { css } from 'styled-components';

const breakpoint = 940;

const padding = css`
  padding: ${({ theme }) => `${theme.component.spacing}rem`} 8vw;
  transition: padding 0.2s ease-in-out;

  @media (min-width: ${breakpoint / 2}px) {
    padding: ${({ theme }) => `${theme.component.spacing}rem`} 10vw;
  }

  @media (min-width: ${breakpoint}px) {
    padding: ${({ theme }) => `${theme.component.spacing}rem`} 4rem;
  }
`;

export default padding;
