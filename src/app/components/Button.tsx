import React from 'react'

export default function Button({text , image}:{text:string ,  image?:boolean}) {
  return (
    <div className=' flex gap-2 md:gap-4.25 md:px-3.5 px-2 py-1.5 md:py-2.25 items-center border border-white rounded-[60px]'>
        <span className='text-white text-sm lg:text-lg font-mundial-bold'>{text}</span>
        {image && <img src="/images/arrow.png" className='max-md:w-[20px]' alt="arrow" />}
    </div>
  )
}
