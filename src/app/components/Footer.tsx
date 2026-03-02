import React from 'react'

export default function Footer() {
  return (
    <div className="max-lg:px-3 container mx-auto text-white">
        <div className="flex md:px-20 md:py-20.75 lg:px-10 lg:py-10 xl:justify-between items-center px-3 py-10 border-b max-md:gap-5 max-lg:gap-5 max-lg:flex-col">
            <img src="/images/iCSLOGO.png" alt="" />
            <ul className="max-xl:ml-auto font-mundial-regular flex text-[18px] lg:gap-x-4 items-center gap-x-7.5 max-md:gap-x-5 gap-y-5 justify-center flex-wrap">
                <li>Home</li>
                <li>Services</li>
                <li>About Us</li>
                <li>Portfolio</li>
                <li>Media Center</li>
                <li>Subscription</li>
                <li>Contact Us</li>
            </ul>
            <div className="flex justify-center items-center  gap-x-5 lg:ml-25.75">
                <button className="hover:bg-white group border rounded-full"><img className="group-hover:brightness-0 p-3 " src="/images/brand-dribbble.png" alt=""/></button>
                <button className="hover:bg-white group border rounded-full"><img className="group-hover:brightness-0 p-3 " src="/images/fb.png" alt=""/></button>
                <button className="hover:bg-white group border rounded-full"><img className="group-hover:brightness-0 p-3 " src="/images/git.png" alt=""/></button>
                <button className="hover:bg-white group border rounded-full"><img className="group-hover:brightness-0 p-3 " src="/images/insta.png" alt=""/></button>
            </div>
        </div>
        <div className="flex md:px-20 py-5  md:py-17.5">    
            <div className=" grid grid-cols-12 ">
                    <p className="col-span-12 lg:col-span-4 font-mundial-medium ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos,
                        voluptates quo velit qui perferendis deleniti hic aperiam minima atque itaque vero laborum
                        aliquid natus consequuntur nostrum totam aut voluptatibus quos!</p>
                    <div className=" max-lg:pt-5 col-span-12 lg:col-span-8 gap-5 flex max-md:flex-col justify-end items-center">
                        <p className="text-[16px] font-mundial-medium">© 2024 All rights reserved | by TeamX</p>
                        <p className="text-[16px] font-mundial-medium">Terms & Conditions | Privacy Policy</p>
                    </div>

                </div>
        </div>
    </div>
  )
}

