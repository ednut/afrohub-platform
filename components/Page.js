import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Meta from './Meta';
import NProgress from "nprogress";
import Router from "next/router";

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const theme = {
  brandColor: '#3188DD',
  black: '#051441',
  white: '#ffffff',
  formBG: '#E6ECF0',
  titleFont: '2.5rem',
  captionFont: '1.6rem'
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