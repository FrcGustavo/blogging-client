import { Container, Ring } from './styles';

const Loading = ({ secondary }) => {
  return (
    <Container>
      <Ring secondary={secondary}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Ring>
    </Container>
  );
};

export default Loading;
