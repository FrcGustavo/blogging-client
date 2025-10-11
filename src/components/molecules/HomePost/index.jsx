import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@/atoms';

const HomePost = ({ cover, title, description, href }) => {
  return (
    <Box
      component="section"
      sx={{
        padding: '28px',
        display: 'flex',
        justifyContent: { xs: 'stretch', sm: 'center' },
      }}
    >
      <Card
        sx={{
          width: '100%',
          maxWidth: { xs: 290, sm: 1000 },
          margin: '0 auto',
          boxShadow: '0 0 7px rgba(0, 0, 0, 0.14)',
          borderRadius: 2,
          overflow: 'hidden',
          backgroundColor: '#fff',
          display: { xs: 'block', sm: 'grid' },
          gridTemplateColumns: { sm: '318px 1fr' },
          gap: { sm: 3 },
          height: { sm: 218 },
        }}
      >
        <Box
          sx={{
            height: { xs: 190, sm: '100%' },
            padding: { sm: 1.75 },
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CardMedia
            component="img"
            image={cover}
            alt={title}
            sx={{
              width: { xs: '100%', sm: 290 },
              borderRadius: { sm: 1 },
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1.75,
          }}
        >
          <Typography
            variant="h5"
            component="h3"
            sx={{
              fontWeight: 'bold',
            }}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Button href={href}>Leer más</Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default HomePost;
