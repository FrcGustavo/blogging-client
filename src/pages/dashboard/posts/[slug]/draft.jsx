import { useState, useEffect } from 'react';
import Head from 'next/head';
import { getSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { LayoutBlog } from '@/templates';
import { Footer } from '@/molecules';
import { Post } from '@/organisms';
import { UsersService } from 'root/services';
import { Container, CSSMain } from 'root/styles';

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}

const PagePost = ({ session }) => {
  const [post, setPost] = useState(false);
  const { locale, query } = useRouter();

  useEffect(async () => {
    const res = await UsersService.getOnePost(
      query.slug,
      locale,
      session?.accessToken
    );
    setPost(res);
  }, [locale]);

  if (!post) return <h2>Cargando...</h2>;
  return (
    <LayoutBlog>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.keywords} />
      </Head>
      <CSSMain>
        <Container>
          <Post cover={post.cover} title={post.title} body={post.body} />
        </Container>
        <Footer />
      </CSSMain>
    </LayoutBlog>
  );
};
export default PagePost;
