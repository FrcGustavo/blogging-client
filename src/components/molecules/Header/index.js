import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css'

const Header = ({ shadow }) => {
  return (
    <header className={`${styles.header} ${shadow ? 'shadow-md' : ''}`}>
      <section className={styles.headerContainer}>
        <Link href="/" passHref className={styles.headerLogo}>
            <Image
              src="/icons/bloging-logo-192.png"
              width={40}
              height={40}
              alt="blogging logo"
            />
        </Link>
        <nav className={styles.headerNav}>
          <Link href="/" passHref className={styles.headerNavItem}>Home</Link>
          <Link href="/blog" passHref className={styles.headerNavItem}>Blog</Link>
        </nav>
      </section>
    </header>
  );
};

export default Header;
