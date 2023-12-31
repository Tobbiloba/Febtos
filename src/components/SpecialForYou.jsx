import React from 'react';
import CategoryCard from './CategoryCard';
import { specialForYou } from '../data/specialForYou';
const SpecialForYou = () => {
    // console.log(specialForYou)
  return (
    <div className='padding mt-[2rem] '>
      <h1 className='text-xl text-slate-600 font-bold'>Special For You</h1>

        <div className='flex flex-row overflow-x-auto gap-[1.5rem] pb-[3rem]'>
            {
                    specialForYou.map((item) => (
                      <div className='w-fit' key={item.id}>
                        <CategoryCard name={item.name} key={item.id} image={item.image} colors={item.colors} price={item.price}/>
                        </div>
                    ))
                }
        </div>
      
    </div>
  );
}

export default SpecialForYou;
