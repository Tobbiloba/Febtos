import React from 'react';
import TopDeals from './TopDeals';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';


const TopPhoneDeals = () => {
  return (
    <div className='pb-[3rem] overflow-hidden w-[100vw'>
        <div className='bg-slate-400 px-[1.5rem] py-[.25rem] text-center'>
            <h1 className='text-white text-[18px] font-bold font-mono'>Top Phone Deals</h1>
        </div>
        <div className='padding flex flex-row  mt-[2rem] gap-[2rem]  padding w-[100vw]'>
            
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper flex flex-row overflow-x-auto gap-[4rem]"
      >
        <TopDeals />
        <TopDeals />
        <TopDeals />
        <TopDeals />
        <TopDeals />
        <TopDeals />
        <TopDeals />
      </Swiper>
        </div>
      
    </div>
  );
}

export default TopPhoneDeals;
