import React from 'react';
import CategoryCard from './CategoryCard';
import { specialForYou } from '../data/specialForYou';
const SpecialForYou = () => {
    // console.log(specialForYou)
  return (
    <div className='padding mt-[2rem] '>
      <h1 className='text-xl text-slate-600 font-bold'>Special For You</h1>

        <div className='flex flex-row flex-wrap justify-evenly gap-[.5rem] pb-[3rem]'>
            {
                    specialForYou.map((item) => (
                        <CategoryCard name={item.name} key={item.id} image={item.image} colors={item.colors} price={item.price}/>
                    ))
                }
        </div>
      
    </div>
  );
}

export default SpecialForYou;
