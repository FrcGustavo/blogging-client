import { FC } from 'react';
import Link from 'next/link';
import { CSSDownbar, CSSLinkItem } from './styles';

type BownbarProps = {
  onMobileNavOpen: () => void;
};

const Downbar: FC<BownbarProps> = ({ onMobileNavOpen }) => {
  return (
    <CSSDownbar>
      <Link href="/posts/new" passHref>
        <CSSLinkItem>New Post</CSSLinkItem>
      </Link>
      <Link href="/ghost/posts" passHref>
        <CSSLinkItem>Posts</CSSLinkItem>
      </Link>
      <Link href="/ghost/staff" passHref>
        <CSSLinkItem>Staff</CSSLinkItem>
      </Link>
      <button onClick={onMobileNavOpen}>New Post</button>
    </CSSDownbar>
  );
};

export default Downbar;
