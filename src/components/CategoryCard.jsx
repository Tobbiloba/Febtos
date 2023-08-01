import React, {useEffect, useState} from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Skeleton } from '@mui/material';
const CategoryCard = ({name, image, price, colors}) => {
  const [showContent, setShowContent] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false)
  
  const handleShowWishlist = () => {
    setShowWishlist(!showWishlist)
  }

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true)
    }, [5000])
  })

  // console.log(colors)
  return (
    <div className='px-2 bg-white rounded-2xl w-[8.5rem] overflow-hidden h-[10rem] mt-[1rem]' onMouseEnter={handleShowWishlist} onMouseLeave={handleShowWishlist}>
      {
        showContent ?
      
      <div>
        <div className='relative h-2 flex justify-end'>
        {showWishlist && <div className='border relative left-[.75rem] bg-orange-500 h-[2.5rem] w-[2.5rem] flex items-center justify-center rounded-md'>
          <FavoriteBorderIcon className='text-white'/>
          </div>}
      </div>
      <div className='w-[100%] flex justify-center'>
<img src={image} alt="image"className='h-[5rem] w-auto'/>
        </div>
      
      <h1 className='font-medium font-sans text-[15px] text-slate-800 w-[100%] trunc'>{name}</h1>
      <div className='flex flex-row justify-between mt-2'>
        <p className='font-light font-sans text-[12px]'>{price}</p>
        <div className='flex flex-row items-center gap-1'>
          {/* {
            colors.map((item) => (
              <div key={item.color} className={`${item.color === 'white' && 'bg-white'}
                              ${item.color === 'black' && 'bg-black'}
                              ${item.color != 'white' && item.color != 'black' ? `bg-${item.color}-500` : ''}
                              w-6 h-6
              `}></div>
            ))
          } */}

{/* {colors.map((item) => {
  console.log(item.color)
  return (
        <div
          key={item.color}
          // className={`w-3 h-3 ${
          //   item.color === 'white'
          //     ? 'bg-white'
          //     : item.color === 'black'
          //     ? 'bg-black'
          //     : `bg-${item.color}-200`
          // }`}
          // className={`w-3 h-3 ${item.color === 'white' ? 'bg-white' : item.color === 'black' ? 'bg-black' : `bg-${item.color}-500`}`}

          className={`bg-${item.color}-500 w-4 h-4 rounded-full`}

          // className={`w-3 h-3 ${item.color === 'white' ? 'bg-white' : item.color === 'black' ? 'bg-black' : item.color !== 'white' && item.color !== 'black' ? `bg-${item.color}-500` : ''}`}
        ></div>
      )})} */}
      <div className='w-3 h-3 rounded-full bg-rose-950 border border-orange-500 p-[1px]'></div>
      <div className='w-3 h-3 rounded-full bg-blue-950'></div>
      <div className='w-3 h-3 rounded-full bg-lime-950'></div>
      {/* <div className='w-4 h-4 rounded-full bg-yellow-500'></div> */}
      <div className='w-3 h-3 rounded-full bg-red-950'></div>
        </div>
      </div>
      </div> : <div className='relative bottom-[6rem] right-[2rem]'>
      <Skeleton sx={{ bgcolor: 'grey.500' }} animation="wave" height={425} width={200}/>
      </div>
      }
    </div>
  );
}

export default CategoryCard;
