import React from 'react';
import { nikeCategories } from '../data/nikeCategories';
import NikeCategory from './NikeCategory';
const NikeOfficialStore = () => {
    
    // console.log(nikeCategories)
  return (
    <div className=' bg-white h-fit mt-[4rem]'>
        <div className='bg-slate-400 px-[1.5rem] py-[.5rem]'>
            <h1 className='text-white text-xl font-bold font-mono'>Nike Official Store</h1>
        </div>
        <div className='padding'>
            {
        nikeCategories.map((item) => (
            <NikeCategory key={item.id} color={item.color} name={item.name} price={item.price} gender={item.gender}  images={item.subImage}/>
        ))
      }
        </div>
      
    </div>
  );
}

export default NikeOfficialStore;
