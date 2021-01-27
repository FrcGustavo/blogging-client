import cookies from 'next-cookies';
import { LayoutDashboard } from '@/templates';

export async function getServerSideProps(context) {
  const { user } = cookies(context);
  if (!user || user === 'null') {
    context.res.writeHead(302, { Location: '/login' }).end();
  }
  return {
    props: {},
  }
}

const Dashboard = () => {
  return (
    <LayoutDashboard>
      <h1>Bievenido</h1>
    </LayoutDashboard>
  );
}
 export default Dashboard;
