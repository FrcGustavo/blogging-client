import styled from 'styled-components';

export const CSSEditor = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
`;

export const CSSMarkdown = styled.div`
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  height: 100%;

  textarea {
    display: block;
    width: 100%;
    height: 100%;
    padding: 28px;
    resize: none;
    outline: none;
    line-height: 21px;
  }
`;

export const CSSHeader = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  padding: 14px 28px;
  background-color: ${(props) => props.theme.secondary};

  button,
  a {
    display: inline-block;
    border-radius: 7px;
    padding: 7px 14px;
    margin-right: 14px;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.14);
    background-color: #fff;
    // background-color: ${(props) => props.theme.primarylight};
    color: #fff;
    color: ${(props) => props.theme.primarylight};
    cursor: pointer;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export const CSSHtml = styled.div`
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  height: 100%;
  background-color: rgba(75, 90, 138, 0.14);
  overflow-y: auto;

  div {
    height: 100%;
    padding: 28px;
    overflow-y: auto;
  }
`;
