import React from 'react'

export default function Box({image, text}:{image:any , text?:string}) {
  return (
    <div className='flex flex-col justify-center items-center gap-5'>
        {image}
        {text && <p className='font-mundial-medium'>{text}</p>} 
    </div>
  )
}
