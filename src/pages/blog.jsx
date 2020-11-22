import Head from 'next/head'
import { LayoutBlog } from '@/templates';
import { ListPosts } from '@/organisms';
import { Footer } from '@/molecules';
import { PostsService } from 'root/services';
import { CSSMain } from 'root/styles';

export async function getStaticProps() {
	const { posts } = await PostsService.getAll();
  return {
    props: {
			posts
		}
  }
}

const Blog = ({ posts }) => {
  return (
    <LayoutBlog>
      <Head>
        <title>FrcGustavo | Blog</title>
				<meta name="description" content="" />
				<meta name="keywords" content="" />
      </Head>
      <CSSMain>
        <ListPosts data={posts} />
        <Footer />
      </CSSMain>
		</LayoutBlog>
  );
}
 export default Blog;