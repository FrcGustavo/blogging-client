import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@/atoms';

const CardPost = ({ cover, title, description, href }) => {
  return (
    <Card
      sx={{
        width: '100%',
        maxWidth: 290,
        boxShadow: '0 0 7px rgba(0, 0, 0, 0.14)',
        borderRadius: 2,
        overflow: 'hidden',
        backgroundColor: '#fff',
      }}
    >
      <CardMedia component="img" image={cover} alt={title} sx={{ height: 150 }} />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1.5,
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          sx={{
            fontWeight: 'bold',
          }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Button href={`/blog/${href}`}>Leer más</Button>
      </CardContent>
    </Card>
  );
};

export default CardPost;
