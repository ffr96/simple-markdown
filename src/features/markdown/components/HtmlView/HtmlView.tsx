import { marked } from 'marked';
import { TitleText } from '../TitleText/TitleText';

import CenterBox from '@/components/Layout/CenterBox';

export const HtmlView = ({ html }: { html: string }) => {
  return (
    <CenterBox
      className='bg-slate-400 break-all rounded-md transition-all 
    shadow-lg shadow-blue-200 mt-20 md:max-w-[40vw] w-full'
    >
      <TitleText className='text-rose-600'>HTML Previewer</TitleText>
      <pre className='whitespace-pre-wrap text-black p-6 w-full font-lg'>
        {marked.parse(html)}
      </pre>
    </CenterBox>
  );
};
