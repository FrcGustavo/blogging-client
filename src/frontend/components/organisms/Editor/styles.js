import styled from 'styled-components';

export const EditorWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  border: solid 1px #ddd;
  border-radius: 7px;
  overflow-y: auto;
`;

export const OutputText = styled.div`
  padding-top: 28px;
`;
