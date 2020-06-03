import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Post from '../pages/Post';

const routes = [
  { exact: true, path: '/', component: Home },
  { exact: true, path: '/blog', component: Blog },
  { exact: true, path: '/:slug', component: Post },
];

export default routes;
