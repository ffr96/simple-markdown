export const TooltipInfo = () => {
  return (
    <div>
      <ul>
        <li className='text-left px-2 font-mono border-b-2 border-blue-400'>
          <b>Cheatsheet</b>
        </li>
        <li className='bg-white'>
          **a** is <b>black</b>
        </li>
        <li>
          __a__ is <i>italic</i>
        </li>
        <li className='bg-white'>
          ~~a~~ is <del>del</del>
        </li>
        <li>
          (a)[url] is <a href='/'>hyperlink</a>
        </li>
        <li className='bg-white'>!(a)[url] is for {'<img>'}</li>
        <li>
          {'>'} a is <span className='bg-slate-300 px-1'>quote</span>
        </li>
        <li className='bg-white'>1. a is for ordered list</li>
        <li>- a is for unordered list</li>
        <li className='w-full whitespace-nowrap bg-white'>
          | and -- can create tables
        </li>
        <li>
          ``a`` is for <code className='bg-white'>code</code>
        </li>
      </ul>
    </div>
  );
};
