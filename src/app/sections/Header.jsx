import React from 'react'
import Image from 'next/image';
import Button from '@/components/elements/Button';
const Header = () => {
  return (
    <div className=' padding flex justify-between bg-light_black items-center md:items-start md:flex-row flex-col'>
        <div className='md:w-[45%]'>
          <div className='mb-3'>
            <h2 className='mb-2 font-base font-bold text-2xl '>Chase The New Flavour</h2>
            <Image src='/images/spoon.svg' alt='spoon' width={50} height={50}/>
          </div>
          <div>
            <h1 className='my-3 font-base font-bold lg:text-8xl text-7xl text-golden mb-4'>
              The Key To Fine Dining
            </h1>
            <p className='mb-4 text-xl'>
              Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus
            </p>
            <Button text='explore menu' action={null}/>
          </div>
        </div>

        <div className='mt-6 md:mt-0 md:w-[35%] flex justify-center items-center'>
          <Image src='/images/welcome.png' alt='welcome' height={500} width={500}/>
        </div>
      </div>
  )
}

export default Header