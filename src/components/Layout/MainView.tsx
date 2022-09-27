import { ComponentProps } from 'react';
import clsx from 'clsx';

const MainView = ({ ...props }: ComponentProps<'div'>) => {
  return (
    <div className={clsx('min-h-[90vh] min-w-[100vw]', props.className)}>
      {props.children}
    </div>
  );
};

export default MainView;
