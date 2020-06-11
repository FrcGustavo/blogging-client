import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Post from '../pages/Post';
import TempleteBoard from '../components/templates/TempleteBoard';
import Login from '../pages/Login';

const routes = [
  { exact: true, path: '/', component: Home },
  { exact: true, path: '/login', component: Login },
  { exact: true, path: '/blog', component: Blog },
  { exact: true, path: '/board', component: TempleteBoard },
  { exact: true, path: '/board/posts', component: TempleteBoard },
  { exact: true, path: '/board/users', component: TempleteBoard },
  { exact: true, path: '/:slug', component: Post },
];

export default routes;
