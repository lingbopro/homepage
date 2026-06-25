import classNames from 'classnames';
import React from 'react';

export interface ButtonProps extends React.ComponentProps<'button'> {
  variant?: keyof typeof buttonVariants;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const buttonVariants = {
  primary:
    'bg-md-primary dark:bg-md-primary-dark text-md-on-primary dark:text-md-on-primary-dark',
  secondary:
    'bg-md-secondary dark:bg-md-secondary-dark text-md-on-secondary dark:text-md-on-secondary-dark',
  tertiary:
    'bg-md-tertiary dark:bg-md-tertiary-dark text-md-on-tertiary dark:text-md-on-tertiary-dark',
  text: 'text-md-on-surface dark:text-md-on-surface-dark hover:bg-md-primary-container/40 dark:hover:bg-md-primary-container-dark/40',
};

export function Button({
  variant = 'primary',
  children,
  className = '',
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button
      className={classNames(
        'py-2 px-4 rounded-4xl text-sm hover:opacity-90 cursor-pointer duration-150 select-none',
        buttonVariants[variant],
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
