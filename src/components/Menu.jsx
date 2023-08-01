import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Person2Icon from '@mui/icons-material/Person2';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarsIcon from '@mui/icons-material/Stars';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {RiSearch2Line} from 'react-icons/ri'
import {RiNotification3Line} from 'react-icons/ri'
// import {PiBellThin} from 'react-icons/pi'
import {BiCustomize} from 'react-icons/bi'
import {BsPerson} from 'react-icons/bs'
import {BsBell} from 'react-icons/bs'
import {BsSearch} from 'react-icons/bs'
import React, {useState} from 'react';


import { Link } from 'react-router-dom';
import { Slide } from '@mui/material';
const Menu = () => {
    const [showSearch, setShowSearch] = useState(true);
    const [showNotification, setShowNotification] = useState(false);

    const handleShowNotification = () => {
        setShowNotification(!showNotification)
    }

    const handleShowSearch = () => {
        setShowSearch(!showSearch)
    }
  return (
    <div className='flex flex-col padding pt-0 bg-white'>
      <div className='bg-whitre z-20 flex flex-row justify-between items-center pt-[1.25rem] pb-[.5rem]'>
        <div className='flex flex-row gap-[1rem] items-center'>
            <div className='w-8 h-8 rounded-full bg-black'></div>
            <h1 className='font-mono text-[20px] font-medium text-slate-900'>Febtos</h1>
        </div>
        <div className='flex flex-row gap-[1rem]'>
            <BsPerson className='icon text-slate-500 cursor-pointer' onClick={handleShowSearch}/>
            <BsBell className='icon text-slate-500 cursor-pointer'onClick={handleShowNotification}/>
        </div>
      </div>
      {
        showSearch && 
        <Slide direction="down" in={showSearch} mountOnEnter unmountOnExit>
          <div className='w-[100%] border mt-[1rem] py-2 px-3  bg-white rounded-2xl flex flex-row'>
            <BsSearch className='icon text-slate-500'/>
            <input placeholder='Search...' className='bg-inherit border-red-500 outline-none w-[100%] font-mono px-2'/>
            <div className='h-[100%] bg-black w-[1px] mx-2'></div>
            <BiCustomize className='text-[25px] text-slate-500 cursor-pointer'/>
        </div>
        </Slide>
        
      }

      { showNotification && <div className='absolute right-[1.5rem] bg-white top-[4rem] w-[12.5rem] h-[10rem] border rounded-md flex items-center text-center'>
        <h1 className='font-mono text-slate-700'>You do not have any notification</h1>
        </div>}

      <div className='fixed z-50 bottom-[1.5rem] w-[90%] h-[4rem] backdrop-blur-md bg-black/50 border rounded-[4rem] flex flex-row justify-evenly items-center '>
        <OtherHousesIcon className='text-white text-[26px] hover:text-orange-500'/>
        <Link to="product-details">
        <StarsIcon className='text-white text-[27px] hover:text-orange-500'/>
        </Link>
        
        <FavoriteIcon className='text-white text-[26px] hover:text-orange-500'/>
        <Link to='/cart'>
        <ShoppingCartIcon className='text-white text-[26px] hover:text-orange-500'/>
        </Link>
        
        <Person2Icon className='text-white text-[28px] hover:text-orange-500'/>
      </div>
    </div>
  );
}

export default Menu;
