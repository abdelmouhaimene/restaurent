"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '@/data';
import LangueDropdown from './LangueDropdown';
import {Bars3Icon,XMarkIcon} from '@heroicons/react/24/solid'
const Navbar = () => {

const [list, setList] = useState(false);
const toggleList = () => {
    list ? setList(false) : setList(true)
}
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
    <nav className=' px-4 py-2 bg-light_black w-full fixed top-0 left-0 right-0 z-50  bg-opacity-90 '>
      <div className='flex justify-between items-center'>
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
      <div className='menu block md:hidden md:w-auto' id='navmenu'>
        <button
            className={`flex items-center px-1 py-1 border-2  text-slate-200 border-golden hover:border-white hover:text-white transition-transform duration-300 transform ${
                list ? 'rotate-180' : ''
            }`}                
            onClick={toggleList}
        >
            {list ?
                <XMarkIcon className='h-5 w-5' />
            :
                <Bars3Icon className='h-5 w-5' />
            }
        </button>
      </div>
      </div>

      <div
          className={`md:hidden block transition-all duration-300 ${
            list ? 'max-h-screen' : 'max-h-0'
          } overflow-hidden`}
      >
          <ul className='block px-2 sm:px-4'>{setLinks()}</ul>
      </div>
    </nav>
  )
}

export default Navbar