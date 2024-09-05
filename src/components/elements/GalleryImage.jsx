import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { BsInstagram} from 'react-icons/bs';

const GalleryImage = ({href,imgUrl}) => {
  return (
    <div className='relative flex w-[260px] justify-center items-center bg-black group'>
        <Image src={imgUrl} alt='image' height={450} width={450} className='opacity-100 group-hover:opacity-30 transition-opacity duration-500 ease-in-out'/>
        <Link href={href} className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out' >
            <BsInstagram size={30} />
        </Link>
    </div>
  )
}

export default GalleryImage