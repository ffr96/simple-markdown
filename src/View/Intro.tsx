import { MarkdownInput } from '../features/markdown/components/MarkdownInput';

const Intro = () => {
  return (
    <div>
      <h2 className='text-3xl'>
        This is an example of how the Simple Markdown works
      </h2>
      <p className='text-lg'>
        Simply write on the Markdown Input Area and see how the Markdown View
        updates{' '}
      </p>
      <MarkdownInput />
    </div>
  );
};

export default Intro;
