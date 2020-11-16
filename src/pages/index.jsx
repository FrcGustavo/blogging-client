import { Profile, HomePost } from '@/molecules';
import { LayoutBlog } from '@/templates';
import { Container, CSSMain } from 'root/styles';

const Data = {
	cover: 'https://res.cloudinary.com/dwapbqqbo/image/upload/v1592516678/frcgustavo_wl1wgk.jpg',
	name: 'FrcGustavo',
	title: 'Full Stack Software Developer (MERN)',
	description: 'I’m a software Developer focused on the MERN stack. I love experimenting with new tools and frameworks. I’ve experience with Js ecosystem, Typescript, Express, React Mongo, Postgres, APIs and Single-page applications.'
}

const Post = {
	cover: 'https://res.cloudinary.com/dwapbqqbo/image/upload/v1592516373/ppyvrszlr0s2wxigqpae.jpg',
	title: 'Como crear el juego de la vida en JavaScript',
	description: 'El juego de la vida es un sistema que puede evolucionar como la vida, pero desde tu computadora.',
	href: 'my-link-to-blog'
}

export async function getStaticProps(context) {
  return {
    props: {}
  }
}

const Home = () => {
  return (
    <LayoutBlog>
      <CSSMain degraded>
				<Container>
					<Profile
						cover={Data.cover}
						name={Data.name}
						title={Data.title}
						description={Data.description}
					/>
					<HomePost
						cover={Post.cover}
						title={Post.title}
						description={Post.description}
						href={Post.href}
					/>
				</Container>
      </CSSMain>
		</LayoutBlog>
  );
}
 export default Home;
 