import React from 'react';
// AiOutlineCaretLeft
// AiOutlineHeart
// AiOutlineShareAlt
import {AiOutlineShareAlt, AiOutlineHeart, AiOutlineLeft} from 'react-icons/ai'
import { Link } from 'react-router-dom';
const ProductDetails = () => {
  return (
    <div className='px-[20px] py-[1rem] bg-orange-100 h-[100vh]'>
      <div className='absolute text-[24px] top-[1rem] px-[1rem] w-[100vw] left-0 flex justify-between items-center'>
        <div className='p-2 rounded-full shadow-md text-slate-600 bg-slate-50 hover:bg-slate-200 '>
            <Link to='/'>
            <AiOutlineLeft />
            </Link>
            
        </div>
            <div className='flex flex-row gap-[2rem]'>
            <div className='p-2 rounded-full shadow-md text-slate-600 bg-slate-50 hover:bg-slate-200 '>
                <AiOutlineHeart />
            </div>
            <div className='p-2 rounded-full shadow-md text-slate-600 bg-slate-50 hover:bg-slate-200'>
                <AiOutlineShareAlt />
            </div>
            </div>
        </div>
       <div className=''>
        <div></div>
        <div>
        <div></div>
        <div></div>
        </div>
        <div></div>
      </div>

      <div></div>
    </div>
  );
}

export default ProductDetails;
