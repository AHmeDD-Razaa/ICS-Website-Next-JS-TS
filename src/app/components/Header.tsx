"use client"
import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import Navbar from './Navbar'
import Link from 'next/link'
import Notification from './Notification'


export default function Header() {
    const [profile,setProfile] = useState<boolean>(false)
    const profileref = useRef<HTMLDivElement | null> (null)
    const [notify,setNotify] = useState<boolean>(false)
    const notificationref = useRef<HTMLDivElement | null> (null)
    const profiledetail = () =>{
        setProfile(true)
    }
    const notification =()=>{
        setNotify(true)
    }
    function handleClickOutside(event: MouseEvent){
        if(profileref.current && !profileref.current.contains(event.target as Node)){
            setProfile(false)
        }
    }
    useEffect(()=>{
        if(profile){
            document.addEventListener("click", handleClickOutside) 
        }
        return()=>{
            document.removeEventListener("click", handleClickOutside)
        }
    },[profile])
    function handleNotifyClick(event: MouseEvent){
        if(notificationref.current && !notificationref.current.contains(event.target as Node)){
            setNotify(false)
        }
    }
    useEffect(()=>{
        if(notify){
            document.addEventListener("click", handleNotifyClick) 
        }
        return()=>{
            document.removeEventListener("click", handleNotifyClick)
        }
    },[notify])
    return (
        <>
        <div className='max-xl:px-3 h-[80px] lg:h-30 text-lg items-center container mx-auto flex max-2xl:justify-between '>
            <img src="/images/iCSLOGO.png" className='max-lg:w-[130px] ' alt="" />
            <ul className='max-xl:hidden flex gap-5.5 2xl:ml-50'>
                <Link href="/" ><p className='font-mundial-medium text-[#888C93] hover:text-white' >Home</p></Link>
                <Link href="/services" ><p className='font-mundial-medium text-[#888C93] hover:text-white' >Services</p></Link>
                <Link href="/aboutus" ><p className='font-mundial-medium text-[#888C93] hover:text-white' >About Us</p></Link>
                <Link href="/portfolio" ><p className='font-mundial-medium text-[#888C93] hover:text-white' >Portfolio</p></Link>
                <Link href="/subscription" ><p className='font-mundial-medium text-[#888C93] hover:text-white' >Subscription</p></Link>
                <Link href="/contactus" ><p className='font-mundial-medium text-[#888C93] hover:text-white' >Contact Us</p></Link>
                <Link href="/signin" ><p className='font-mundial-medium text-[#888C93] hover:text-white' >Sign In</p></Link>
                <Link href="/dashboard" ><p className='font-mundial-medium text-[#888C93] hover:text-white' >Dashboard</p></Link>
            </ul>
            <div className="md:ml-15 flex items-center gap-5 ">
                <Navbar />
                <button className='hover:cursor-pointer p-2.5 max-lg:hidden rounded-full bg-[#29303E]'><img src="/images/search-normal.png" alt="" /></button>
                <button onClick={notification} className='hover:cursor-pointer p-2.5 max-lg:hidden rounded-full bg-[#29303E]'><img src="/images/notify.png" alt="" /></button>
                <button onClick={profiledetail} className='hover:cursor-pointer p-2.5 max-lg:hidden rounded-full bg-[#29303E]'><img src="/images/profile-circle (1).png" alt="" /></button>
                {profile && <div ref={profileref} className=' bg-[#111928] absolute z-50 top-[100px] right-[270px] border border-white rounded-[16px] text-white flex flex-col'>
                    <li className=' border-b border-white px-5 py-4 flex gap-x-2.5 items-center'>
                        <img src="/images/activity1.png" alt="" />
                        <p>Dashboard</p>
                    </li>
                    <li className=' border-b border-white px-5 py-4 flex gap-x-2.5 items-center'>
                        <img src="/images/activity1.png" alt="" />
                        <p>Profile</p>
                    </li>
                    <li className='px-5 py-4 flex gap-x-2.5 items-center'>
                        <img src="/images/activity1.png" alt="" />
                        <p>logout</p>
                    </li>
                </div> }
                <Button text={'Register'} image={true} />
            </div>

        </div>
        {notify && 
            <div ref={notificationref} className='absolute shadow-[rgba(0,0,0,0.25)_0px_54px_55px,rgba(0,0,0,0.12)_0px_-12px_30px,rgba(0,0,0,0.12)_0px_4px_6px,rgba(0,0,0,0.17)_0px_12px_13px,rgba(0,0,0,0.09)_0px_-3px_5px] w-[500px] h-[500px] overflow-auto inset-0 bg-black/50 z-50 top-[100px] left-[950px]'>
            <Notification />
            </div>
         }</>
        
    )
}
