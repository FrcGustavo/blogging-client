import { useState } from 'react';
import Box from '@mui/material/Box';
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
