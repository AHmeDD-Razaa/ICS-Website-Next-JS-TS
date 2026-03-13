"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from "next/navigation";

export default function DashboardBanner() {
      const pathname = usePathname();
    return (
        <div className="bg-[#0C1120] ">
            <div className="container mx-auto">
                <div className="flex items-center pt-14 justify-between">
                    <div className="flex gap-6.5 items-center justify-center">
                        <img src="/images/human.png" alt="" />
                        <ul className='flex flex-col gap-2 text-white text-[20px]'>
                            <li className='font-semibold text-[24px]'>Abdur Razzaq</li>
                            <li>abdurrazzaq88@email.com</li>
                        </ul>
                    </div>
                    {pathname !== "/profiledetails" && <button className='text-white flex gap-4 px-7 py-3 border items-center border-white rounded-[60px]' >
                        Edit
                        <img src="/images/edit.png" alt="" />
                    </button>}
                </div>
                <div className="flex pt-24 gap-x-15 text-white text-[20px]">
                    <Link href='/dashboard' className="flex gap-x-2.5 justify-center items-center pb-[22px]  hover:border-b-2  hover:border-white">
                        <img src="/images/activity.png" alt="" />
                        <span>Dashboard</span>
                    </Link>
                    <Link href='/profiledetails' className="flex gap-x-2.5 justify-center items-center pb-[22px]  hover:border-b-2  hover:border-white">
                        <img src="/images/user-square.png" alt="" />
                        <span>Profile Details</span>
                    </Link>
                    <Link href='/password' className="flex gap-x-2.5 justify-center items-center pb-[22px]  hover:border-b-2  hover:border-white">
                        <img src="/images/lock.png" alt="" />
                        <span>Change Password</span>
                    </Link>
                    <Link href='/subscriptionpage' className="flex gap-x-2.5 justify-center items-center pb-[22px]  hover:border-b-2  hover:border-white">
                        <img src="/images/crown-2.png" alt="" />
                        <span>Subscription</span>
                    </Link>
                    <Link href='/booking' className="flex gap-x-2.5 justify-center items-center pb-[22px]  hover:border-b-2  hover:border-white">
                        <img src="/images/category.png" alt="" />
                        <span>Booking Service</span>
                    </Link>
                    <Link href='/dispute' className="flex gap-x-2.5 justify-center items-center pb-[22px]  hover:border-b-2  hover:border-white">
                        <img src="/images/refund.png" alt="" />
                        <span>Dispute</span>
                    </Link>
                </div>
            </div>

        </div>
    )
}
