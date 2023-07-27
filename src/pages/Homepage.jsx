import React from 'react';
import Menu from '../components/Menu';
import Ad from '../components/Ad';
import Categories from '../components/Categories';

const Homepage = () => {
  return (
    <div>
      <Menu />
      {/* <div className='padding'> */}
        <Ad />
        <Categories />
      {/* </div> */}
    </div>
  );
}

export default Homepage;
