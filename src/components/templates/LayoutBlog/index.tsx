import type { ReactNode } from 'react';
import { useState } from 'react';
import { Header } from '@/molecules';
import { CSSBlogApp } from './styles';

interface LayoutBlogProps {
  children: ReactNode;
}

const LayoutBlog = ({ children }: LayoutBlogProps) => {
  const [shadow, setShadow] = useState(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    if (target.scrollTop > 0) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  return (
    <CSSBlogApp onScroll={handleScroll}>
      <Header shadow={shadow} />
      {children}
    </CSSBlogApp>
  );
};

export default LayoutBlog;
