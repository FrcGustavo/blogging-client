import styled from 'styled-components';

export const Container = styled.div`
  display: ${(props) => (props.display ? 'block' : 'grid')};
  grid-template-rows: 45px 1fr;
  gap: 28px;
  width: 100%;
  height: 100%;
  padding: 28px;
  border-radius: 7px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.16);
  overflow:hidden;
`;
