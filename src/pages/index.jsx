import Head from 'next/head';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { Profile, Footer, CardPost } from '@/molecules';
import { ProjectsList, ExperienceList } from '@/organisms';
import { LayoutBlog } from '@/templates';
import { Container } from 'root/styles';
import { PostsService } from 'root/services';

const profileData = {
  cover:
    'https://res.cloudinary.com/hs8bxfui6/image/upload/v1611699598/me_moo3l1.jpg',
  name: 'Francisco Gustavo',
  title: 'Desarrollador web',
  description:
    'Me encanta experimentar con nuevas herramientas y frameworks. Me gusta crear soluciones usando mis herramientas de desarrollo. Tengo experiencia con HTML, CSS, JavaScript, React, NextJS, API Rest, API GraphQL, Socket IO, Server side render y más.',
};

const projects = [
  {
    name: 'Finances App',
    description:
      'Monorepo para la gestión de finanzas personales. Backend con NestJS y PostgreSQL, frontend con React + Vite. Incluye autenticación JWT, almacenamiento en AWS S3 y despliegue con Docker.',
    tech: ['NestJS', 'React', 'TypeScript', 'Vite', 'PostgreSQL', 'Docker', 'JWT'],
    github: 'https://github.com/FrcGustavo/finances',
    demo: null,
  },
  {
    name: 'Netofings',
    description:
      'Plataforma para Internet de las Cosas (IoT). Monorepo con backend NestJS, dashboard web en React + Vite, agente de métricas y CLI para monitoreo en terminal.',
    tech: ['NestJS', 'React', 'TypeScript', 'Vite', 'MQTT', 'TurboRepo'],
    github: 'https://github.com/FrcGustavo/netofings',
    demo: null,
  },
  {
    name: 'Polls App',
    description:
      'Aplicación de encuestas. Permite crear tus propias encuestas con preguntas abiertas y de opción múltiple, y también responderlas.',
    tech: ['React', 'TypeScript', 'MUI', 'React Router', 'Axios'],
    github: 'https://github.com/FrcGustavo/polls-app',
    demo: 'https://polls-app-demo.netlify.app/',
  },
  {
    name: 'Blogging Client',
    description:
      'Blog personal con soporte para artículos en Markdown. Generación estática con Next.js, SSG, diseño responsivo y Material UI v7.',
    tech: ['React', 'Next.js', 'MUI v7', 'TypeScript', 'Emotion'],
    github: 'https://github.com/FrcGustavo/blogging-client',
    demo: null,
  },
];

const experience = [
  {
    company: 'Empresa actual',
    role: 'Frontend Developer',
    period: 'Enero 2022 – Presente',
    description:
      'Desarrollo de interfaces de usuario con React y Next.js. Colaboración en equipo ágil, code reviews, y mejora continua del rendimiento de aplicaciones web.',
    tech: ['React', 'Next.js', 'TypeScript', 'REST API'],
  },
  {
    company: 'Empresa anterior',
    role: 'Web Developer',
    period: 'Junio 2020 – Diciembre 2021',
    description:
      'Desarrollo full-stack de aplicaciones web. Implementación de APIs REST con Node.js y construcción de componentes reutilizables con React.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    company: 'Freelance',
    role: 'Desarrollador web independiente',
    period: '2019 – 2020',
    description:
      'Desarrollo de sitios web y aplicaciones para clientes. Proyectos con HTML, CSS, JavaScript y WordPress.',
    tech: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
  },
];

const SectionTitle = ({ children }) => (
  <Typography
    variant="h5"
    fontWeight="bold"
    sx={{
      mb: 4,
      pb: 1,
      borderBottom: '2px solid',
      borderColor: 'secondary.main',
      color: 'text.primary',
      letterSpacing: '0.5px',
    }}
  >
    {children}
  </Typography>
);

export async function getStaticProps() {
  const { posts } = await PostsService.getAll({ limit: 3 });
  return { props: { posts } };
}

const Home = ({ posts = [] }) => {
  return (
    <LayoutBlog>
      <Head>
        <title>FrcGustavo | Desarrollador web</title>
        <meta name="description" content={profileData.description} />
        <meta
          name="keywords"
          content="FrcGustavo, Desarrollador web, React, Next JS, Javascript, Typescript"
        />
      </Head>

      {/* Perfil */}
      <Box
        component="section"
        sx={{
          background: (t) =>
            `linear-gradient(90deg, ${t.palette.primary.dark}, ${t.palette.primary.main})`,
          padding: '28px',
        }}
      >
        <Container>
          <Profile
            cover={profileData.cover}
            name={profileData.name}
            title={profileData.title}
            description={profileData.description}
          />
        </Container>
      </Box>

      {/* Proyectos */}
      <Box component="section" sx={{ backgroundColor: '#f5f7fa', padding: '56px 28px' }}>
        <Container>
          <SectionTitle>Proyectos</SectionTitle>
          <ProjectsList data={projects} />
        </Container>
      </Box>

      {/* Experiencia profesional */}
      <Box component="section" sx={{ backgroundColor: '#ffffff', padding: '56px 28px' }}>
        <Container>
          <SectionTitle>Experiencia Profesional</SectionTitle>
          <ExperienceList data={experience} />
        </Container>
      </Box>

      {/* Últimas entradas del blog */}
      <Box component="section" sx={{ backgroundColor: '#f5f7fa', padding: '56px 28px' }}>
        <Container>
          <SectionTitle>Últimas entradas del blog</SectionTitle>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '28px',
              justifyItems: 'center',
              '@media screen and (min-width: 680px)': {
                gridTemplateColumns: '1fr 1fr',
              },
              '@media screen and (min-width: 1000px)': {
                gridTemplateColumns: '1fr 1fr 1fr',
              },
            }}
          >
            {posts.map(({ cover, title, description, slug }) => (
              <CardPost
                key={slug}
                cover={cover}
                title={title}
                description={description}
                href={slug}
              />
            ))}
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
            <Button
              component={Link}
              href="/blog"
              variant="contained"
              color="secondary"
              sx={{ borderRadius: '7px', padding: '10px 28px', textTransform: 'uppercase' }}
            >
              Ver todos los posts
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Footer con links de contacto */}
      <Footer />
    </LayoutBlog>
  );
};

export default Home;
