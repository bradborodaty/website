import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Navigation from './Navigation';
import Footer from './Footer';

const Wrapper = styled.div`
  display: flex;
`;

function Layout({ children }) {
    return (
      <>
        <Head>
          <title>Brad Borodaty</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
          <meta charSet="utf-8"/>
        </Head>
        <Wrapper>
          <Navigation />
          {children}
          {/* <Footer /> */}
        </Wrapper>
      </>
    );
}

export default Layout;