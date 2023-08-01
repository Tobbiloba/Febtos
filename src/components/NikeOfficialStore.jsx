import React from 'react';
import { nikeCategories } from '../data/nikeCategories';
import NikeCategory from './NikeCategory';
import Tag from './Tag';
const NikeOfficialStore = () => {
    
    // console.log(nikeCategories)
  return (
    <div className=' bg-white h-fit mt-[4rem]'>
        
        <Tag title='Nike Official Store' bg='bg-slate-500' link='/nike-store'/>
        <div className='padding flex flex-row flex-wrap justify-between'>
            {
        nikeCategories.map((item) => (
          <div key={item.id} className='w-[10.5rem]'>
            <NikeCategory  color={item.color} name={item.name} price={item.price} gender={item.gender}  images={item.subImage}/>
            </div>
        ))
      }
        </div>

        {/* <div className='padding flex justify-end mb-[2rem]'>
          <p className='text-slate-500 font-mono'>See more...</p>
        </div> */}
      
    </div>
  );
}

export default NikeOfficialStore;
