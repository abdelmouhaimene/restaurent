import React from 'react';

import { IoSearchOutline } from 'react-icons/io5';

import { categories } from '@/data';

const MenuHeader = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center rounded-md h-[480px] w-full bg-bg_menu bg-auto bg-no-repeat bg-center bg-fixed bg-opacity-80'>
        <div className='mb-10 '>
          <h1 className='font-base font-semibold text-golden text-8xl'>
            Our Menu
          </h1>
        </div>
        <div className='flex justify-between items-center gap-x-4 w-1/2  bg-gray bg-opacity-60 px-4 py-2 rounded-lg'>
          <div className='text-golden'>
            <IoSearchOutline size={30} />
          </div>
          <input className=' h-10 w-full border-golden border rounded-lg border-solid bg-transparent'/>
        </div>
        <div className='flex flex-wrap gap-y-2 justify-center items-center gap-x-2 w-1/2  p-4'>
          {categories.map((cat,index) =>
            <button key={index} className='px-4 py-2 text-nowrap rounded-md bg-gray bg-opacity-60 text-golden hover:text-white '>
              {cat.libelle}
            </button>
          )}
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default MenuHeader