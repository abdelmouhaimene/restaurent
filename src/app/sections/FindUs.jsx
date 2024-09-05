import React from 'react'
import Image from 'next/image'
import Maps from '@/components/Maps'
import Button from '@/components/elements/Button'
const FindUs = () => {
  return (
    <section className=' mt-6 padding '>
        <div className='flex justify-between items-center'>
          <div>
            <h4 className='mb-2 font-base text-2xl '>Contacts</h4>
            <Image src='/images/spoon.svg' alt='spoon' width={50} height={50}/>
            <h1 className='text-golden my-6 font-base text-6xl'> Find Us</h1>
            <p className='text-grey text-lg mb-3'>
              Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G.
            </p>
            <h3 className='text-golden my-6 font-base text-3xl'> Opening Hours</h3>
            <p className='text-lg mb-1'> Mon - Fri: 10:00 Am - 02:00 Am </p>
            <p className='text-lg mb-3'> Sat - Sun: 10:00 Am - 03:00 Am </p>
            <Button text='Visit Us' action={null}/>
          </div>

          <div className='py-8'>
            < Maps />
          </div>
        </div>
    </section>
  )
}

export default FindUs