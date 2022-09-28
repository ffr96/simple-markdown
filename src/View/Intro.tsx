import { Helper } from '@/features/helper';
import { Markdown } from '../features/markdown/';

const Intro = () => {
  return (
    <div>
      <Helper />
      <h2 className='text-3xl'>Example of how the Simple Markdown works</h2>
      <p className='text-lg'>
        Simply write on the Markdown Input Area and see how the Markdown View
        updates{' '}
      </p>
      <Markdown />
    </div>
  );
};

export default Intro;
