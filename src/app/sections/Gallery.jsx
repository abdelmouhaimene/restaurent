import React from 'react'
import Image from 'next/image'
import Button from '@/components/elements/Button'
import ImageCarousel from '@/components/ImageCarousel'

const Gallery = () => {
  return (
    <section className=' mt-6 padding bg-light_black'>
        <div className='flex justify-center items-center '>
            <div className='flex-1 w-1/2 max-w-1/2' >
                <h4 className='mb-2 font-base text-2xl '>Instagram</h4>
                <Image src='/images/spoon.svg' alt='spoon' width={50} height={50}/>
                <h1 className='my-6 font-base text-6xl text-golden'>Photo Gallery</h1>
                <p className='text-grey text-lg mb-3'>
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu.
                </p>
                <Button text='View More' action={null}/>
            </div>
            <div className=' w-1/2 max-w-1/2'>
                <ImageCarousel />
            </div>
        </div>
    </section>
  )
}

export default Gallery