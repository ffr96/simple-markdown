import { marked } from 'marked';

import CenterBox from '../../../../components/Layout/CenterBox';

export const HtmlView = ({ html }: { html: string }) => {
  return (
    <CenterBox
      className='bg-slate-400 break-all rounded-md 
    shadow-lg shadow-blue-200 mt-20 md:max-w-[40vw] w-full p-4'
    >
      <pre className='whitespace-pre-wrap text-black'>{marked.parse(html)}</pre>
    </CenterBox>
  );
};
