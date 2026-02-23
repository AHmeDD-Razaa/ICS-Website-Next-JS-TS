import React from 'react'

export default function Heading({text, image}: {text:string, image?:boolean}) {
  return (
    <div className='flex font-mundial-regular justify-center items-center-safe gap-5 text-white text-xl md:text-[56px] font-bold'>
    <h2>{text}</h2>
    {image && <img src="/images/arrowRight.png" className='max-lg:w-8.75' />}
    </div>
  )
}
