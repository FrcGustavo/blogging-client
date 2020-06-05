import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Post from '../pages/Post';
import Board from '../pages/Board';
import Login from '../pages/Login';

const routes = [
  { exact: true, path: '/', component: Home },
  { exact: true, path: '/blog', component: Blog },
  { exact: true, path: '/board', component: Board },
  { exact: true, path: '/login', component: Login },
  { exact: true, path: '/:slug', component: Post },
];

export default routes;
