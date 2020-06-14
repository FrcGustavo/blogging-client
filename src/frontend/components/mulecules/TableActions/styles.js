import styled, { css } from 'styled-components';

export const Button = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 4.5px;
  background-color: #C63F17;
  cursor: pointer;
  & svg {
    width: 14px;
    height:14px;
    fill: #FFF;
  }
  ${(props) => (props.edit && css`
    background-color: #4B5A8A;
    margin-right: 14px;
  `)}
`;

export const ButtonA = styled.a`
  width: 28px;
  height: 28px;
  border-radius: 4.5px;
  background-color: #C63F17;
  cursor: pointer;
  & svg {
    width: 14px;
    height:14px;
    fill: #FFF;
  }
  ${(props) => (props.edit && css`
    background-color: #4B5A8A;
    margin-right: 14px;
  `)}
`;
