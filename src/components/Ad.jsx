import React from 'react';

const Ad = ({text, image, buttonText, styles}) => {
  return (
    <div className='padding mt-[1.5rem] '>
      <div className='w-[100%] h-[8rem] rounded-2xl bg-orange-600 flex flex-row justify-between'>
        <div className='px-3 py-3 h-[100%] flex flex-col justify-between'>
          <h1 className='text-[19px] text-white font-mono font-bold'>Get your special <br /> sale up to 50%</h1>
          <button className='border px-3 py-1 rounded-2xl text-[16px] text-orange-600 font-bold bg-white w-fit'>Shop now!</button>
        </div>
        <div className='w-[40%] h-[100%]'>
          <img src="/bag.png" alt="bag" className='object-contain'/>
        </div>
      </div>
    </div>
  );
}

export default Ad;
