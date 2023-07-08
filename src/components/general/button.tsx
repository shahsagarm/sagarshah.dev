'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { mergeClasses } from '@/lib/utils';

const buttonVariants = cva('items-center justify-center rounded-xl', {
  variants: {
    variant: {
      contained:
        'bg-gray-900 hover:bg-gray-700 active:bg-gray-800 font-semibold text-gray-50 transition-colors duration-200',
    },
    size: {
      md: 'px-4 py-2',
    },
    fullWidth: {
      true: 'flex w-full',
      false: 'inline-flex',
    },
  },
  defaultVariants: {
    variant: 'contained',
    size: 'md',
    fullWidth: false,
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, fullWidth = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={mergeClasses(
          buttonVariants({ variant, size, fullWidth }),
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export default Button;
