import React from 'react'

export default function NotificationContent({text1,text2,text3,text4}:{text1:string,text2?:string,text3:string,text4:string}) {
  return (
    <div className='flex gap-x-3 '>
        <button className='w-8 h-8 rounded-full flex justify-center items-center bg-[#394355] '>
            <p className='text-[14px] text-white font-semibold'>{text1}</p>
        </button>
        <div className="">
            <p className='font-semibold text-white'>{text2}</p>
            <p className='font-medium text-[#C9C8E1] text-[14px] pb-3'>{text3}</p>
            <p className='font-light text-[#C9C8E1]'>{text4}</p>
        </div>
    </div>
  )
}
