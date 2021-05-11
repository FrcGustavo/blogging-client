import { getSession } from 'next-auth/client';
import { Home } from '@ghost/pages';

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

const GhostHomePage = () => {
  return <Home />;
};
export default GhostHomePage;
