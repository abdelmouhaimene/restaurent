import React from 'react'
import Image from 'next/image'
import Button from '@/components/elements/Button'
import knife from '../../../public/images/knife.png'

const About = () => {
  return (
    <div className='padding flex flex-col md:flex-row justify-center items-center relative'>
        <div className='absolute z-0 '>
            <Image src="/images/G.png" alt='G' width={400} height={400} />
        </div>
        <div className='flex justify-center items-center flex-col md:flex-row md:space-x-20 z-10'>
            <div className='flex flex-col text-right items-end justify-center'>
                <h1 className='font-base font-bold text-6xl text-golden mb-2'> About Us </h1>
                <Image src='/images/spoon.svg' alt='spoon' width={50} height={50}/>
                <p className='font-alt text-xl text-grey my-4' >Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.</p>
                <Button text='know more' action={null} />
            </div>
            <div >
                <Image  className="h-[500px] max-w-min md:h-auto  md:max-w-full" src={knife} alt='knife'/>
            </div>
            <div className='flex flex-col items-start justify-center '>
                <h1 className='font-base font-bold text-6xl text-golden mb-2'>Our History</h1>
                <Image src='/images/spoon.svg' alt='spoon' width={50} height={50}/>
                <p className='font-alt text-xl text-grey my-4' >Adipiscing Tempus Ullamcorper Lobortis Odio Tellus Arcu Volutpat. Risus Placerat Morbi Volutpat Habitasse Interdum Mi Aliquam In Sed Odio Nec Aliquet.</p>
                <Button text='know more' action={null} />
            </div>
        </div>
    </div>
  )
}

export default About