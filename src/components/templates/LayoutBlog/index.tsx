import { useState, type ReactNode, type UIEvent } from 'react';
import Box from '@mui/material/Box';
import { Header } from '@/molecules';

type LayoutBlogProps = {
  children: ReactNode;
};

const LayoutBlog = ({ children }: LayoutBlogProps) => {
  const [shadow, setShadow] = useState(false);

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    setShadow(event.currentTarget.scrollTop > 0);
  };

  return (
    <Box
      onScroll={handleScroll}
      sx={{
        width: '100%',
        height: '100%',
        overflowX: 'hidden',
        overflowY: 'auto',
        backgroundColor: 'transparent',
      }}
    >
      <Header shadow={shadow} />
      {children}
    </Box>
  );
};

export default LayoutBlog;
