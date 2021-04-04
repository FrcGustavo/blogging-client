import { getCsrfToken } from 'next-auth/client';
import { Login } from '@/organisms';
import { UsersService } from 'root/services';
import { useAppDispatch } from 'store/contexts';
import { login } from 'store/actions';

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}

const LoginPage = ({ csrfToken }) => {
  return <Login csrfToken={csrfToken} />;
};

export default LoginPage;
