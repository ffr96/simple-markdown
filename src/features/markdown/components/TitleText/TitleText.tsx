import { ComponentProps } from 'react';
import clsx from 'clsx';

export const TitleText = ({ ...props }: ComponentProps<'h3'>) => {
  return (
    <h3
      className={clsx(
        `text-lg font-medium font-sans text-start 
    self-start p-1 bg-blue-200 border-y-4 border-blue-300 w-full h-fit
    `,
        props.className
      )}
    >
      {props.children}
    </h3>
  );
};
