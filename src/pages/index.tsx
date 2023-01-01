import Head from 'next/head';
import { Profile, HomePost } from '@/molecules';
import { LayoutBlog } from '@/templates';
import { PostsService } from 'root/services';
import styles from './index.module.css'

const Data = {
  es: {
    cover:
      'https://res.cloudinary.com/hs8bxfui6/image/upload/v1611699598/me_moo3l1.jpg',
    name: 'Francisco Gustavo',
    title: 'Desarrollador web',
    description:
      'Me encanta experimentar con nuevas herramientas y frameworks. Me gusta crear soluciones usando mis herramientas de desarrollo. Tengo experiencia con HTML, CSS, JavaScript, React, NextJS, API Rest, API GraphQL, Socket IO, Server side render y más.',
    keywords:
      'FrcGustavo, Desarollador web, React, Next JS, Javascript, Typescript',
  },
  en: {
    cover:
      'https://res.cloudinary.com/hs8bxfui6/image/upload/v1611699598/me_moo3l1.jpg',
    name: 'Francisco Gustavo',
    title: 'React frontend developer',
    description:
      'I love to experiment with new tools and frameworks, I like to create solutions using my develop tools, My experience is with HTML, CSS, JavaScript, React, NextJS, API Rest, API GraphQL, Socket IO, Server side render and more.',
    keywords: 'React, NextJS, Software, Developer, MERN, FrcGustavo',
  },
};

export async function getStaticProps() {
  const { posts } = await PostsService.getAll({ limit: 1 });
  const post = posts[0];
  return {
    props: {
      post,
    },
  };
}

const Home = ({ post }) => {
  return (
    <LayoutBlog>
      <Head>
        <title>FrcGustavo | Desarrollador web</title>
        <meta name="description" content={Data['es'].description} />
        <meta name="keywords" content={Data['es'].keywords} />
      </Head>
      <main className={styles.main}>
        <section className='container mx-auto'>
          <Profile
            cover={Data['es'].cover}
            name={Data['es'].name}
            title={Data['es'].title}
            description={Data['es'].description}
            />
          <HomePost
            cover={post.cover}
            title={post.title}
            description={post.description}
            href={`/blog/${post.slug}`}
            />
        </section>
      </main>
    </LayoutBlog>
  );
};
export default Home;
