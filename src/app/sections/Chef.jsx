import React from 'react'
import Image from 'next/image'
const Chef = () => {
  return (
    <div className='padding flex flex-col space-y-4 items-center md:justify-around md:items-center  md:flex-row'>
        <div className='md:w-[40%]'>
            <Image src='/images/chef.png' alt='chef' width={400} height={400} /> 
        </div>
        <div className='bg-light_black p-2 md:w-[40%]'>
            <h4 className='font-base font-bold text-xl mb-2'>Chef words</h4>
            <Image src='/images/spoon.svg' alt='spoon' width={50} height={50}/>
            <h1 className='my-4 font-base text-golden text-6xl'>What We Believe In</h1>
            <div className='flex'>
                <Image src='/images/quote.png' alt='quote' width={60} height={60}/>
                <p className='font-alt ml-2'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit .</p>
            </div>
            <p className='font-alt'>
                Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc.
            </p>
            <h2 className='mt-4 font-base text-golden text-5xl'>Kevin Leo</h2>
            <p className='text-lg mb-2 font-alt'> Chef & Founder </p>
            <Image src='/images/sign.png' alt='sign' width={100} height={100}/>
        </div>
    </div>
  )
}

export default Chef