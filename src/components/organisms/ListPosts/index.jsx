import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CardPost } from '@/molecules';
import { Container } from 'root/styles';

const ListPosts = ({ data }) => {
  return (
    <Box
      component="section"
      sx={{
        padding: '28px',
      }}
    >
      <Container>
        <Grid container spacing={7} justifyContent="center">
          {data.map(({ cover, title, description, slug }) => (
            <Grid
              item
              key={slug}
              xs={12}
              sm={6}
              lg={4}
              display="flex"
              justifyContent="center"
            >
              <CardPost
                cover={cover}
                title={title}
                description={description}
                href={slug}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ListPosts;
