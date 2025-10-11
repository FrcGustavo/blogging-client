import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { githubProfile, linkedinProfile, contactEmail } from 'root/config';

type ProfileProps = {
  cover: string;
  name: string;
  title: string;
  description: string;
};

const Profile = ({ cover, name, title, description }: ProfileProps) => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 1056,
        margin: '0 auto',
        padding: '28px',
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'auto 1fr' },
        gap: '28px',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'center', sm: 'flex-start' },
        }}
      >
        <Avatar
          src={cover}
          alt={name}
          sx={{
            width: 150,
            height: 150,
            boxShadow: '0 0 7px rgba(0, 0, 0, 0.24)',
          }}
        />
      </Box>
      <Box
        sx={{
          textAlign: { xs: 'center', sm: 'left' },
          color: '#fff',
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{ fontWeight: 'bold', fontSize: { xs: 28, sm: 32 }, mb: 1.75 }}
        >
          {name}
        </Typography>
        <Typography
          variant="h6"
          component="h2"
          sx={{ fontWeight: 'bold', fontSize: { xs: 21, sm: 24 }, mb: 1.75 }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 2,
            color: 'rgba(255,255,255,0.85)',
          }}
        >
          {description}
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          justifyContent={{ xs: 'center', sm: 'flex-start' }}
        >
          <IconButton
            component="a"
            href={linkedinProfile}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            sx={{ color: '#6ec6ff' }}
          >
            <FaLinkedin />
          </IconButton>
          <IconButton
            component="a"
            href={githubProfile}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            sx={{ color: '#6ec6ff' }}
          >
            <FaGithub />
          </IconButton>
          <IconButton
            component="a"
            href={`mailto:${contactEmail}?subject=frcgustavo.com`}
            aria-label="Correo electrónico"
            sx={{ color: '#6ec6ff' }}
          >
            <FaEnvelope />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default Profile;
