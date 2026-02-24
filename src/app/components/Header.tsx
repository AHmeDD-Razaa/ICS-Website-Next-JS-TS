import React from 'react'
import Button from './Button'
import Navbar from './Navbar'


export default function Header() {
    return (
        <div className='max-xl:px-3 h-[80px] lg:h-30 text-lg items-center container mx-auto flex max-2xl:justify-between '>
            <img src="/images/iCSLOGO.png" className='max-lg:w-[130px] ' alt="" />
            <ul className='max-xl:hidden flex gap-7.5 2xl:ml-100.5'>
                <li ><a className='font-mundial-medium text-[#888C93] hover:text-white' href="/">Home</a></li>
                <li ><a className='font-mundial-medium text-[#888C93] hover:text-white' href="/services">Services</a></li>
                <li ><a className='font-mundial-medium text-[#888C93] hover:text-white' href="/aboutus">About Us</a></li>
                <li ><a className='font-mundial-medium text-[#888C93] hover:text-white' href="">Portfolio</a></li>
                <li ><a className='font-mundial-medium text-[#888C93] hover:text-white' href="">Subscription</a></li>
                <li ><a className='font-mundial-medium text-[#888C93] hover:text-white' href="">Contact Us</a></li>
            </ul>
            <div className="md:ml-15 flex items-center gap-5 ">
                <Navbar />
                <button className='p-2.5 max-lg:hidden rounded-full bg-[#29303E]'><img src="/images/search-normal.png" alt="" /></button>
                <button className='p-2.5 max-lg:hidden rounded-full bg-[#29303E]'><img src="/images/profile-circle (1).png" alt="" /></button>
                <Button text={'Register'} image={true} />
            </div>

        </div>
    )
}
