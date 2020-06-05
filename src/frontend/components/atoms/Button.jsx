import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = ({
  children, to, primary, secondary, onClick,
}) => {
  let styles = 'btn';
  if (primary) {
    styles += ' btn-primary';
  }
  if (secondary) {
    styles += ' btn-secondary';
  }
  if (to !== null) {
    return (
      <Link to={to} className={styles}>
        { children }
      </Link>
    );
  }
  return (
    <button type="button" className={styles} onClick={onClick}>
      { children }
    </button>
  );
};

Button.defaultProps = {
  to: null,
  primary: true,
  secondary: false,
  onClick: null,
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
