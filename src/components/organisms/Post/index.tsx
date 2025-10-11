import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import type { Theme } from '@mui/material/styles';
import type { SxProps } from '@mui/system';

const postContentSx: SxProps<Theme> = {
  maxWidth: 700,
  margin: '0 auto',
  overflow: 'hidden',
  '& a': {
    color: '#4183c4',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  '& p, & strong, & a': {
    fontSize: { xs: 18, sm: 20 },
    letterSpacing: '0.25px',
    lineHeight: 1.5,
  },
  '& strong': {
    fontWeight: 700,
  },
  '& p, & blockquote, & ul, & ol, & dl, & table, & pre': {
    margin: '14px 0',
  },
  '& p': {
    marginTop: 0,
    marginBottom: '30px',
  },
  '& pre': {
    borderRadius: '4.5px',
    padding: '14px',
    overflow: 'auto',
    backgroundColor: '#f6f8fa',
    lineHeight: 1.45,
  },
  '& pre code': {
    display: 'block',
    padding: 0,
    margin: 0,
    lineHeight: 'inherit',
    border: 0,
    backgroundColor: 'transparent',
  },
  '& ul, & ol': {
    paddingLeft: '30px',
  },
  '& h2': {
    borderBottom: '1px solid #eee',
    color: '#000',
    fontSize: { xs: '1.75em', sm: '2em' },
  },
  '& h3': {
    fontSize: '1.5em',
  },
  '& h4': {
    fontSize: '1.2em',
  },
  '& h5': {
    fontSize: '1em',
  },
  '& h6': {
    color: '#777',
    fontSize: '1em',
  },
  '& h2, & h3, & h4, & h5, & h6': {
    fontWeight: 'bold',
    lineHeight: 1.7,
    margin: '1em 0 15px 0',
  },
  '& h2 + p, & h3 + p': {
    marginTop: '14px',
  },
  '& code': {
    backgroundColor: '#f8f8f8',
    borderRadius: '4.5px',
    border: '1px solid #ddd',
    fontFamily: "Consolas, 'Liberation Mono', Courier, monospace",
    fontSize: '14px',
    margin: '0 2px',
    padding: '0 5px',
    whiteSpace: 'pre',
  },
  '& img': {
    maxWidth: '100%',
    height: 'auto',
  },
  '&:last-child': {
    paddingBottom: { xs: 0, lg: '32px' },
  },
};

type PostProps = {
  cover: string;
  title: string;
  body: string;
};

const Post = ({ cover, title, body }: PostProps) => {
  return (
    <Box
      component="article"
      sx={{
        paddingY: { lg: '64px' },
      }}
    >
      <Card
        sx={{
          backgroundColor: '#fff',
          borderRadius: { lg: '7px' },
          boxShadow: { lg: '0 0 7px rgba(0, 0, 0, 0.14)' },
          overflow: 'hidden',
        }}
      >
        <CardMedia
          component="img"
          image={cover}
          alt={title}
          sx={{
            height: 200,
            objectFit: 'cover',
          }}
        />
        <CardContent
          sx={{
            paddingX: { xs: '32px', md: '48px' },
          }}
        >
          <Box
            sx={{
              maxWidth: 700,
              margin: '0 auto',
              paddingY: '14px',
            }}
          >
            <Typography
              variant="h3"
              component="h1"
              sx={{
                borderBottom: '1px solid gray',
                paddingBottom: '14px',
                fontSize: { xs: '24.5px', sm: '28px', lg: '35px' },
                fontWeight: 'bold',
              }}
            >
              {title}
            </Typography>
          </Box>
          <Box sx={postContentSx} dangerouslySetInnerHTML={{ __html: body }} />
        </CardContent>
      </Card>
    </Box>
  );
};

export default Post;
