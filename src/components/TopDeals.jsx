import React from 'react';

const TopDeals = ({name, image, discount, actualPrice, discountPrice}) => {
   
  return (
    <div className='w-[9rem] bg-white overflow-hidden '>
      <div>
        <div className='absolute text-end   backdrop-blur-sm bg-orange-500/30 rounded-sm  px-[3px] py-[1px]'>
            {/* <div className=''> */}
                <h1 className='text-end text-white'>-18%</h1>
            {/* </div> */}
        </div>
        <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/6018491/1.jpg?4977" alt="image" className='w-[8rem] h-[8rem]'/>
      </div>
      <div className='w-[90%] trunc'>
        <h1 className='font-mono'>Redmi note 10 pro 6 'inches'</h1>
        <p className=''>#150, 000</p>
        
        <p className='line-through text-[15px] text-slate-500'>#150, 000</p>
      </div>
    </div>
  );
}

export default TopDeals;
