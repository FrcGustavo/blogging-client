import Home from '../components/pages/Home';
import Blog from '../components/pages/Blog';
import Post from '../components/pages/Post';
import TempleteBoard from '../components/templates/TempleteBoard';
import Login from '../components/pages/Login';

const routes = [
  { exact: true, path: '/', component: Home },
  { exact: true, path: '/login', component: Login },
  { exact: true, path: '/blog', component: Blog },
  { exact: true, path: '/board', component: TempleteBoard },
  { exact: true, path: '/board/posts', component: TempleteBoard },
  { exact: true, path: '/board/posts/new', component: TempleteBoard },
  { exact: true, path: '/board/posts/edit/:slug', component: TempleteBoard },
  { exact: true, path: '/board/users', component: TempleteBoard },
  { exact: true, path: '/:slug', component: Post },
];

export default routes;
