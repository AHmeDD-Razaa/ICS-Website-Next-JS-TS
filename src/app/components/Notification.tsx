import React from 'react'
import NotificationContent from './NotificationContent'

export default function Notification() {
    return (
        <div className="">
            <div className=' border-b border-white bg-[#192439] text-white px-6 py-4 flex items-center justify-between'>
                <div className="flex gap-x-1.5 justify-center items-center">
                    <h2 className='font-bold text-[20px]'>Notifications</h2>
                    <p className='flex justify-center items-center text-black bg-white rounded-full w-8 h-8 font-medium  '>100</p>
                </div>
                <div className="flex gap-x-4 items-center">
                    <p className='font-medium text-[14px]' >Mark all as read </p>
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>
            <div className=" border-b border-white bg-[#242F43] px-6 py-4">
                <NotificationContent text1={'P'} text3={'Payment received! Your transaction for [Service Name] is successful.'} text4={'8 min ago'} />
            </div>
            <div className="border-b border-white bg-[#242F43] px-6 py-4">
                <div className='flex gap-x-3 '>
                    <img className='rounded-full w-8 h-8' src="/images/avatar-image.png" alt="" />
                    <div className="">
                        <p className='font-semibold text-white'>User/Supplier Name</p>
                        <p className='font-medium text-[#C9C8E1] text-[14px] pb-3'>has requested a meeting. Approve or reschedule?</p>
                        <div className="flex gap-x-3 mb-3">
                            <button className='px-3 py-1 text-white hover:cursor-pointer hover:text-black hover:bg-white border border-white bg-[#2E333F] rounded-[8px]'>
                                <p className='font-medium text-[14px]'>Accept</p>
                            </button>
                            <button className='px-3 py-1 text-white hover:cursor-pointer hover:text-black hover:bg-white border border-white bg-[#2E333F] rounded-[8px]'>
                                <p className='font-medium text-[14px]'>Deny</p>
                            </button>
                        </div>
                        <p className='font-light text-[#C9C8E1]'>17 min ago</p>
                    </div>
                </div>
            </div>
            <div className=" border-b border-white bg-[#192439] px-6 py-4">
                <NotificationContent text1={'P'} text2={'Reminder'} text3={'Payment received! Your transaction for [Service Name] is successful.'} text4={'8 min ago'} />
            </div>
            <div className="border-b border-white bg-[#192439] px-6 py-4">
                <NotificationContent text1={'P'} text2={'Subscription renewed'} text3={'Payment received! Your transaction for [Service Name] is successful.'} text4={'8 min ago'} />
            </div>
            <div className=" border-b border-white bg-[#192439] px-6 py-4">
                <NotificationContent text1={'P'} text2={'Payment received!'} text3={'Payment received! Your transaction for [Service Name] is successful.'} text4={'8 min ago'} />
            </div>
            <div className="bg-[#192439] border-b border-white  px-6 py-4">
                <NotificationContent text1={'P'} text2={'New message'} text3={'Payment received! Your transaction for [Service Name] is successful.'} text4={'8 min ago'} />
            </div>
            <div className=" border-b border-white bg-[#192439] px-6 py-4">
                <NotificationContent text1={'P'} text2={'Your service request'} text3={'Payment received! Your transaction for [Service Name] is successful.'} text4={'8 min ago'} />
            </div>
            <div className="bg-[#192439] px-6 py-4">
                <NotificationContent text1={'P'} text2={'Your request'} text3={'Payment received! Your transaction for [Service Name] is successful.'} text4={'8 min ago'} />
            </div>
        </div>

    )
}
