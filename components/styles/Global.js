import { createGlobalStyle } from 'styled-components';

import { Theme } from './Theme';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: ${Theme.fonts.size};
  }
`;