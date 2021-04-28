import { getCsrfToken } from 'next-auth/client';
import { Signin } from '../../apps/ghost/pages'

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}

const GhostSiginPage = ({ csrfToken }) => {
  return (
    <Signin csrfToken={csrfToken} />
  );
}

export default GhostSiginPage;