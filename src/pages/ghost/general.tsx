import { getSession } from 'next-auth/client';
import { General } from '@ghost/pages';

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

const GhostGeneralPage = () => {
  return <General />;
};
export default GhostGeneralPage;
