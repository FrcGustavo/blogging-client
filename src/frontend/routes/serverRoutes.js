import Home from '../pages/Home';
import Blog from '../pages/Blog';

const routes = [
  { exact: true, path: '/', component: Home },
  { exact: true, path: '/blog', component: Blog },
];

export default routes;
