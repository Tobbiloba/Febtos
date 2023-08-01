import React from 'react';

const MiniCategory = ({
    title, img
}) => {
  return (
    <div className='mt-[1rem] rounded-md overflow-hidden w-[30%]'>
                    <img src={img} alt="phones" className='w-[100%] h-[8.5rem]'/>
                    <div className=' h-2 relative bottom-[1rem] '>
                        <h1 className='backdrop-blur-sm bg-black/70 text-white text-[12px] py-1 text-center font-mono font-bold rounded-b-md'>{title}</h1>
                    </div>
    </div>
  );
}

export default MiniCategory;
