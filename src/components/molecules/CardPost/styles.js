import styled from 'styled-components';

export const CSSArticle = styled.article`
  width: 100%;
  max-width: 290px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.14);
  border-radius: 7px;
  background-color: #fff;
  overflow: hidden;
`;

export const CSSInfo = styled.div`
  padding: 14px;

  h2 {
    margin-bottom: 14px;
    font-size: 21px;
    font-weight: bold;
  }

  p {
    margin-bottom: 14px;
  }
`;

export const CSSImage = styled.div`
  height: 150px;
  overflow: hidden;

  img {
    width: 100%;
  }
`;
