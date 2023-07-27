import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
const Footer = () => {
    

  return (
    <footer className='padding bg-orange-500 text-white'>
        <div className='pt-[2rem]'>
           <div>
        <h1 className='text-2xl font-mono font-bold'>Tobbie</h1>
        <div className='flex flex-row gap-2 text-orange-500'>
        <div className='border border-white p-[2px] rounded-md bg-white'>
            <InstagramIcon />
        </div>
        <div className='border border-white p-[2px] rounded-md bg-white'>
            <LinkedInIcon />
        </div>
        <div className='border border-white p-[2px] rounded-md bg-white'>
            <TwitterIcon />
        </div>
        <div className='border border-white p-[2px] rounded-md bg-white'>
            <FacebookIcon />
        </div>
        </div>
      </div>
      <div className='mt-[2rem] flex flex-row flex-wrap gap-[2rem] justify-between'>
      <div>
        <p className='text-[16px] font-mono font-medium'>Product</p>
        <div>
            <ul className='text-[18px] font-mono font-semibold'>
                <li>Overview</li>
                <li>Features</li>
                <li>SOlutions</li>
                <li>Tutorial</li>
                <li>Pricing</li>
                <li>Releases</li>
            </ul>
        </div>
      </div>
      <div className=''>
      <p className='text-[16px] font-mono font-medium'>Company</p>
        <div>
            <ul className='text-[18px] font-mono font-semibold'>
                <li>About us</li>
                <li>Careers</li>
                <li>Press</li>
                <li>News</li>
                <li>Media kit</li>
                <li>Contact</li>
            </ul>
        </div>
      </div>
      <div>
      <p className='text-[16px] font-mono font-medium'>Resourses</p>
        <div>
            <ul className='text-[18px] font-mono font-semibold'>
                <li>Blog</li>
                <li>Newsletter</li>
                <li>Events</li>
                <li>Help centre</li>
                <li>Tutorials</li>
                <li>Support</li>
            </ul>
        </div>
      </div>
      </div> 
        </div>
        <div className='mt-[2rem]'>
        <div>
            <h1 className='text-xl font-bold font-mono'>Lorem ipsum fitert ma chea</h1>
            <p className='text-[14px] font-mono'>Save more money by shopping with febtos store and you wont regret it.</p>
        </div>
        <div className='mt-[1rem] pb-[2rem]'>
        <p className='font-mono text-[16px] text-center'>&copy; 2023 Febtos. All rights reserved.</p>

        </div>
        </div>
    </footer>
  );
}

export default Footer;
