import React, {useState} from 'react';
// AiOutlineCaretLeft
// AiOutlineHeart
// AiOutlineShareAlt
import {AiOutlineShareAlt, AiOutlineHeart, AiOutlineLeft, AiFillStar} from 'react-icons/ai'
import { Link } from 'react-router-dom';

import '../styles/showNav.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';

const ProductDetails = () => {
  const [active, setActive] = useState(1)
  return (
    <div className=' bg-slate-100'>
      <div className='absolute z-[100] text-[24px] top-[1rem] px-[1rem] w-[100vw] left-0 flex justify-between items-center'>
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
        <div>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper bg-slate-100  h-[25rem] pt-[1rem]">
        <SwiperSlide className='w-[100%] h-[20rem]  flex justify-center'>
          <img src="/iphone14.png" alt="product" className='w-auto h-[100%]'/>
        </SwiperSlide>
        <SwiperSlide className='w-[100%] h-[20rem]  flex justify-center'>
          <img src="/iphone14.png" alt="product" className='w-auto h-[100%]'/>
        </SwiperSlide>
        <SwiperSlide className='w-[100%] h-[20rem]   flex justify-center'>
          <img src="/iphone14.png" alt="product" className='w-auto h-[100%]'/>
        </SwiperSlide>
        <SwiperSlide className='w-[100%] h-[20rem]   flex justify-center'>
          <img src="/iphone14.png" alt="product" className='w-auto h-[100%]'/>
        </SwiperSlide>
        <SwiperSlide className='w-[100%] h-[20rem]   flex justify-center'>
          <img src="/iphone14.png" alt="product" className='w-auto h-[100%]'/>
        </SwiperSlide>
      
      </Swiper>
        </div>

        <div className='px-[20px] pt-[1rem] bg-white rounded-t-[2rem]'>
        <div>
        <div className=''>
          <h1 className='text-xl font-sans font-medium text-slate-800'>Wireless Headphone</h1>
          <p className='text-[17px] font-sans font-medium text-slate-800'>$520.00</p>
        </div>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row items-end gap-2'>
          <div className='flex flex-row text-white bg-orange-500 w-fit px-[5px] py-[2px] text-[14px] rounded-xl justify- font-sans items-center font-medium gap-1'>
            <AiFillStar />
            4.8
          </div>
          <div className='text-[13px] text-slate-500'>
            (320 Reviews)
          </div>
          </div>
          <div className='text-[17px]'>
            <p className='text-[16px]'>Seller: <span className='font-medium font-sans'> Tauriq Islam</span></p>
          </div>
        </div>

      <div className='mt-4'>
                <p className='text-[16px] font-medium font-sans '>Color</p>
                <div className='flex flex-row gap-3'>
                <div className='w-6 h-6 rounded-full  bg-rose-950 border border-orange-500 p-[1px]'></div>
                    <div className='w-6 h-6 p-1 rounded-full bg-blue-950'></div>
                  <div className='w-6 h-6 rounded-full bg-lime-950'></div>
                    <div className='w-6 h-6 rounded-full bg-red-700'></div>
                    <div className='w-6 h-6 rounded-full bg-gray-500'></div>
                    {/* <div className='w-5 h-5 rounded-full bg-lime-950'></div> */}
                </div>
                
              </div>
        </div>
        

        <div className='mt-[2rem]'>
          <div className='flex flex-row justify-between items-center'>
            <h1 className={`font-mono text-[15px] cursor-pointer ${active === 1 ? 'text-white bg-orange-500 px-4 rounded-2xl  py-[5px]' : 'text-black'}`} onClick={() => setActive(1)}>Description</h1>
            <h1 className={`font-mono text-[15px] cursor-pointer ${active === 2 ? 'text-white bg-orange-500 px-4 rounded-2xl  py-[5px]' : 'text-black'}`} onClick={() => setActive(2)}>Specifications</h1>
            <h1 className={`font-mono text-[15px] cursor-pointer  ${active === 3 ? 'text-white bg-orange-500 px-4 rounded-2xl  py-[5px]' : 'text-black'}`} onClick={() => setActive(3)}>Reviews</h1>
          </div>
          <div className='mt-[1rem]'>
            <p className='font-mono text-slate-600 text-[15px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </div>

      <div className='fixed bottom-[1rem] flex flex-row justify-between items-center px-3 py-3 rounded-[4rem] bg-black w-[90vw] left-[5vw] text-white'>
        <div className='flex flex-row border gap-[1.5rem] px-4 rounded-2xl font-mono py-1'>
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </div>
        <div>
          <button className='bg-orange-500 px-6 font-mono py-2 rounded-[2rem]'>Add to cart</button>
        </div>
      </div>
        
        </div>
    </div>
  );
}

export default ProductDetails;
