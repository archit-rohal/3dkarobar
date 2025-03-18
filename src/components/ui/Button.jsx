
import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const buttonVariants = {
  variant: {
    default: 'bg-busybee-500 text-white hover:bg-busybee-600 active:bg-busybee-700',
    outline: 'border border-busybee-500 text-busybee-500 bg-transparent hover:bg-busybee-50 active:bg-busybee-100',
    ghost: 'bg-transparent hover:bg-busybee-50 text-busybee-500 active:bg-busybee-100',
    link: 'bg-transparent p-0 h-auto text-busybee-500 hover:text-busybee-600 active:text-busybee-700 underline-offset-4 hover:underline',
    secondary: 'bg-secondary text-foreground hover:bg-secondary/80',
  },
  size: {
    default: 'h-10 py-2 px-4',
    sm: 'h-9 px-3 text-sm',
    lg: 'h-12 px-6 text-lg',
    icon: 'h-10 w-10',
  }
};

const Button = forwardRef(({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  to,
  ...props
}, ref) => {
  const variantClasses = buttonVariants.variant[variant];
  const sizeClasses = buttonVariants.size[size];
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50';
  
  const classes = cn(
    baseClasses,
    variantClasses,
    sizeClasses,
    className
  );

  if (to) {
    return <Link to={to} className={classes} ref={ref} {...props} />;
  }

  return <button className={classes} ref={ref} {...props} />;
});

Button.displayName = 'Button';

export { Button, buttonVariants };
