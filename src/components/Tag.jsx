import React from 'react';

const Tag = ({title, bg, link}) => {
  return (
    <div className={`${bg} px-[1.5rem] py-[.3rem] flex flex-row ${link ? 'justify-between' : 'justify-center'} items-center w-[100vw]`}>
            <h1 className='text-white text-[18px] font-bold font-mono'>{title}</h1>
            {
                link && <p className='text-slate-900 text-[15px] font-mono'>SEE ALL</p>
            }
            
        </div>
  );
}

export default Tag;
