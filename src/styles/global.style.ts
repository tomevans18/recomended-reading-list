import { createGlobalStyle } from 'styled-components';
import { rgba } from 'polished';
import theme from '@styles/theme';
import reset from 'styled-reset';

const {
  colors: { black, white, text }
} = theme;

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,700,900&display=swap");

  ${reset}

  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  html {
    font: normal 100% / 1.65 serif;
  }

  body {
    hyphens: auto;
    word-wrap: break-word;
    line-height: 1.3;
    color: ${text};
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background: #fafafa;
    padding: 0;
    margin: 0;
  }

  #__next {
    display: flex;
    min-height: 100vh;
  }

  div,
  section,
  article,
  aside,
  main {
    > h1,
    > h2,
    > h3,
    > h4,
    > h5,
    > h6 {
      margin-top: 0;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-rendering: optimizeLegibility;
    line-height: 1;
    font-weight: bold;
    margin-top: 0.625em;
    color: ${black};
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 2.2rem;
    margin-bottom: 1.8rem;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 1.6rem;
  }

  h4 {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
  }

  h5 {
    font-size: 1.5rem;

  }

  h6 {
    font-size: 1.3rem;
  }

  p {
    line-height: 1.5;
    font-size: 1em;
  }

  p,
  ul,
  ol,
  dl,
  pre {
    line-height: 1.5;
    margin-bottom: 0.625em;
  }

  small {
    font-size: 80%;
    line-height: 1.1;
  }

  a {
    color: ${text};
    text-decoration: none;
  }

  strong,
  b {
    font-weight: bold;
  }

  em {
    font-style: italic;
  }

  sub,
  sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
  }

  sup {
    top: -0.5em;
  }

  sub {
    bottom: -0.5em;
  }

  img {
    width: auto;
    max-width: 100%;
    height: auto;
  }

  ul {
    list-style-type: disc;

    ul {
      margin: 0;
    }

    ul > li {
      margin-left: 1.5rem;
    }
  }

  ul,
  ol,
  dl {
    margin-left: 2.5rem;
    font-size: 1em;
    p {
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  ul ul,
  ol ul {
    list-style-type: circle;
  }

  ol ol ul,
  ol ul ul,
  ul ol ul,
  ul ul ul {
    list-style-type: square;
  }

  ol {
    list-style-type: decimal;
  }

  dl {
    margin-left: 0;
    dt {
      font-weight: bold;
      margin-top: 0.625em;

      &:first-child {
        margin-top: 0;
      }
    }
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-display: auto;
    line-height: 1.25;
  }

  hr {
    border: 0;
    height: 0;
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    margin: 0 0 1.25em 0;
  }

  blockquote {
    position: relative;
    padding: 0.75rem 1.5rem 0.75rem 1rem;
    font-size: 1.25rem;
    border-left: 0.5rem solid ${black};
    margin: 0 0 1.25em;

    &::before {
      content: '"';
      position: absolute;
      top: 1.45rem;
      left: 0.5rem;
      color: ${black};
      font-size: 4rem;
      line-height: 0.1rem;
      margin-right: 0;
      vertical-align: -0.4rem;
    }

    & p {
      display: inline-block;

      &:first-child {
        text-indent: 1.75rem;
      }

      &:last-child {
        margin: 0 0 0.5rem;
      }
    }
  }

  pre {
    position: relative;
    background: ${text};
    border: 1px solid ${text};
    border-left: 3px solid ${text};
    color: ${text};
    page-break-inside: avoid;
    font-family: monospace;
    font-size: 1em;
    line-height: 1.6;
    max-width: 100%;
    padding: 1em 1.5em;
    display: block;
    word-wrap: break-word;

    code {
      border: none;
      padding: 0;
      font-size: inherit;
      white-space: pre-wrap;
      background-color: transparent;
      color: ${text};
    }
  }

  code {
    background: ${text};
    border: 1px solid ${text};
    padding: 0.1em 0.5em 0.2em;
    color: ${text};
    font-family: monospace;

    &::selection {
      background: #b3d4fc;
    }
  }

  mark {
    color: inherit;
    background: ${rgba(text, 0.5)};
    padding: 0 0.2em;
  }

  abbr {
    position: relative;
    &:hover {
      &::after {
        content: attr(title);
        position: absolute;
        white-space: nowrap;
        padding: 0.25rem 0.5rem;
        background: ${white};
        font-size: 0.75rem;
        border: 1px solid ${text};
        box-shadow: 4px 4px 20px -10px ${rgba(text, 0.75)};
        top: 0;
        left: 50%;
        transform: translate(-50%, calc(-100% - 0.25rem));
      }
    }
  }
`;

export default GlobalStyle;
