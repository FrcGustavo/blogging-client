import Head from 'next/head';
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import { LayoutBlog } from '@/templates';
import { Footer } from '@/molecules';
import { Post } from '@/organisms';
import { PostsService } from 'root/services';
import type { PostDetail, PostSummary } from 'root/services';
import { Container, CSSMain } from 'root/styles';

type PagePostProps = {
  post: PostDetail;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = await PostsService.getAll();
  const paths = posts.map(({ slug }: PostSummary) => ({ params: { slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<PagePostProps> = async ({
  params,
}) => {
  const slug = typeof params?.slug === 'string' ? params.slug : params?.slug?.[0];
  if (!slug) {
    return {
      notFound: true,
    };
  }

  const post = await PostsService.getOne({ slug });
  return {
    props: { post },
  };
};

const PagePost = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <LayoutBlog>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.meta_description} />
        {/* <meta name="keywords" content={post.keywords} /> */}
      </Head>
      <CSSMain>
        <Container>
          <Post cover={post.cover} title={post.title} body={post.html} />
        </Container>
        <Footer />
      </CSSMain>
    </LayoutBlog>
  );
};
export default PagePost;
