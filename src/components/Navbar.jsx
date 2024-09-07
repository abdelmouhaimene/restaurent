"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '@/data';
import LangueDropdown from './LangueDropdown';
const Navbar = () => {

// const [list, setList] = useState(false);
// const openList = () => {
//     list ? setList(false) : setList(true)
// }
const  [selected, setSelected] = useState('/')
const setLinks = () => (
  navLinks.map((item) => (
      <li key={item.label} >
          {item.isLink
              ? <Link
                  href={item.href}
                  className={`font-base no-underline leading-normal text-xl ${selected === item.href ? 'text-white font-bold' : 'text-slate-gray'} `}
              >
                  <p className='hover:text-grey' onClick={() => {setSelected(item.href)}}>{item.label}</p>
              </Link>
              : <a
                  href={item.href}
                  className='font-base  no-underline leading-normal text-xl text-slate-gray'
              >
                  <p className='hover:text-grey'>{item.label}</p>
              </a>
          }
      </li>
  ))
)
  return (
    <nav className='flex justify-between items-center px-4 py-2 bg-light_black w-full fixed top-0 left-0 right-0 z-50  bg-opacity-90 '>
      <div>
        <Image src='/images/logo.png' alt='logo' width={60} height={60}/>
      </div>
      <div>
        <ul className='flex-1 flex list-none justify-center items-center gap-16 max-lg:hidden'>
          {setLinks()}
        </ul>
      </div>
      <div className='flex justify-end items-center font-alt text-lg'>
        <Link className='mx-3  ' href='#'>
          <LangueDropdown/>
        </Link>
        <div className='w-[1px] h-[30px] bg-golden'/>
        <Link className='mx-3 hover:border-b border-golden' href='#'>
          <p>Booking</p>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar