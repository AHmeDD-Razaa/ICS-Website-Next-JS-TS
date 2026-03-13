"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import Review from '../components/Review'

export default function page() {
    const [review, setReview] = useState<boolean>(false)
    const reviewref = useRef<HTMLDivElement | null>(null)
    const handleReview =()=>{
        setReview(true)
    }
    
    useEffect(()=>{
        function handleClick(event: MouseEvent){
        if (reviewref.current && !reviewref.current.contains(event.target as Node)){
            setReview(false)
        }
    } 
        if(review){
            document.addEventListener("mousedown", handleClick)
        }
        return()=>{
            document.removeEventListener("mousedown", handleClick)
        }
    },[review])
    
    return (
        <>
         <div className='container mx-auto pt-4.5 '>
            <div className="text-white flex gap-x-4 items-center ">
                <img src="/images/left.png" alt="" />
                <p className='text-[20px]'>Back</p>
            </div>
            <div className='pt-7.5  pb-50 grid grid-cols-12 gap-x-10'>
                <div className="text-white col-span-8">
                    <div className="flex bg-[#060817] border border-white py-2.25 gap-x-3 rounded-tl-[20px] rounded-tr-[20px] items-center px-8">
                        <img src="/images/Mask group.png" alt="" />
                        <div >
                            <p className='text-[20px] font-semibold'>Kristin Watson</p>
                            <p className='text-[24px] text-[#93989A]'>Active now</p>
                        </div>
                    </div>
                    <div className='border-l border-r border-white px-8 pt-5'>
                        <p className='text-center text-[#A2A5B1]'>Today, 11:03 AM </p>
                        <div className='pt-7'>
                            <div className="flex gap-x-4">
                                <img src="/images/Mask group.png" className='pt-12' alt="" />
                                <div className='flex flex-col gap-y-3'>
                                    <p className='text-[14px] font-semibold'>Killan James</p>
                                    <p className='px-3 text-[14px]'>Hi, Are you still Web Designer.</p>
                                    <p className='px-3 text-[14px]'>would love to see some Design 😁</p>
                                </div>
                            </div>
                        </div>
                        <div className='pt-6'>
                            <div className="flex flex-row-reverse gap-x-4">
                                <img src="/images/Mask group1.png" className='pt-12' alt="" />
                                <div className='flex flex-col gap-y-3'>
                                    <p className='text-right text-[14px] font-semibold'>Dristin Watson</p>
                                    <p className='px-3 text-[14px]'>Yeah, I've noticed a shift towards clean and simple designs</p>
                                </div>
                            </div>
                        </div>
                        <div className='pt-6'>
                            <div className="flex gap-x-4">
                                <img src="/images/Mask group.png" className='pt-12' alt="" />
                                <div className='flex flex-col gap-y-3'>
                                    <p className='text-[14px] font-semibold'>Killan James</p>
                                    <p className='px-3 text-[14px]'>Have you seen the latest UI design trends?</p>
                                </div>
                            </div>
                        </div>
                        <div className='pt-6'>
                            <div className="flex flex-row-reverse gap-x-4">
                                <img src="/images/Mask group1.png" className='pt-12' alt="" />
                                <div className='flex flex-col gap-y-3'>
                                    <p className='text-right text-[14px] font-semibold'>Dristin Watson</p>
                                    <p className='px-3 text-[14px]'>Yeah, I've noticed a shift towards clean and simple designs</p>
                                </div>
                            </div>
                        </div>
                        <div className='pt-6'>
                            <div className="flex gap-x-4">
                                <img src="/images/Mask group.png" className='pt-12' alt="" />
                                <div className='flex flex-col gap-y-3'>
                                    <p className='text-[14px] font-semibold'>Killan James</p>
                                    <p className='px-3 text-[14px]'>Hey, happy to hear from you. Yes, I will be back in <br /> a couple of days.</p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-6 flex gap-x-4  pl-14.5">
                            <img src="/images/discover.png" className=' rounded-tl-[10px] rounded-tr-[10px]  max-w-[200px] max-h-[200px]' alt="" />
                            <img src="/images/discover.png" className=' rounded-tl-[10px] rounded-tr-[10px] max-w-[200px] max-h-[200px]' alt="" />
                        </div>

                    </div>
                    <div className='bg-[#060817] text-white py-5 px-9 border border-white rounded-bl-[20px] rounded-br-[20px] '>
                        <div className="flex bg-[#111928] px-6 py-3.5 rounded-[25px]">
                            <input type="text" className='w-[70%]' placeholder='Type Message' />
                            <div className="ml-auto flex gap-x-5 items-center">
                                <img src="/images/Group 1000004152.png" alt="" />
                                <img src="/images/yellow.png" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-span-4 flex flex-col gap-y-7.5 text-white rounded-[20px] bg-[#070A19] px-5 py-8">
                    <Disclosure>
                        <DisclosureButton className="border border-white rounded-[20px] flex gap-x-5 justify-between px-5 py-5">
                            <div className="border-l border-white flex px-4 gap-x-4">
                                <p className='w-full text-left'>Detail</p></div>
                            <img src="/images/fi_7996254.png" alt="" />
                        </DisclosureButton>
                        <DisclosurePanel className="text-gray-500 px-5 py-5">
                            Yes! You can purchase a license that you can share with your entire team.
                        </DisclosurePanel>
                    </Disclosure>
                    <Disclosure>
                        <DisclosureButton className="border border-white rounded-[20px] flex gap-x-5 justify-between px-5 py-5">
                            <div className="border-l border-white flex px-4 gap-x-4">
                                <p className='w-full text-left'>Description</p> </div>
                            <img src="/images/fi_7996254.png" alt="" />
                        </DisclosureButton>
                        <DisclosurePanel className="text-gray-500 px-5 py-5">
                            Yes! You can purchase a license that you can share with your entire team.
                        </DisclosurePanel>
                    </Disclosure>
                    <Disclosure>
                        <DisclosureButton className="border border-white rounded-[20px] flex gap-x-5 justify-between px-5 py-5">
                            <div className="border-l border-white flex px-4 gap-x-4">
                                <p className='w-full text-left'>Contract </p></div>
                            <img src="/images/fi_7996254.png" alt="" />
                        </DisclosureButton>
                        <DisclosurePanel className="text-gray-500 px-5 py-5">
                            Yes! You can purchase a license that you can share with your entire team.
                        </DisclosurePanel>
                    </Disclosure>
                    <Disclosure>
                        <DisclosureButton className="border border-white rounded-[20px] flex gap-x-5 justify-between px-5 py-5">
                            <div className="border-l border-white flex px-4 gap-x-4">
                                <img src="/images/Shape.png" alt="" />
                                <p className='w-full text-left'>Attachment</p></div>
                            <img src="/images/fi_7996254.png" alt="" />
                        </DisclosureButton>
                        <DisclosurePanel className="text-gray-500 px-5 py-5">
                            Yes! You can purchase a license that you can share with your entire team.
                        </DisclosurePanel>
                    </Disclosure>
                    <Disclosure>
                        <DisclosureButton className="border border-white rounded-[20px] flex gap-x-5 justify-between px-5 py-5">
                            <div className="border-l border-white flex px-4 gap-x-4">
                                <p className='w-full text-left'>Review</p></div>
                            <img src="/images/fi_7996254.png" alt="" />
                        </DisclosureButton>
                        <DisclosurePanel onClick={handleReview} className="text-gray-500 px-5 py-5">
                            Share your review.
                        </DisclosurePanel>
                    </Disclosure>
                    <Disclosure>
                        <DisclosureButton className="border border-white rounded-[20px] flex gap-x-5 justify-between px-5 py-5">
                            <div className="border-l border-white flex px-4 gap-x-4">
                                <p className='w-full text-left'>Detail</p> </div>
                            <img src="/images/fi_7996254.png" alt="" />
                        </DisclosureButton>
                        <DisclosurePanel className="text-gray-500 px-5 py-5">
                            Yes! You can purchase a license that you can share with your entire team.
                        </DisclosurePanel>
                    </Disclosure>
                    
                </div>
            </div>
        </div>
        {review && 
        <div className='fixed inset-0 bg-black/50 flex justify-center items-center z-50'>
            <div ref={reviewref} >
                        <Review />
                    </div> 
        </div>  } 
                    </>
       
    )
}
