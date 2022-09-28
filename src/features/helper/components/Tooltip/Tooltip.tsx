import { TooltipInfo } from './TooltipInfo';
import { useState, useEffect } from 'react';

export const Tooltip = () => {
  const [showingHelper, setUseHelper] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (showingHelper) {
      setTimeout(() => {
        setShowText(true);
      }, 200);
    }
  }, [showingHelper]);

  return (
    <>
      <div
        onClick={() => setUseHelper(!showingHelper)}
        className='bg-slate-200 text-center shadow-md
     hover:scale-125 text-black h-5 w-5 absolute cursor-pointer rounded-full'
      >
        ?
      </div>
      <div
        onClick={() => {
          setUseHelper(!showingHelper);
          setShowText(false);
        }}
        className={`transition-all duration-500 relative h-1 w-1
          ${showingHelper ? 'w-[220px] h-[300px] rounded-lg' : ''}
        bg-slate-200 shadow-md text-black text-center`}
      >
        {showText && <TooltipInfo />}
      </div>
    </>
  );
};
