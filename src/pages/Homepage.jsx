import React, {useState} from 'react';
import Menu from '../components/Menu';
import Ad from '../components/Ad';
import Categories from '../components/Categories';
import SpecialForYou from '../components/SpecialForYou';
import Footer from '../components/Footer';
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
    <div>
      {
        showMenu &&
        <Menu />
      }
      
      {/* <div className='padding'> */}
        <Ad />
        <Categories />
        <SpecialForYou />
        <Footer />
      {/* </div> */}
    </div>
  );
}

export default Homepage;
