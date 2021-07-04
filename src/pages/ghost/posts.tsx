import { getSession } from 'next-auth/client';
import { Posts } from '@ghost/pages';

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
    props: {},
  };
}

const GhostPostsPage = () => {
  return <Posts />;
};

export default GhostPostsPage;
