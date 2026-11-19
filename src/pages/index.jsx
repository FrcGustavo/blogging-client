import Head from 'next/head';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Profile, Footer } from '@/molecules';
import { ProjectsList, ExperienceList } from '@/organisms';
import { LayoutBlog } from '@/templates';
import { Container } from 'root/styles';

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
    name: 'Blogging Client',
    description:
      'Blog personal desarrollado con Next.js y Material UI. Soporte para artículos en Markdown, SSG y diseño responsivo.',
    tech: ['React', 'Next.js', 'MUI v7', 'Emotion'],
    github: 'https://github.com/FrcGustavo/blogging-client',
    demo: null,
  },
  {
    name: 'Proyecto 2',
    description: 'Descripción breve del proyecto. Agrega aquí los detalles más relevantes.',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/FrcGustavo',
    demo: null,
  },
  {
    name: 'Proyecto 3',
    description: 'Descripción breve del proyecto. Agrega aquí los detalles más relevantes.',
    tech: ['TypeScript', 'GraphQL', 'PostgreSQL'],
    github: 'https://github.com/FrcGustavo',
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

const Home = () => {
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

      {/* Footer con links de contacto */}
      <Footer />
    </LayoutBlog>
  );
};

export default Home;
