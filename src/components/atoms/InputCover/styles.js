import styled from 'styled-components';

export const CSSLabel = styled.label`
font-weight: 700;
line-height: 21px;
opacity: 0.7;
`;

export const CSSInputCover = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
height: 150px;
border: dashed 2px rgba(0, 0, 0, 0.3);
border-radius: 7px;
margin-top: 14px;
overflow: hidden;

img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
}

> div {
  position: relative;
  width: auto;
  text-align: center;

  svg {
    font-size: 42px;
    opacity: 1;
  }

  p {
    line-height: 21px;
    font-size: 14px;
  }

  input {
    display: none;
  }
}

`;