import { marked } from 'marked';
import CenterBox from '../../../../components/Layout/CenterBox';

import './MarkdownView.css';

export const MarkdownView = ({ html }: { html: string }) => {
  return (
    <CenterBox className='bg-slate-300 rounded-md shadow-lg shadow-slate-400 mt-20 min-h-full w-full'>
      {html && (
        <div
          id='markdown-view'
          className='p-6 w-full break-words'
          dangerouslySetInnerHTML={{
            __html: marked.parse(html, { breaks: true }),
          }}
        />
      )}
    </CenterBox>
  );
};

{
  /**
   *       <ReactMarkdown
        children={html}
        components={{
          h1: ({ ...props }) => {
            return (
              <h1 className='text-4xl border-b-2 mb-6 border-lime-900 text-slate-900'>
                {props.children}
              </h1>
            );
          },
          h2: ({ ...props }) => {
            return (
              <h2 className='text-3xl border-b-2 mb-6 border-green-900 text-slate-800'>
                {props.children}
              </h2>
            );
          },
          h3: ({ ...props }) => {
            return (
              <h3 className='text-2xl border-b-2 mb-6 border-green-900 text-slate-700'>
                {props.children}
              </h3>
            );
          },
          p: ({ ...props }) => {
            return <p className='text-lg text-slate-900'>{props.children}</p>;
          },
        }}
      />
   */
}
