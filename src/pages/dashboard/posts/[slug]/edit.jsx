import { useEffect, useState } from 'react';
import { getSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useAppState, useAppDispatch } from 'root/store/contexts';
import { addPosts, addEditPost } from 'root/store/actions';
import { Loading } from '@/atoms';
import { PostEditor } from '@/organisms';
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

const DashboardEdit = ({ session }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const { editingPost, posts } = useAppState();
  const dispatch = useAppDispatch();
  const {
    query: { slug },
  } = useRouter();
  useEffect(() => {
    if (!posts) {
      UsersService.getMyPosts(session?.accessToken)
        .then((data) => {
          dispatch(addPosts(data.posts));
        })
        .catch((err) => {
          setError(err);
        });
    } else {
      dispatch(addEditPost(slug));
      setLoading(false);
    }
  }, [posts]);

  return (
    <LayoutDashboard>
      {loading ? <Loading /> : null}
      {!error && !loading ? <PostEditor data={editingPost} /> : null}
      {error ? <h1>Error</h1> : null}
    </LayoutDashboard>
  );
};
export default DashboardEdit;
