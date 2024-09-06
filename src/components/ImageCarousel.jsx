"use client";
import React from 'react'
import { gallery } from '@/data';
import GalleryImage from './elements/GalleryImage';
import { BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'
const ImageCarousel = () => {
    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
      const { current } = scrollRef;
      const scrollAmount = 300;
      const scrollLeft = current.scrollLeft;
  
      if (direction === 'left') {
        current.scrollTo({
          left: scrollLeft - scrollAmount,
          behavior: 'smooth', // Add smooth scrolling behavior
        });
      } else {
        current.scrollTo({
          left: scrollLeft + scrollAmount,
          behavior: 'smooth', // Add smooth scrolling behavior
        });
      }
    };
    
  return (
    <div className=' relative border-double border-8 border-golden bg-black '>
      <div className='flex flex-row overflow-x-auto no-scrollbar  ' ref={scrollRef}>
        {
          gallery.map((image,index) => 
            <div key={index} className=' mr-8 flex items-center  justify-center '>
              <GalleryImage href={image.href} imgUrl={image.imgUrl} />
            </div>
          )
        }
      </div> 
      <div className=' absolute bottom-4 flex justify-between items-center w-full px-2'>
        <button type='button' onClick={() => scroll('left')} className='bg-black text-crimson  tracking-wide leading-7  px-1 py-1 rounded border-none outline-none cursor-pointer hover:text-golden'>
          <BsArrowLeftShort size={30} />
        </button>
        
        <button type='button' onClick={() => scroll('right')}  className='bg-black text-crimson  tracking-wide leading-7  px-1 py-1 rounded border-none outline-none cursor-pointer hover:text-golden'>
          <BsArrowRightShort size={30} />
        </button>
      </div>
    </div>
  )
}

export default ImageCarousel