import { useState } from 'react';
import { MarkdownView } from './MarkdownView/MarkdownView';
import { MarkdownInput } from './MarkdownInput/MarkdownInput';
import { HtmlView } from './HtmlView/HtmlView';
import CenterBox from '@/components/Layout/CenterBox';

export const Markdown = () => {
  const [input, setInput] = useState('');

  return (
    <>
      <CenterBox className='bg-slate-300 rounded-md shadow-lg shadow-slate-400 text-black'>
        <MarkdownInput input={input} setInput={setInput} />
      </CenterBox>
      {input && (
        <div className='flex flex-col md:flex-row'>
          <MarkdownView html={input} />
          <HtmlView html={input} />
        </div>
      )}
    </>
  );
};
