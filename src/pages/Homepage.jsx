import React from 'react';
import Menu from '../components/Menu';
import Ad from '../components/Ad';

const Homepage = () => {
  return (
    <div>
      <Menu />
      {/* <div className='padding'> */}
        <Ad />
      {/* </div> */}
    </div>
  );
}

export default Homepage;
