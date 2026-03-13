import Link from 'next/link'
import React from 'react'

export default function DashboardService({text}:{text:string}) {
  return (
    <div className='rounded-[20px] border border-[#85888F]'>
      <div className='px-7.5 pt-5 '>
        <button className='text-[#B5850B] flex px-3 py-1.5 bg-white justify-center items-center gap-x-1.5 rounded-[20px]'>
          <img src="/images/Vector.png" />
          <span>Pending</span>
        </button>
        <div className='pt-4 pb-4.5'>
          <ul className='flex flex-col gap-y-5'>
            <li className='flex gap-x-7.5'>
              <p className='min-w-[117px] text-[18px] font-medium text-[#7B849E] '>Request ID</p>
              <p className='text-[18px] text-white'>#253</p>
            </li>
            <li className='flex gap-x-7.5'>
              <p className='min-w-[117px] text-[18px] font-medium text-[#7B849E] '>Service Name</p>
              <p className='text-[18px] text-white'>Website Development</p>
            </li>
            <li className='flex gap-x-7.5'>
              <p className='min-w-[117px] text-[18px] font-medium text-[#7B849E] '>Vendor</p>
              <p className='text-[18px] text-white'>{text}</p>
            </li>
            <li className='flex gap-x-7.5'>
              <p className='min-w-[117px] text-[18px] font-medium text-[#7B849E] '>Created at</p>
              <p className='text-[18px] text-white'>Feb 20, 2024</p>
            </li>
            <li className='flex gap-x-7.5'>
              <p className='min-w-[117px] text-[18px] font-medium text-[#7B849E] '>Budget</p>
              <p className='text-[18px] text-white'>500 AED</p>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex justify-center items-center py-2.5 border-t border-[#85888F]'>
        <Link href="/bookingservice" className="flex gap-x-2.5">
  <img src="/images/eye.png" alt="" />
  <p>View Detail</p>
</Link>
        
      </div>
    </div>

  )
}


