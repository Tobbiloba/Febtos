import { useEffect, useState } from 'react';
import React from 'react';
import Skeleton from '@mui/material/Skeleton';
const Ad = ({text, image, buttonText, styles}) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true)
    }, [5000])
  }, [])
  return (
    <div className='padding mt-[1.5rem] h-[10rem]'>
      {
        showContent ? <div className='w-[100%] h-[10rem] rounded-2xl bg-orange-600 flex flex-row justify-between'>
        <div className='px-3 py-3 h-[100%] flex flex-col justify-evenly'>
          <h1 className='text-[19px] text-white font-mono font-bold'>Get your special <br /> sale up to 50%</h1>
          <button className='border px-3 py-1 rounded-2xl text-[16px] text-orange-600 font-bold bg-white w-fit'>Shop now!</button>
        </div>
        <div className='w-[40%] h-[100%] flex justify-center'>
          <img src="/bag.png" alt="bag" className='object-contain'/>
        </div>
      </div> : <div className='relative bottom-[3.65rem]'>
  <Skeleton sx={{ bgcolor: 'grey.500' }} animation="wave" height={265} className='border'/>
  </div>
      }
      
  

    </div>
  );
}

export default Ad;
