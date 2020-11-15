import { Header } from '../../mulecules';

const LayoutBlog = ({ children }) => {
  return (
    <div>
      <Header />
      { children }
    </div>
  );
}

export default LayoutBlog;
