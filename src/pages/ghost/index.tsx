import { getSession } from 'next-auth/client';
import { Layout } from '@ghost/components/templates';

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

const Home = () => {
  return (
    <Layout>
      <h1>Bievenido</h1>
    </Layout>
  );
};
export default Home;
