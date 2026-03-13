import React from 'react'

export default function DashboardBox({text1,text2}:{text1:string,text2:string}) {
  return (
    <div className='bg-[#0C1120] rounded-[20px] flex flex-col gap-x-5 justify-center items-center px-[123px] py-[65px] border border-[#85888F]'>
        <h2 className='text-[64px]  font-semibold'>{text1}</h2>
        <p className='text-[24px] '>{text2}</p>
    </div>
  )
}
