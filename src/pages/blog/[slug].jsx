import Head from 'next/head'
import { LayoutBlog } from '@/templates';
import { Footer } from '@/molecules';
import { Post } from '@/organisms';
import { PostsService } from 'root/services';
import { Container, CSSMain } from 'root/styles';

export const getStaticPaths = async () => {
  const { posts } = await PostsService.getAll();
  const paths = posts.map(({ slug }) => [
    { params: { slug }, locale: 'es' },
    { params: { slug }, locale: 'en' },
  ]).flat();
  return { paths, fallback: false };
}

export const getStaticProps = async ({ params, locale }) => {
  const { slug } = params
  const post = await PostsService.getOne(slug, locale);
  return {
    props: { post },
  }
}

const PagePost = ({ post }) => {
  return (
    <LayoutBlog>
      <Head>
        <title>{post.title}</title>
				<meta name="description" content={post.description} />
				<meta name="keywords" content={post.keywords} />
      </Head>
      <CSSMain>
        <Container>
          <Post
            cover={post.cover}
            title={post.title}
            body={post.body}
          />
        </Container>
        <Footer />
      </CSSMain>
		</LayoutBlog>
  );
}
 export default PagePost;
 