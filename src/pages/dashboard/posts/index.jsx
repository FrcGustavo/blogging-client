import { useEffect, useState } from 'react';
import Head from 'next/head';
import cookies from 'next-cookies';
import { useAppState, useAppDispatch } from 'root/store/contexts';
import { addPosts } from 'root/store/actions';
import { Loading } from '@/atoms';
import { Posts } from '@/organisms';
import { LayoutDashboard } from '@/templates';
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
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const { posts } = useAppState();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!posts) {
      UsersService.getMyPosts()
        .then((data) => {
          dispatch(addPosts(data.posts));
        })
        .catch((err) => {
          setError(err);  
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false)
    }
  }, []);

  return (
    <LayoutDashboard>
      <Head>
        <title>Dashboard | Posts</title>
      </Head>
      { loading ? <Loading /> : null }
      { !error && !loading ?  <Posts data={posts}/> : null }
      { error ? <h1>{error.message}</h1> : null }
    </LayoutDashboard>
  );
}
 export default Dashboard;
