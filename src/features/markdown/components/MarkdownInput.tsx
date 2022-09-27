import { useState } from 'react';
import { TextArea } from '../../../components/Elements/TextArea';
import { MarkdownView } from './MarkdownView/MarkdownView';
import { HtmlView } from './HtmlView/HtmlView';
import CenterBox from '../../../components/Layout/CenterBox';

export const MarkdownInput = () => {
  const [input, setInput] = useState('');

  return (
    <>
      <CenterBox className='bg-slate-300 rounded-md shadow-lg shadow-slate-400 text-black'>
        <h3
          className='text-lg font-medium font-sans text-start 
      self-start p-1 bg-blue-200 border-y-4 border-blue-300 w-full h-full
      '
        >
          Markdown Input
        </h3>
        <TextArea
          id='editor'
          autoFocus
          value={input}
          className='text-blue-200 min-h-[250px] transition-shadow shadow-none focus:shadow-lg focus:shadow-blue-300'
          onChange={(e) => setInput(e.target.value)}
        />
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
