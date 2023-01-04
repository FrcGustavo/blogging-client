import React, { FC } from 'react'
import Link from 'next/link';
import styles from './Button.module.css';

type ButtonProps = ({
  href?: never
  type?: 'button' | 'submit' | 'reset'
  onHandleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
} | {
href: string
type?: never
onHandleClick?: never
}) & { children: React.ReactNode | string }

const Button: FC<ButtonProps> = ({ children, type = 'button', href, onHandleClick }) => {
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