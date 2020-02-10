import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';

import { Theme } from '../components/styles/Theme';

class BorodatyWebsite extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default BorodatyWebsite;