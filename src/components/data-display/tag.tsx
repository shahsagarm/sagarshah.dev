import * as React from 'react';

import { mergeClasses } from '@/lib/utils';

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({ label, className, ...props }: TagProps, ref) => {
    return (
      <div
        className={mergeClasses(
          'inline-block rounded-xl bg-gray-200 px-5 py-1 text-sm font-medium',
          className
        )}
        {...props}
      >
        {label}
      </div>
    );
  }
);

Tag.displayName = 'Tag';

export default Tag;
