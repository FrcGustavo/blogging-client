import Head from 'next/head'
import { Profile, HomePost } from '@/molecules';
import { LayoutBlog } from '@/templates';
import { PostsService } from 'root/services';
import { Container, CSSMain } from 'root/styles';

const Data = {
	cover: 'https://res.cloudinary.com/dwapbqqbo/image/upload/v1592516678/frcgustavo_wl1wgk.jpg',
	name: 'Francisco Gustavo',
	title: 'Desarrollador de software full stack MERN',
	description: `Me encanta experimentar con nuevas herramientas y frameworks. Me gusta crear soluciones usando mis herramientas de desarrollo. Tengo experiencia con API Rest, API GraphQL, Socket IO, Single Page App, Server side render y más.`,
	keywords: 'Full, Stack, Software, Developer, MERN, FrcGustavo,'
}

export async function getStaticProps() {
	const { posts } = await PostsService.getAll();
	const post = posts[0];
  return {
    props: {
			post
		}
  }
}

const Home = ({ post }) => {
  return (
    <LayoutBlog>
			<Head>
        <title>FrcGustavo | Full Stack Software Developer MERN</title>
				<meta name="description" content={Data.description} />
				<meta name="keywords" content={Data.keywords} />
      </Head>
      <CSSMain degraded>
				<Container>
					<Profile
						cover={Data.cover}
						name={Data.name}
						title={Data.title}
						description={Data.description}
					/>
					<HomePost
						cover={post.cover}
						title={post.title}
						description={post.description}
						href={post.slug}
					/>
				</Container>
      </CSSMain>
		</LayoutBlog>
  );
}
 export default Home;
 