import { getCsrfToken, getSession } from 'next-auth/client';
import { Signin } from '../../apps/ghost/pages';

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: '/ghost',
        permanent: false,
      },
    };
  }

  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}

const GhostSiginPage = ({ csrfToken }) => {
  return <Signin csrfToken={csrfToken} />;
};

export default GhostSiginPage;
