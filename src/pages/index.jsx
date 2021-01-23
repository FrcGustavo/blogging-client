import Head from 'next/head'
import { useRouter } from 'next/router';
import { Profile, HomePost } from '@/molecules';
import { LayoutBlog } from '@/templates';
import { PostsService } from 'root/services';
import { Container, CSSMain } from 'root/styles';

const Data = {
	es: {
		cover: 'https://res.cloudinary.com/dwapbqqbo/image/upload/v1592516678/frcgustavo_wl1wgk.jpg',
		name: 'Francisco Gustavo',
		title: 'Desarrollador de software full stack MERN',
		description: 'Me encanta experimentar con nuevas herramientas y frameworks. Me gusta crear soluciones usando mis herramientas de desarrollo. Tengo experiencia con API Rest, API GraphQL, Socket IO, Single Page App, Server side render y más.',
		keywords: 'Full, Stack, Software, Desarrollador, MERN, FrcGustavo'
	},
	en: {
		cover: 'https://res.cloudinary.com/dwapbqqbo/image/upload/v1592516678/frcgustavo_wl1wgk.jpg',
		name: 'Francisco Gustavo',
		title: 'Software developer full stack MERN',
		description: 'I love to experiment with new tools and frameworks, I like to create solutions using my develop tools, My experience is with API Rest, API GraphQL, Socket IO, Single Page App, Server side render and more.',
		keywords: 'Full, Stack, Software, Developer, MERN, FrcGustavo'
	}
}

export async function getStaticProps({ locale }) {
	const { posts } = await PostsService.getAll(locale);
	const post = posts[0];
  return {
    props: {
			post
		}
  }
}

const Home = ({ post }) => {
	const { locale } = useRouter();
  return (
    <LayoutBlog>
			<Head>
        <title>FrcGustavo | Full Stack Software Developer MERN</title>
				<meta name="description" content={Data[locale].description} />
				<meta name="keywords" content={Data[locale].keywords} />
      </Head>
      <CSSMain degraded>
				<Container>
					<Profile
						cover={Data[locale].cover}
						name={Data[locale].name}
						title={Data[locale].title}
						description={Data[locale].description}
					/>
					<HomePost
						cover={post.cover}
						title={post.title}
						description={post.description}
						href={`/blog/${post.slug}`}
					/>
				</Container>
      </CSSMain>
		</LayoutBlog>
  );
}
 export default Home;
 