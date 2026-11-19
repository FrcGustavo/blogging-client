import { createFileRoute } from '@tanstack/react-router';
import { LayoutBlog } from '@/templates';
import { ListPosts } from '@/organisms';
import { Footer } from '@/molecules';
import { listPosts } from 'root/services/posts.functions';
import { CSSMain } from 'root/styles';

const MetaData = {
  description: `Me encanta experimentar con nuevas herramientas y frameworks. Me gusta crear soluciones usando mis herramientas de desarrollo. Tengo experiencia con API Rest, API GraphQL, Socket IO, Single Page App, Server side render y más.`,
  keywords: 'Full, Stack, Software, Developer, MERN, FrcGustavo,',
};

export const Route = createFileRoute('/blog/')({
  loader: () => listPosts({ data: { limit: 9 } }),
  head: () => ({
    meta: [
      { title: 'FrcGustavo | Blog' },
      { name: 'description', content: MetaData.description },
      { name: 'keywords', content: MetaData.keywords },
    ],
  }),
  component: Blog,
});

function Blog() {
  const { posts } = Route.useLoaderData();

  return (
    <LayoutBlog>
      <CSSMain>
        <ListPosts data={posts} />
        <Footer />
      </CSSMain>
    </LayoutBlog>
  );
}
