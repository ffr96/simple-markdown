import { marked } from 'marked';

import CenterBox from '../../../../components/Layout/CenterBox';

export const HtmlView = ({ html }: { html: string }) => {
  return (
    <CenterBox
      className='bg-slate-400 break-all rounded-md 
    shadow-lg shadow-blue-200 mt-20 max-w-xl min-h-full w-full'
    >
      {marked.parse(html)}
    </CenterBox>
  );
};
