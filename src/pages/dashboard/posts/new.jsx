import { getSession } from 'next-auth/client';
import { useAppDispatch } from 'root/store/contexts';
import { cleanPosts } from 'root/store/actions';
import { PostEditor } from '@/organisms';
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

const DashboardNew = () => {
  const dispatch = useAppDispatch();
  dispatch(cleanPosts());
  const dataForm = {
    id: false,
    cover: '',
    slug: '',
    isPublic: false,
    es: {
      body: '',
      description: '',
      keywords: '',
      title: '',
    },
    en: {
      body: '',
      description: '',
      keywords: '',
      title: '',
    },
  };

  return (
    <LayoutDashboard>
      <PostEditor data={dataForm} />
    </LayoutDashboard>
  );
};

export default DashboardNew;
