import { Post } from '@/organisms';
import { LayoutBlog } from '@/templates';
import { PostsService } from 'root/services';
import { Container, CSSMain } from 'root/styles';

export const getServerSideProps = async (context) => {
  const { slug } = context.query;
  if (slug === 'favicon.ico') {
    return { props: {} };
  }
  const post = await PostsService.getOne(slug);
  return {
    props: { post },
  }
}

const PagePost = ({ post }) => {
  return (
    <LayoutBlog>
      <CSSMain>
        <Container>
        <Post
          cover={post.cover}
          title={post.title}
          body={post.body}
        />
        </Container>
      </CSSMain>
		</LayoutBlog>
  );
}
 export default PagePost;
 