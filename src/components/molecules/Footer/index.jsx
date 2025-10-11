import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from '@mui/material/styles';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { githubProfile, linkedinProfile, contactEmail } from 'root/config';
import { Container } from 'root/styles';

const Footer = () => {
  const theme = useTheme();
  const gradient = `linear-gradient(90deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`;

  return (
    <Box
      component="footer"
      sx={{
        backgroundImage: gradient,
        color: theme.palette.primary.contrastText || theme.palette.secondary.contrastText,
        paddingY: 3.5,
        paddingX: 2,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{
            '& .MuiIconButton-root': {
              color: theme.palette.secondary.main,
              transition: 'color 0.2s ease',
              '&:hover': {
                color: theme.palette.secondary.contrastText,
                backgroundColor: `rgba(0, 0, 0, ${theme.palette.mode === 'light' ? 0.08 : 0.2})`,
              },
            },
          }}
        >
          <Tooltip title="LinkedIn">
            <IconButton
              component="a"
              href={linkedinProfile}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </IconButton>
          </Tooltip>
          <Tooltip title="Github">
            <IconButton
              component="a"
              href={githubProfile}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </IconButton>
          </Tooltip>
          <Tooltip title="Correo electrónico">
            <IconButton component="a" href={`mailto:${contactEmail}?subject=frcgustavo.com`}>
              <FaEnvelope />
            </IconButton>
          </Tooltip>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
