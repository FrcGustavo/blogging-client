import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-column: 1 / 3;
`;

export const Input = styled.input`
  background-color: #ddd;
  padding: 7px 14px;
  border-radius: 7px;
  cursor: pointer;

  &:first-child {
    margin-right: 14px;
  }
`;

export const Label = styled.label`
  background-color: #ddd;
  padding: 7px 14px;
  border-radius: 7px;
  cursor: pointer;

  input {
    display: none;
  }
`;
