import styled, { createGlobalStyle } from 'styled-components';

export const theme = {
  primaryDark: '#1C2237',
  primarylight: '#4B5A8A',
  secondary: '#C63F17',
};

export const GlobalStyles = createGlobalStyle`
* {
  border: 0;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  font-weight: normal;
}

body, #__next {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
`;

export const CSSMain = styled.main`
  min-height: calc(100vh - 60px);
  background: ${(props) =>
    props.degraded
      ? `linear-gradient(90deg, ${props.theme.primaryDark}, ${props.theme.primarylight})`
      : 'rgba(75, 90, 138, 0.14);'};
`;

export const CSSPost = styled.section`
  padding: 14px 28px;
  overflow: hidden;

  a {
    color: #4183c4;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  p,
  blockquote,
  ul,
  ol,
  dl,
  table,
  pre {
    margin: 14px 0;
  }

  pre {
    border-radius: 4.5px;
    padding: 14px;
    overflow: auto;
    background-color: #f6f8fa;
    line-height: 1.45;
    code {
      display: block;
      max-width: auto;
      padding: 0;
      margin: 0;
      overflow: visible;
      line-height: inherit;
      word-wrap: normal;
      background-color: initial;
      border: 0;
    }
  }

  ul,
  ol {
    padding-left: 30px;
  }
  h2 {
    border-bottom: 1px solid #eee;
    color: #000;
    font-size: 2em;
  }
  h3 {
    font-size: 1.5em;
  }
  h4 {
    font-size: 1.2em;
  }
  h5 {
    font-size: 1em;
  }
  h6 {
    color: #777;
    font-size: 1em;
  }
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
    line-height: 1.7;
    margin: 1em 0 15px 0;
  }
  h2 + p,
  h3 + p {
    margin-top: 14px;
  }
  code {
    background-color: #f8f8f8;
    border-radius: 4.5px;
    border: 1px solid #ddd;
    font-family: Consolas, 'Liberation Mono', Courier, monospace;
    font-size: 12px;
    margin: 0 2px;
    padding: 0 5px;
    white-space: pre;
  }
`;
