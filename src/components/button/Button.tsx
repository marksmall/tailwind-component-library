import { ReactNode } from 'react';

import classNames from 'classnames';

export type ButtonProps = {
  variant?: 'primary' | 'secondary';
  size?: 'large' | 'medium' | 'small';
  // rounded?: boolean; // none, sm, md, lg, full.
  rounded?: string; // none, sm, md, lg, full.
  bgColor?: string;
  onClick: () => void;
  disabled?: boolean;
  children: ReactNode;
};

export const Button = ({
  variant,
  size = 'medium',
  rounded,
  bgColor,
  onClick,
  disabled = false,
  children,
  ...props
}: ButtonProps) => {
  // const roundedClass = `rounded-${rounded}`;

  const styles = classNames('px-3 py-2 border-2 rounded-md', {
    'bg-primary-500 text-white hover:bg-primary-300 active:bg-primary-700': variant === 'primary',
    'bg-secondary-500 text-white hover:bg-secondary-300 active:bg-secondary-700':
      variant === 'secondary',
    ' opacity-50 cursor-not-allowed': disabled,
    'px-6 py-4 text-base': size === 'large',
    'px-5 py-3 text-sm': size === 'medium',
    'px-4 py-2 text-xs': size === 'small',
    'rounded-full': rounded === 'full',
    'rounded-md': rounded === 'md',
    // [roundedClass]: rounded !== 'none',
  });

  return (
    <button
      className={styles}
      disabled={disabled}
      style={{ backgroundColor: bgColor }}
      type="button"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
