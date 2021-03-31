import styled from 'styled-components';

export const CSSFooter = styled.footer`
  background: linear-gradient(90deg, #1c2237, #4b5a8a);
  padding: 28px;
`;
export const CSSSocialMedia = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 28px);
  gap: 0 14px;

  a svg {
    font-size: 28px;
    color: #6ec6ff;
  }
`;
