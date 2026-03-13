import ProfileButton from '@/app/components/ProfileButton'
import React from 'react'

export default function page() {
  return (
    <div className='container mx-auto pt-17.5 pb-40 text-white'>
      <p className='text-[32px]'>Change Password</p>
      <div className=' pt-10 pb-10 grid grid-cols-12'>
        <div className="col-span-6">
          <form action="" className='flex flex-col gap-y-10'>
            <div>
              <label className='font-cairo font-medium text-[20px] ' htmlFor="password">
                Current Password
                <div className='mt-4 px-6 py-4 flex justify-between items-center bg-[#192439] border-b border-[#A3A7B0]' >
                  <input type="text" id='password' className='text-[18px] w-[80%]' placeholder='Enter your password ' />
                  <img src="/images/see.png" alt="" />
                </div>
              </label>
            </div>
            <div>
              <label className='font-cairo font-medium text-[20px] ' htmlFor="new">
                New Password
                <div className='mt-4 px-6 py-4 flex justify-between items-center bg-[#192439] border-b border-[#A3A7B0]' >
                  <input type="text" id='new' className='text-[18px] w-[80%]' placeholder='Enter your password ' />
                  <img src="/images/see.png" alt="" />
                </div>
              </label>
            </div>
            <div>
              <label className='font-cairo font-medium text-[20px] ' htmlFor="confirm">
                Confirm New Password
                <div className='mt-4 px-6 py-4 flex justify-between items-center bg-[#192439] border-b border-[#A3A7B0]' >
                  <input type="text" id='confirm' className='text-[18px] w-[80%]' placeholder='Enter your password' />
                  <img src="/images/see.png" alt="" />
                </div>
              </label>
            </div>
          </form>
        </div>
      </div>
      <div className="flex gap-x-5">
        <ProfileButton text={'Update'} />
        <ProfileButton text={'Cancel'} />
      </div>
    </div>
  )
}
