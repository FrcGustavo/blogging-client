import { useEffect, useState } from 'react';
import Head from 'next/head';
import { getSession } from 'next-auth/client';
import { useAppState, useAppDispatch } from 'root/store/contexts';
import { addPosts } from 'root/store/actions';
import { Loading } from '@/atoms';
import { Posts } from '@/organisms';
import { LayoutDashboard } from '@/templates';
import { UsersService } from 'root/services';

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}

const Dashboard = ({ session }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const { posts } = useAppState();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!posts) {
      UsersService.getMyPosts(session?.accessToken)
        .then((data) => {
          dispatch(addPosts(data.posts));
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <LayoutDashboard>
      <Head>
        <title>Dashboard | Posts</title>
      </Head>
      {loading ? <Loading /> : null}
      {!error && !loading ? <Posts data={posts} /> : null}
      {error ? <h1>{error.message}</h1> : null}
    </LayoutDashboard>
  );
};
export default Dashboard;
