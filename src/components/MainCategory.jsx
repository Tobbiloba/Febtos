import React from 'react';
import { mainCategory } from '../data/categories';
const MainCategory = () => {
  return (
    <div className='bg-white mt-[2rem] px-[20px] grid grid-cols-4 gap-4 pt-[2rem]'>
      {
        mainCategory.map((item) => (
            <div key={item.id}>
                <img src={item.img} alt="product" className='border w-[5rem] h-[4rem]'/>
                <h1 className='text-center text-[12px] mt-1 font-sans font-light'>{item.title}</h1>
            </div>
        ))
      }
    </div>
  );
}

export default MainCategory;
