import styled from 'styled-components';

export const CSSContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 32px;
  background-color: ${(props) => props.theme.primaryDark};
  overflow: hidden;

  form div {
    margin-bottom: 21px;
  }
`;

export const CSSCardContainer = styled.main`
  width: 100%;
  max-width: 400px;
  border-radius: 7px;
  padding: 14px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.14);
  background-color: #fff;
`;

export const CSSTitle = styled.p`
  margin-bottom: 21px;
  text-align: center;
  font-size: 28px;
  color: ${(props) => props.theme.primaryDark};
`;

export const CSSButton = styled.button`
  display: inline-block;
  border-radius: 7px;
  padding: 7px 14px;
  margin-right: 14px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.14);
  background-color: #4b5a8a;
  color: #fff;
  cursor: pointer;
  outline: none;
`;
