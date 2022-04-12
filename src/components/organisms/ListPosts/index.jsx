import { CardPost } from '@/molecules';
import { Container } from 'root/styles';
import { CSSList } from './styles';

const ListPosts = ({ data }) => {
  return (
    <CSSList>
      <Container>
        {data.map(({ feature_image, title, meta_description, slug }) => (
          <CardPost
            key={slug}
            cover={feature_image}
            title={title}
            description={meta_description}
            href={slug}
          />
        ))}
      </Container>
    </CSSList>
  );
};

export default ListPosts;
