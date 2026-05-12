import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { LayoutBlog } from '@/templates';
import { Footer } from '@/molecules';
import { Post } from '@/organisms';
import { PostsService } from 'root/services';
import { Container, CSSMain } from 'root/styles';

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = await PostsService.getAll();
  const paths = posts.map(({ slug }) => ({ params: { slug } }));
  return { paths, fallback: false };
};

interface PostPageProps {
  post: {
    title: string;
    meta_description: string;
    cover: string;
    html: string;
  };
}

export const getStaticProps: GetStaticProps<PostPageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const post = await PostsService.getOne({ slug });
  return {
    props: { post },
  };
};

const PagePost: NextPage<PostPageProps> = ({ post }) => {
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
