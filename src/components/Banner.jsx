import React from 'react';
import { banner } from '../data/banner';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const Banner = () => {
  return (
    <div className='px-[20px] pt-[1rem] bg-white'>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
        className="mySwiper"
      >
         {
            banner.map((item) => (
                <SwiperSlide key={item.id}>
                    <img src={item.image} alt="image" className='w-[100%] h-[12.5rem] rounded-b-xl'/>
                    {/* <h1>{item.id}</h1> */}
                </SwiperSlide> 
      
            ))
         }
         </Swiper>
    </div>
  );
}

export default Banner;

