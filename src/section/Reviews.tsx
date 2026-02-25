import Heading from '@/app/components/Heading'
import React from 'react'

export default function Reviews() {
    return (
        <div className='bg-[#123A60] pt-23.25 text-white   pb-29.25 px-85'>
            <div>
                <p className='font-medium text-xl text-center pb-5'>Testimonials</p>
                <Heading text={'See What They Say About Us'} />
                <blockquote className='pt-14 pb-10 text-[#FCFCFB] text-[40px] font-light text-center'>"We struggled to find reliable suppliers for our marketing needs, but this platform made it effortless. The subscription model ensures only serious professionals are involved!"</blockquote>
                <div className="flex justify-between items-center">
                    <div className="flex gap-x-10">
                        <img src="/images/Button.png" alt="" />
                        <img src="/images/Button (1).png" alt="" />
                    </div>
                    <div className="flex gap-x-4 items-center ">
                        <img src="/images/sarah.jpg" className='max-w-20 min-h-20 rounded-full' alt="" />
                        <div>
                            <h2 className='text-2xl font-semibold'>Sarah A</h2>
                            <p className='text-[18px] text-[#E2E2E2]'>Marketing Director</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
