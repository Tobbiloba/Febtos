import React, {useState, useEffect} from 'react';

const NikeCategory = ({name, price, color, images, gender}) => {
    const [currentImage, setCurrentImage] = useState(0)
    const [showSubImage, setShowSubImage] = useState()
    // console.log(images)
    console.log(images[currentImage])
  return (
    <div className='mt-[4rem]'>
      <img src={images[currentImage].imageUrl} alt="image" className='rounded-2xl'/>
      <div className='mt-[1rem] padding'>
        <h1 className='text-[20px] font-mono'>{name}</h1>
        <p className='text-[16px] text-slate-500 font-mono'>{gender} Shoes</p>
        <p className='text-[16px] text-slate-500 font-mono'>{color} {
            color > 1 ? 'Colours' : 'Colour'
            }</p>
            <p className='text-[17px] font-mono'>${price}</p>
      </div>
    </div>
  );
}

export default NikeCategory;
