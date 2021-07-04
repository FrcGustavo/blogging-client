import { getSession } from 'next-auth/client';
import { Staff } from '@ghost/pages';

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

const GhostStaffPage = () => {
  return <Staff />;
};
export default GhostStaffPage;
