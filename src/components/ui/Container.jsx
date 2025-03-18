
import React from 'react';
import { cn } from '@/lib/utils';

export function Container({ className, children, as: Component = 'div', ...props }) {
  return (
    <Component
      className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Section({ className, children, ...props }) {
  return (
    <section
      className={cn('py-16 md:py-24', className)}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  );
}
