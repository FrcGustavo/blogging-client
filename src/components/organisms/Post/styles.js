import styled from 'styled-components';

export const CSSPostContainer = styled.article`
  > div {
    background-color: #fff;
  }

  @media screen and (min-width: 1000px) {
    padding: 56px 0;
    > div {
      border-radius: 7px;
      box-shadow: 0 0 7px rgba(0, 0, 0, 0.14);
      overflow: hidden;
    }
  }
`;

export const CSSImage = styled.section`
  height: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CSSTitle = styled.section`
  padding: 14px 28px;
  h1 {
    border-bottom: solid 1px gray;
    padding-bottom: 14px;
    font-size: 24.5px;
    font-weight: bold;
  }

  @media screen and (min-width: 680px) {
    h1 {
      font-size: 28px;
    }
  }

  @media screen and (min-width: 1000px) {
    h1 {
      font-size: 35px;
    }
  }
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
    font-size: 1.75em;
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
    font-size: 14px;
    margin: 0 2px;
    padding: 0 5px;
    white-space: pre;
  }

  img {
    max-width: 100%;
  }

  @media screen and (min-width: 680px) {
    h2 {
      font-size: 2em;
    }
  }
`;
