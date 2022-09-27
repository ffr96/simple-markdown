import clsx from 'clsx';
import { ComponentProps } from 'react';

const CenterBox = ({ ...props }: ComponentProps<'div'>) => {
  return (
    <div className={clsx('flex flex-col md:m-2 items-center', props.className)}>
      {props.children}
    </div>
  );
};

export default CenterBox;
