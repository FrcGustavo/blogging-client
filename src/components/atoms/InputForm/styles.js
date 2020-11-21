import styled from 'styled-components';

export const CSSLabel = styled.label`
font-weight: 700;
line-height: 21px;
opacity: 0.7;
margin-bottom: 7px;
`;

export const CSSInput = styled.div`
display: flex;
border-radius: 7px;
border: solid 1px rgba(0, 0, 0, 0.3);
box-shadow: 0 0 2px rgba(0, 0, 0, 0.07);
overflow: hidden;

span {
  display: inline-flex;
  padding: 12px;
  background-color: rgba(0, 0, 0, 0.07);
  color: rgba(0, 0, 0, 0.5);
}

span + input {
  width: 100%;
}

input, textarea {
  display: inline-flex;
  width: 100%;
  padding: 12px;
  outline: none;
  resize: none;
}
`;