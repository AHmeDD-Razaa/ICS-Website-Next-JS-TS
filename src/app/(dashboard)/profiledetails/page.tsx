import ProfileButton from '@/app/components/ProfileButton'
import React from 'react'

export default function page() {
    return (
        <div className='container mx-auto pt-17.5 pb-40 text-white'>
            <p className='text-[32px]'>Edit Profile Details</p>
            <div className=' pt-10 pb-10 grid grid-cols-12'>
                <div className="col-span-6">
                    <form action="" className='flex flex-col gap-y-10'>
                        <div>
                            <label className='font-cairo font-medium text-[20px] ' htmlFor="picture">
                            Upload Profile Picture
                            <div className='mt-4 px-6 py-4 border-white border border-dashed' >
                                <div className='flex flex-col justify-center items-center '>
                                    <img src="/images/Icon.png" alt="" />
                                    <p>Browse and chose the files you want to upload from your computer</p>
                                </div>
                                
                            </div>
                        </label>
                        <input hidden type="file" id='picture' accept='image/*' />
                        </div>
                        <div>
                            <label className='font-cairo font-medium text-[20px] ' htmlFor="name">
                            Full Name
                            <div className='mt-4 px-6 py-4 bg-[#192439] border-b border-[#A3A7B0]' >
                                  <input type="text" id='name' className='text-[18px] w-full' placeholder='Enter ' />
                            </div>
                        </label>
                        </div>
                        <div>
                            <label className='font-cairo font-medium text-[20px] ' htmlFor="mail">
                            Email address 
                            <div className='mt-4 px-6 py-4 bg-[#192439] border-b border-[#A3A7B0]' >
                                  <input type="text" id='mail' className='text-[18px] w-full' placeholder='Enter' />
                            </div>
                        </label>
                        </div>
                        <div>
                            <label className='font-cairo font-medium text-[20px] ' htmlFor="phone">
                            Phone Number
                            <div className='mt-4 px-6 py-4 bg-[#192439] border-b border-[#A3A7B0]' >
                                  <input type="text" id='phone' className='text-[18px] w-full' placeholder='Enter ' />
                            </div>
                        </label>
                        </div>
                    </form>
                </div>
            </div>
            <div className="flex gap-x-5">
                <ProfileButton text={'Update'}/>
                <ProfileButton text={'Cancel'}/>
            </div>
        </div>
    )
}
