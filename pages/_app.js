import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';

import Layout from '../components/universal/Layout';
import { Theme } from '../components/styles/Theme';

class BorodatyWebsite extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={Theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    )
  }
}

export default BorodatyWebsite;