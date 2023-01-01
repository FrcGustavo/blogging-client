import Head from 'next/head';
import { LayoutBlog } from '@/templates';
import { ListPosts } from '@/organisms';
import { Footer } from '@/molecules';
import { PostsService } from 'root/services';
import styles from './index.module.css'

const MetaData = {
  description: `Me encanta experimentar con nuevas herramientas y frameworks. Me gusta crear soluciones usando mis herramientas de desarrollo. Tengo experiencia con API Rest, API GraphQL, Socket IO, Single Page App, Server side render y más.`,
  keywords: 'Full, Stack, Software, Developer, MERN, FrcGustavo,',
};

export async function getStaticProps({ locale }) {
  const { posts } = await PostsService.getAll(locale);

  return {
    props: {
      posts,
    },
  };
}

const Blog = ({ posts }) => {
  return (
    <LayoutBlog>
      <Head>
        <title>FrcGustavo | Blog</title>
        <meta name="description" content={MetaData.description} />
        <meta name="keywords" content={MetaData.keywords} />
      </Head>
      <main className={styles.main}>
        <ListPosts data={posts} />
        <Footer />
      </main>
    </LayoutBlog>
  );
};
export default Blog;
