import React from 'react'

export default function ServiceButton({text,image}:{text:string,image:string}) {
  return (
    <button className='flex px-3 py-1.5 bg-white justify-center items-center gap-x-1.5 rounded-[20px]'>
        <img src={image } />
        <span>{text}</span>
    </button>
  )
}
