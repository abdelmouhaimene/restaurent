import React from 'react'
const Maps = () => {
  return (
    <div className='border-double border-8 border-golden '>
      <iframe className='max-w-full'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25547.88694476707!2d5.91886281083984!3d36.8308382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f26923ae722a29%3A0xa63c9cb71545739!2sPlage%20El%20Kennar!5e0!3m2!1sfr!2sdz!4v1725551956349!5m2!1sfr!2sdz" 
        width="500" 
        height="340" 
        style={{ border: 0 }} 
        allowFullScreen
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  )
}

export default Maps