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
import Tag from './Tag';


const TopPhoneDeals = () => {
  return (
    <div className='pb-[3rem] overflow-hidden w-[100vw'>
        <Tag title="Top Phone Deals" bg='bg-slate-400' link='top-phone-deals'/>
        <div className='padding flex flex-row  mt-[2rem] gap-[2rem]  padding w-[100vw]'>
            
            <Swiper
        slidesPerView={3}
        spaceBetween={150}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper "
      >
        <SwiperSlide className=''>
        <TopDeals />
        </SwiperSlide>
        <SwiperSlide >
        <TopDeals />
        </SwiperSlide>
        <SwiperSlide >
        <TopDeals />
        </SwiperSlide>
        <SwiperSlide >
        <TopDeals />
        </SwiperSlide>
        <SwiperSlide >
        <TopDeals />
        </SwiperSlide>
        <SwiperSlide >
        <TopDeals />
        </SwiperSlide>
        {/* <TopDeals />
        <TopDeals />
        <TopDeals />
        <TopDeals />
        <TopDeals />
        <TopDeals />
        <TopDeals /> */}
      </Swiper>
        </div>
      
    </div>
  );
}

export default TopPhoneDeals;
