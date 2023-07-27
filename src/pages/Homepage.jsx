import React from 'react';
import Menu from '../components/Menu';
import Ad from '../components/Ad';
import Categories from '../components/Categories';
import SpecialForYou from '../components/SpecialForYou';

const Homepage = () => {
  return (
    <div>
      <Menu />
      {/* <div className='padding'> */}
        <Ad />
        <Categories />
        <SpecialForYou />
      {/* </div> */}
    </div>
  );
}

export default Homepage;
