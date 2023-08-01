import React, {useState} from 'react';
import Menu from '../components/Menu';
import Ad from '../components/Ad';
import Categories from '../components/Categories';
import SpecialForYou from '../components/SpecialForYou';
import Footer from '../components/Footer';
import NikeOfficialStore from '../components/NikeOfficialStore';
import PhoneDeals from '../components/PhoneDeals';
import TopPhoneDeals from '../components/TopPhoneDeals';
import Banner from '../components/Banner';
import MainCategory from '../components/MainCategory';
const Homepage = () => {
//   const currentScrollHeight = document.documentElement.scrollTop;
// console.log('Curren window scroll height:', currentScrollHeight);
const [showMenu, setShowMenu] = useState(true)

function handleScroll() {
  
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;

  // Check if the user has scrolled to the bottom of the page
  const isAtBottom = scrollTop + clientHeight >= scrollHeight;

  // Perform actions if at the bottom
  if (isAtBottom) {
    // console.log('You have reached the bottom of the page!');
    setShowMenu(false)
    // Add your logic here
  } else {
    setShowMenu(true)
  }
}

// Attach the event listener to the 'scroll' event
window.addEventListener('scroll', handleScroll);


  return (
    <div className='bg-slate-100'>
      {
        showMenu &&
        <Menu />
      }
      
      {/* <div className='padding'> */}
        
        <Banner />
        <Categories />
        <div className='relative top-[1rem]'>
          <MainCategory />
        </div>
        
        <SpecialForYou />
        <NikeOfficialStore />
        <Ad />
        <PhoneDeals />
        <TopPhoneDeals />
        <Footer />
      {/* </div> */}
    </div>
  );
}

export default Homepage;
