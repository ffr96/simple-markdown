import CenterBox from '@/components/Layout/CenterBox';
import { Tooltip } from './Tooltip/Tooltip';

export const Helper = () => {
  return (
    <CenterBox className='fixed top-0 left-0 p-2 px-4'>
      <Tooltip />
    </CenterBox>
  );
};
