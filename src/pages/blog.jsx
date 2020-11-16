import { LayoutBlog } from '@/templates';
import { ListPosts } from '@/organisms';
import { Loading } from '@/atoms';
import { useRequest } from 'root/hooks';
import { PostsService } from 'root/services';
import { CSSMain } from 'root/styles';

const Blog = () => {
  const [error, loading, data] = useRequest(PostsService.getAll());

  return (
    <LayoutBlog>
      <CSSMain>
        { loading ? <Loading secondary /> : null }
        { !error && !loading ? <ListPosts data={data.posts} /> : null }
        { error ? <h1>Error</h1> : null }
      </CSSMain>
		</LayoutBlog>
  );
}
 export default Blog;