import Home from '../components/pages/Home';
import Blog from '../components/pages/Blog';
import Post from '../components/pages/Post';

const routes = [
  { exact: true, path: '/', component: Home },
  { exact: true, path: '/blog', component: Blog },
  { exact: true, path: '/:slug', component: Post },
];

export default routes;
