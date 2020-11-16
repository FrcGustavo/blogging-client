import styled from 'styled-components';
import { Profile, HomePost } from '@/molecules';
import { LayoutBlog } from '@/templates';
import { Container } from 'root/styles';

const Data = {
	cover: 'https://res.cloudinary.com/dwapbqqbo/image/upload/v1592516678/frcgustavo_wl1wgk.jpg',
	name: 'FrcGustavo',
	title: 'Full Stack Software Developer (MERN)',
	description: 'I’m a software Developer focused on the MERN stack. I love experimenting with new tools and frameworks. I’ve experience with Js ecosystem, Typescript, Express, React Mongo, Postgres, APIs and Single-page applications.'
}

const CSSMain = styled.main`
min-height: 100vh;
background: linear-gradient(90deg, ${props => props.theme.primaryDark}, ${props => props.theme.primarylight});
`;

const Home = () => {
  return (
    <LayoutBlog>
      <CSSMain>
				<Container>
					<Profile
						cover={Data.cover}
						name={Data.name}
						title={Data.title}
						description={Data.description}
					/>
					<HomePost />
				</Container>
      </CSSMain>
		</LayoutBlog>
  );
}
 export default Home;


 /*
 
 <div>
					<Container>
						<div>
							<img src="/" />
							<div>
								<h1>Francisco Hidalgo</h1>
								<p>Software developer</p>
								<p>Social Media</p>
							</div>
						</div>
					</Container>
					<Container>
						<article>
							<img src="/" />
							<div>
								<h3>Titulo de mi blog</h3>
								<p>Descripcion de mi blog</p>
							</div>
						</article>
					</Container>
				</div>
 */