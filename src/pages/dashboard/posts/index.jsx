import cookies from 'next-cookies';
import { Loading } from '@/atoms';
import { Posts } from '@/organisms';
import { LayoutDashboard } from '@/templates';
import { useRequest } from 'root/hooks';
import { UsersService } from 'root/services';

export async function getServerSideProps(context) {
  const { user } = cookies(context);
  if (!user || user === 'null') {
    context.res.writeHead(302, { Location: '/login' }).end();
  }
  return {
    props: {},
  }
}

const Dashboard = () => {
  const [error, loading, data] = useRequest(UsersService.getMyPosts, true);

  return (
    <LayoutDashboard>
      { loading ? <Loading /> : null }
      { !error && !loading ?  <Posts data={data.posts}/> : null }
      { error ? <h1>{error.message}</h1> : null }
    </LayoutDashboard>
  );
}
 export default Dashboard;
