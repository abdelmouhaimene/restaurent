import React from 'react'
import Image from 'next/image'
const LangueDropdown = () => {
  return (
<div className="relative group">
  <button className="bg-golden text-white px-2 py-1 flex items-center gap-x-2">
    En <Image src="/icons/england.png"
      height={24}
      width={24}     
    />
  </button>
  <div className="absolute hidden group-hover:block bg-light_black shadow-lg  ">
    <ul className="text-sm py-2 px-1">
      <li>
        <button className="block px-2 py-1 hover:border-b border-golden  flex items-center gap-x-2">
          En <Image src="/icons/england.png"
            height={24}
            width={24}     
          />
        </button>
      </li>
      <li>
        <button className="block px-2 py-1 hover:border-b border-golden  flex items-center gap-x-2">
          Fr <Image src="/icons/france.png"
            height={24}
            width={24}     
          />
        </button>
      </li>
    </ul>
  </div>
</div>
  )
}

export default LangueDropdown