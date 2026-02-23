import Button from '@/app/components/Button';
import React from 'react'

export default function VideoSec() {
  return (
    <div className='max-lg:px-3 text-lg relative w-full h-[calc(100vh-120px)]'>
    <video
      src="https://ics-s3.s3.me-central-1.amazonaws.com/uploads/1751366454050-bannerVideo.mp4"
      className="absolute max-lg:inset-0 w-full h-full object-cover overflow-hidden"
      autoPlay
      loop
      muted
    />
    <div className="absolute bottom-5 md:bottom-14.5 text-white items-center justify-center flex gap-1 lg:gap-2.25 flex-col left-1/2 -translate-x-1/2 ">
         <span className='text-sm md:text-lg font-mundial-medium' >Explore Services</span>
        <img src="/images/Arrow Right (3).png" className='max-lg:w-8.75' alt="" />
    </div>
    </div>
  );
}
