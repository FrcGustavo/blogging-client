import { createFileRoute, notFound } from '@tanstack/react-router';
import { LayoutBlog } from '@/templates';
import { Footer } from '@/molecules';
import { Post } from '@/organisms';
import { readPost } from 'root/services/posts.functions';
import { Container, CSSMain } from 'root/styles';

export const Route = createFileRoute('/blog/$slug')({
  loader: async ({ params }) => {
    const post = await readPost({ data: params.slug });
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData: post }) => ({
    meta: post
      ? [{ title: post.title }, { name: 'description', content: post.meta_description }]
      : [],
  }),
  component: PagePost,
});

function PagePost() {
  const post = Route.useLoaderData();

  return (
    <LayoutBlog>
      <CSSMain>
        <Container>
          <Post cover={post.cover} title={post.title} body={post.html} />
        </Container>
        <Footer />
      </CSSMain>
    </LayoutBlog>
  );
}
