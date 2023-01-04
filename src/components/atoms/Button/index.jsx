import Link from 'next/link';
import styles from './Button.module.css';

const Button = ({ children, type = 'button', href, onHandleClick }) => {
  if (!href) {
    return (
      <button type={type} onClick={onHandleClick} className={styles.button}>
        {children}
      </button>
    );
  } else {
    return (
      <Link href={href} passHref className={styles.buttonLink}>
        {children}
      </Link>
    );
  }
};

export default Button;
