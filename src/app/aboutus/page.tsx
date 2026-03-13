import React from 'react'
import Header from '../components/Header'
import Heading from '../components/Heading'
import Vision from '@/section/Vision'
import Reviews from '@/section/Reviews'
import Minds from '@/section/Minds'
import Contact from '@/section/Contact'
import Footer from '../components/Footer'

export default function page() {
    return (
        <div>
            
            <div className='bg-[#0C1120]'>
                <div className="container mx-auto pt-22.5  ">
                <p className='text-[#85888F] pb-5' >Home  <span className='hover:text-white'> / Services</span> </p>
                <div className="grid grid-cols-12 pb-12.5 ">
                    <div className="col-span-5">
                        <h2  className=' text-white font-bold text-6xl'> About Us</h2>
                    </div>
                    <div className="col-span-7 text-[#E2E2E2]">
                        <p>Welcome to ICS, the ultimate multi-vendor platform designed to connect businesses with trusted suppliers across various industries. We act as the sole intermediary, ensuring secure communication, seamless service delivery, and efficient contract management between members and vendors.</p>
                        <p className='pt-5'>Our platform is built to simplify business operations, providing a one-stop solution for marketing, public relations, event management, digital media, and corporate services. With a commitment to excellence, we bring together leading suppliers and businesses, fostering collaborations that drive success.</p>

                    </div>
                </div>
                <img src="/images/AboutUs.jpg" className='w-full h-150 ' alt="" />
            </div>
            </div>
            <Vision />
            <Reviews />
            <div className='pt-37.5' >
                <Minds button={false}/>
            </div>
            <Contact />
            
            
        </div>
    )
}
