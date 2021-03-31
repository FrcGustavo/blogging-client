import styled from 'styled-components';

export const CSSMetadata = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 40px;
  background-color: #e6e8ee;
  overflow-y: auto;

  > div {
    width: 70%;
    border-radius: 7px;
    padding: 28px;
    margin: auto;
    background-color: #fff;

    > div {
      margin-bottom: 28px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;
