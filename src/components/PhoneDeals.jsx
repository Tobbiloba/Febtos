import React from 'react';
import { phoneDeals } from '../data/phoneDeal';
const PhoneDeals = () => {
  return (
    <div className='bg-white'>
      <div className='bg-slate-400 px-[1.5rem] py-[.25rem] text-center'>
            <h1 className='text-white text-[18px] font-bold font-mono'>Phone Deals</h1>
        </div>
        <div className='flex flex-row flex-wrap justify-between padding'>
        {
            phoneDeals.map((item) => (
                <div key={item.id} className='mt-[1rem] rounded-md overflow-hidden'>
                    <img src={item.image} alt="phones" className='w-[7rem] h-[8.5rem]'/>
                    <div className=' h-2 relative bottom-[1rem] '>
                        <h1 className='backdrop-blur-sm bg-black/70 text-white text-[12px] py-1 text-center font-mono font-bold rounded-b-md'>{item.name}</h1>
                    </div>
                </div>
            ))
        }
        </div>
    </div>
  );
}

export default PhoneDeals;
