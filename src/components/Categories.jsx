import React,  {useState, useEffect} from 'react';
import { categories } from '../data/categories';
import { Skeleton } from '@mui/material';
const Categories = () => {
    const [showCategories, setShowCategories] = useState(false);

    useEffect(() => {
        setTimeout(() => {
          setShowCategories(true)
        }, [5000])
      }, [])
    // console.log(categories)
  return (
    <div className='px-[20px] pt-[1.5rem]  bg-white flex flex-row overflow-x-auto gap-[2rem]'>
      {
        categories.map((item) => (
            <div key={item.id} className='flex justify-center flex-col items-center gap-2'>
                <div className='w-[3rem] h-[3rem] overflow-hidden rounded-full'>
                    {showCategories ? 
                    <img src={item.image} alt={item.description} className='h-[3rem] w-[4rem]'/> :
                    <div className='border border-red-500 relative bottom-[1.35rem] right-2'>
                        <Skeleton sx={{ bgcolor: 'grey.500' }} animation="wave" height={90}  width={60} className='border'/> 
                    </div>
                    
                }
                    
                
                </div>
                <h1 className='text-[12px] font-light text-center font-sans'>{item.name}</h1>
            </div>
        ))
      }
    </div>
  );
}

export default Categories;
