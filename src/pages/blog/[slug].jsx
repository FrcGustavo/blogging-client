import Head from 'next/head';
import { LayoutBlog } from '@/templates';
import { Footer } from '@/molecules';
import { Post } from '@/organisms';
import { PostsService } from 'root/services';
import styles from './index.module.css'


export const getStaticPaths = async () => {
  const { posts } = await PostsService.getAll();
  const paths = posts.map(({ slug }) => ({ params: { slug } }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const post = await PostsService.getOne({ slug });
  return {
    props: { post },
  };
};

const PagePost = ({ post }) => {
  return (
    <LayoutBlog>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.meta_description} />
        <meta name="keywords" content={post.keywords} />
      </Head>
      <main className={styles.main}>
        <section className='container mx-auto'>
          <Post cover={post.cover} title={post.title} body={post.html} />
        </section>
        <Footer />
      </main>
    </LayoutBlog>
  );
};
export default PagePost;
