import { useState, useEffect } from 'react';
import Head from 'next/head';
import cookies from 'next-cookies';
import { useRouter } from 'next/router';
import { LayoutBlog } from '@/templates';
import { Footer } from '@/molecules';
import { Post } from '@/organisms';
import { UsersService } from 'root/services';
import { Container, CSSMain } from 'root/styles';

export async function getServerSideProps(context) {
  const { user } = cookies(context);
  if (!user || user === 'null') {
    context.res.writeHead(302, { Location: '/login' }).end();
  }
  return {
    props: {},
  }
}

const PagePost = () => {
  const [post, setPost] = useState(false);
  const { locale, query } = useRouter();

  useEffect(async () => {
    const res = await UsersService.getOnePost(query.slug, locale)
    setPost(res);
  }, [locale]);

  if (!post) return <h2>Cargando...</h2>
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
 