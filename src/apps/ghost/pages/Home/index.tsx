import { FC } from 'react';
import { Layout } from '@ghost/components/templates';
import { CSSIframe } from './styles';

const Home: FC = () => {
  return (
    <Layout>
      <CSSIframe src="http://localhost:3000/" title="Blogging page"></CSSIframe>
    </Layout>
  );
};

export default Home;
