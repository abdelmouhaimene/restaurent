import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer >
      <div className='flex items-center justify-evenly md:flex-row flex-col p-8'>
        <div className='flex flex-1 flex-col justify-center items-center order-3 md:order-1'>
          <h1 className='mb-4 font-base text-4xl'>Contact Us</h1>
          <p className='mb-2'>9 W 53rd St, New York, NY 10019, USA</p>
          <p>+1 212-344-1230</p>
          <p>+1 212-344-1230</p>
        </div>
        <div className='flex flex-1 flex-col justify-center items-center order-1'>
          <Image className='mb-4' src='/images/logo.png' alt='logo' width={60} height={60}/>
          <p className='text-center mb-2'>"The Best Way To Find Yourself Is To Lose Yourself In The Service Of Others."</p>
          <Image className='mb-2' src='/images/spoon.svg' alt='spoon' width={50} height={50}/>
          <div className='flex  justify-between items-center'>
            <Link  href='#'  className=' text-crimson  tracking-wide leading-7  px-1 py-1 rounded border-none outline-none cursor-pointer hover:text-golden'>
              <FiFacebook size={30} />
            </Link>
            <Link  href='#'  className=' text-crimson  tracking-wide leading-7  px-1 py-1 rounded border-none outline-none cursor-pointer hover:text-golden'>
              <FiTwitter size={30} />
            </Link>
            <Link  href='#'  className=' text-crimson  tracking-wide leading-7  px-1 py-1 rounded border-none outline-none cursor-pointer hover:text-golden'>
              <FiInstagram size={30} />
            </Link>
          </div>
        </div>
        <div className='flex flex-1 flex-col justify-center items-center order-2'>
          <h1 className='mb-4 font-base text-4xl'>Working Hours</h1>
          <p >Monday-Friday:</p>
          <p className='mb-2'>08:00 Am - 12:00 Am</p>
          <p>Saturday-Sunday:</p>
          <p>07:00 Am - 11:00 Pm</p>
        </div>
      </div>
      <div>
        <p className='text-center mb-10'>{currentYear}, All Rights Reserved.</p> 
      </div>
    </footer>
  )
}

export default Footer
