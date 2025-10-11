import NextLink from 'next/link';
import MuiButton from '@mui/material/Button';
import type { ComponentProps, ReactNode } from 'react';

type MuiButtonComponentProps = ComponentProps<typeof MuiButton>;

type ButtonProps = Omit<
  MuiButtonComponentProps,
  'children' | 'type' | 'onClick' | 'href' | 'component'
> & {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  onHandleClick?: MuiButtonComponentProps['onClick'];
};

const buttonStyles = {
  borderRadius: '7px',
  paddingY: 0.875,
  paddingX: 1.75,
  boxShadow: '0 0 7px rgba(0, 0, 0, 0.14)',
};

const Button = ({
  children,
  type = 'button',
  href,
  onHandleClick,
  ...props
}: ButtonProps) => {
  if (href) {
    return (
      <MuiButton
        LinkComponent={NextLink}
        href={href}
        variant="contained"
        color="secondary"
        sx={buttonStyles}
        {...props}
      >
        {children}
      </MuiButton>
    );
  }

  return (
    <MuiButton
      type={type}
      variant="contained"
      color="secondary"
      onClick={onHandleClick}
      sx={buttonStyles}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
