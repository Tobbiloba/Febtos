// import React, {useState, useEffect} from 'react';

// const NikeCategory = ({name, price, color, images, gender}) => {
//     const [currentImage, setCurrentImage] = useState(0)
//     const [showSubImage, setShowSubImage] = useState(false)
//     const handleShowSubImage = () => {
//         if (color > 1) {
//             setShowSubImage(!showSubImage);
//         }
        
//     }
//     // console.log(images)
//     // console.log(images[currentImage])
//   return (
//     <div className='mt-[4rem]' onMouseEnter={handleShowSubImage} onMouseLeave={handleShowSubImage}>
//       <img src={images[currentImage].imageUrl} alt="image" className='rounded-2xl'/>
//       {
//         showSubImage ? <div className='mt-[1rem] padding'>
//         <h1 className='text-[20px] font-mono'>{name}</h1>
//         <p className='text-[16px] text-slate-500 font-mono'>{gender} Shoes</p>
//         <p className='text-[16px] text-slate-500 font-mono'>{color} {
//             color > 1 ? 'Colours' : 'Colour'
//             }</p>
//             <p className='text-[17px] font-mono'>${price}</p>
//       </div> : <div className='mt-[1rem] padding flex flex-col'>
//         <div className='flex fle-row gap-2'>
//             {images.map((item) => (
//                 <div key={item.id}>
//                     <img src={item.imageUrl} alt="image" className='w-[3rem] h-[3rem]'onMouseEnter={() => {setCurrentImage(item.id)}}/>
//                 </div>
//             ))}
//         </div>
            
//             <p className='text-[17px] font-mono mt-3'>${price}</p>
//       </div>
//       }
      
//     </div>
//   );
// }

// export default NikeCategory;


import React, { useState } from 'react';

const NikeCategory = ({ name, price, color, images, gender }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showSubImage, setShowSubImage] = useState(true);

  const handleShowSubImage = () => {
    if (color > 1) {
      setShowSubImage(!showSubImage);
    }
  };

  return (
    <div className='mt-[3rem] mb-[3rem]' onMouseEnter={handleShowSubImage} onMouseLeave={handleShowSubImage}>
      <img src={images[currentImage].imageUrl} alt="image" className='rounded-2xl w-[9rem] h-[9rem]' />
      {showSubImage ? (
        <div className='mt-[1rem]'>
          <h1 className='text-[14px] text-center font-mono'>{name}</h1>
          <p className='text-[16px] ml-[8px] text-slate-500 font-mono'>{gender} Shoes</p>
          <p className='text-[16px] ml-[8px] text-slate-500 font-mono'>{color} {color > 1 ? 'Colours' : 'Colour'}</p>
          <p className='text-[17px] ml-[8px] font-mono'>${price}</p>
        </div>
      ) : (
        <div className='mt-[1rem] flex flex-col'>
          <div className='flex flex-row gap-2 flex-wrap'>
            {images.map((item) => (
              <div key={item.id}>
                <img
                  src={item.imageUrl}
                  alt="image"
                  className='w-[2.5rem] h-[2.5rem]'
                  onMouseEnter={() => setCurrentImage(item.id)} // Fix the index here
                />
              </div>
            ))}
          </div>
          <p className='text-[17px] font-mono mt-3'>${price}</p>
        </div>
      )}
    </div>
  );
};

export default NikeCategory;
