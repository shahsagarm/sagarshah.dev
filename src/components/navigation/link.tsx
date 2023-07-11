import * as React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import { mergeClasses } from '@/lib/utils';

type LinkProps = NextLinkProps & {
  className?: string;
  children?: React.ReactNode;
  noCustomization?: boolean;
};

const Link = ({
  noCustomization,
  children = null,
  className = '',
  ...props
}: LinkProps) => {
  return (
    <NextLink
      {...props}
      className={mergeClasses(
        noCustomization ??
          'text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600',
        className
      )}
    >
      {children}
    </NextLink>
  );
};

export default Link;
