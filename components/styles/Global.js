import { createGlobalStyle } from 'styled-components';

import { Theme } from './Theme';

export const GlobalStyle = createGlobalStyle`
  
  @font-face {
    font-family: Muli;
    src: url('/assets/fonts/Muli-Regular.ttf') format('truetype');
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: Muli;
    src: url('/assets/fonts/Muli-Light.ttf') format('truetype');
    font-weight: 300;
    font-display: swap;
  }

  @font-face {
    font-family: Muli;
    src: url('/assets/fonts/Muli-Bold.ttf') format('truetype');
    font-weight: 700;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: ${Theme.fonts.size};
    font-weight: ${Theme.fonts.weight};
    font-family: ${Theme.fonts.family};
  }

  body {
    padding: 15px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;