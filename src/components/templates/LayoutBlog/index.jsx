import { Header } from '@/molecules';

const LayoutBlog = ({ children }) => {
  return (
    <div>
      <Header />
      { children }
    </div>
  );
}

export default LayoutBlog;
