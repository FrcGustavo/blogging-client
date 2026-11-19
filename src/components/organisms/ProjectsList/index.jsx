import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ name, description, tech = [], github, demo }) => (
  <Card
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 0 7px rgba(0,0,0,0.14)',
      borderRadius: '7px',
      transition: 'transform 0.2s',
      '&:hover': { transform: 'translateY(-4px)' },
    }}
  >
    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Typography variant="h6" fontWeight="bold" fontSize="18px">
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
        {description}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
        {tech.map((t) => (
          <Chip
            key={t}
            label={t}
            size="small"
            sx={{ backgroundColor: 'rgba(75, 90, 138, 0.12)', fontSize: '11px' }}
          />
        ))}
      </Box>
      <Box sx={{ display: 'flex', gap: 0.5, mt: 0.5 }}>
        {github && (
          <IconButton
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{ color: '#1C2237' }}
            aria-label="Ver en GitHub"
          >
            <FaGithub />
          </IconButton>
        )}
        {demo && (
          <IconButton
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{ color: '#1C2237' }}
            aria-label="Ver demo"
          >
            <FaExternalLinkAlt size={14} />
          </IconButton>
        )}
      </Box>
    </CardContent>
  </Card>
);

const ProjectsList = ({ data = [] }) => (
  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '28px',
      '@media screen and (min-width: 600px)': {
        gridTemplateColumns: '1fr 1fr',
      },
      '@media screen and (min-width: 960px)': {
        gridTemplateColumns: '1fr 1fr 1fr',
      },
    }}
  >
    {data.map((project) => (
      <ProjectCard key={project.name} {...project} />
    ))}
  </Box>
);

export default ProjectsList;
