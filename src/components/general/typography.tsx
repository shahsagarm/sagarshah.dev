import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { mergeClasses } from '@/lib/utils';

const typographyVariants = cva('text-gray-600 text-normal', {
  variants: {
    variant: {
      h1: 'text-4xl font-semibold md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl lg:leading-[72px] text-gray-900',
      body2: 'text-base',
    },
  },
  defaultVariants: {
    variant: 'body2',
  },
});

interface TypographyProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
    VariantProps<typeof typographyVariants> {}

let elementMapping = {
  h1: 'h1',
  body2: 'p',
};

type ComponentElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

const Typography = React.forwardRef<
  HTMLHeadingElement | HTMLParagraphElement,
  TypographyProps
>(({ className = '', variant, children, ...props }: TypographyProps, ref) => {
  const Comp = (variant ? elementMapping[variant] : 'p') as ComponentElement;

  return (
    <Comp
      className={mergeClasses(typographyVariants({ variant }), className)}
      ref={ref}
      {...props}
    >
      {children}
    </Comp>
  );
});

Typography.displayName = 'Typography';

export default Typography;
