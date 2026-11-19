import { CardPost } from '@/molecules';
import { Container } from 'root/styles';
import { CSSList } from './styles';

interface PostItem {
  cover: string;
  title: string;
  description: string;
  slug: string;
}

interface ListPostsProps {
  data: PostItem[];
}

const ListPosts = ({ data }: ListPostsProps) => {
  return (
    <CSSList>
      <Container>
        {data.map(({ cover, title, description, slug }) => (
          <CardPost
            key={slug}
            cover={cover}
            title={title}
            description={description}
            href={slug}
          />
        ))}
      </Container>
    </CSSList>
  );
};

export default ListPosts;
