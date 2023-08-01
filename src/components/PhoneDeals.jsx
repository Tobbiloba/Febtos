import React from 'react';
import { phoneDeals } from '../data/phoneDeal';
import Tag from './Tag';
import MiniCategory from './MiniCategory';
const PhoneDeals = () => {
  return (
    <div className='mt-[3rem] bg-white mb-[4rem]'>
      <Tag title='Phone Deals' bg='bg-slate-400'/>
        <div className='flex flex-row flex-wrap justify-between padding'>
        {
            phoneDeals.map((item) => (
                <MiniCategory key={item.id} img={item.image} title={item.name}/>
            ))
        }
        </div>
    </div>
  );
}

export default PhoneDeals;
