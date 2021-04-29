import { FC } from 'react';
import Link from 'next/link';
import { CSSDownbar } from './styles';

type BownbarProps = {
  onMobileNavOpen: () => void;
};

const Downbar: FC<BownbarProps> = ({ onMobileNavOpen }) => {
  return (
    <CSSDownbar>
      <Link href="">
        <a>New Post</a>
      </Link>
      <Link href="">
        <a>New Post</a>
      </Link>
      <Link href="">
        <a>New Post</a>
      </Link>
      <button onClick={onMobileNavOpen}>New Post</button>
    </CSSDownbar>
  );
};

export default Downbar;
