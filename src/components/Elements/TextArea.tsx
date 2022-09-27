import { ComponentProps } from 'react';
import clsx from 'clsx';

export const TextArea = ({ ...props }: ComponentProps<'textarea'>) => {
  return (
    <textarea
      {...props}
      className={clsx(
        'p-2 w-2/3 m-4 outline-none rounded-sm max-w-xl',
        props.className
      )}
      placeholder={'Enter your text here'}
    />
  );
};
