import { useState } from 'react';
import { Header } from '@/molecules';

const LayoutBlog = ({ children }) => {
  const [shadow, setShadow] = useState(false);

  const handleScroll = (e) => {
    if (e.target.scrollTop > 0) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  return (
    <div
      className="w-full h-full overflow-x-hidden overflow-y-auto"
      onScroll={handleScroll}
    >
      <Header shadow={shadow} />
      {children}
    </div>
  );
};

export default LayoutBlog;
