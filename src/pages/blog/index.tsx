import Head from 'next/head';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { LayoutBlog } from '@/templates';
import { ListPosts } from '@/organisms';
import { Footer } from '@/molecules';
import { PostsService } from 'root/services';
import type { PostSummary } from 'root/services';
import { CSSMain } from 'root/styles';

const MetaData = {
  description: `Me encanta experimentar con nuevas herramientas y frameworks. Me gusta crear soluciones usando mis herramientas de desarrollo. Tengo experiencia con API Rest, API GraphQL, Socket IO, Single Page App, Server side render y más.`,
  keywords: 'Full, Stack, Software, Developer, MERN, FrcGustavo,',
};

type BlogProps = {
  posts: PostSummary[];
};

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const { posts } = await PostsService.getAll();

  return {
    props: {
      posts,
    },
  };
};

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <LayoutBlog>
      <Head>
        <title>FrcGustavo | Blog</title>
        <meta name="description" content={MetaData.description} />
        <meta name="keywords" content={MetaData.keywords} />
      </Head>
      <CSSMain>
        <ListPosts data={posts} />
        <Footer />
      </CSSMain>
    </LayoutBlog>
  );
};
export default Blog;
