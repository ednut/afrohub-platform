import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Meta from './Meta';

const theme = {
  headerHeight: '80px',
  brandColor: '#3188DD',
  black: '#051441',
  white: '#ffffff',
  footerColor: '#001329'
};


const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Roboto', sans-serif;
    color: #051441;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }

  .hide-on-mobile{
      display: inline-block!important;
      @media (max-width: 991px){
          display: none!important;
      }
  }
  .hide-on-desktop{
      display: none!important;
      @media (max-width: 991px){
          display: inline-block!important;
      }
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
          <Meta />
          <GlobalStyle />
          {this.props.children}
      </ThemeProvider>
    );
  }
}

export default Page;