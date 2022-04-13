import styled from 'styled-components';

export const CSSButton = styled.button`
  border-radius: 7px;
  padding: 7px 14px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.14);
  background-color: ${(props) => props.theme.secondary};
  color: #fff;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
`;

export const CSSButtonLink = styled.a`
  display: inline-block;
  border-radius: 7px;
  padding: 7px 14px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.14);
  background-color: ${(props) => props.theme.secondary};
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  outline: none;
  cursor: pointer;
`;
