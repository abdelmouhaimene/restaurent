import React from 'react'

const Button = ({text,action}) => {
  return (
    <button type="button"
        className="bg-crimson text-black text-lg font-base font-semibold tracking-wide leading-7  px-6 py-2 rounded border-none outline-none cursor-pointer hover:bg-golden" 
        onClick={action}
     >
        {text}
    </button>
  )
}

export default Button