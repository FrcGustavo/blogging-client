import { getSession } from 'next-auth/client';
import { LayoutDashboard } from '@/templates';

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

const Dashboard = () => {
  return (
    <LayoutDashboard>
      <h1>Bievenido</h1>
    </LayoutDashboard>
  );
};
export default Dashboard;
