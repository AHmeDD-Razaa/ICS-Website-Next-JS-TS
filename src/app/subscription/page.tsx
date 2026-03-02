import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import SubscriptionPlan from '../components/SubscriptionPlan'

export default function Page() {
    return (
        <div>
            <Header />
            <Banner text1={'Subscription'} text2={'subscription plans'} text3={'Select from best plan, ensuring a perfect match. Need more or less? Customize your subscription for a seamless fit!'} />
            <div className="container mx-auto pt-15 pb-13 ">
                <div className="flex gap-5 items-center">
                    <button className='flex px-11 py-4 justify-center items-center text-[#E2E2E2]  font-medium text-[18px] hover:bg-[#123A60] border border-white rounded-[60px] '> Monthly </button>
                    <button className='flex px-11 py-4 justify-center items-center text-[#E2E2E2]  font-medium text-[18px] hover:bg-[#123A60] border border-white rounded-[60px] '> Quarterly </button>
                    <button className='flex px-11 py-4 justify-center items-center text-[#E2E2E2]  font-medium text-[18px] hover:bg-[#123A60] border border-white rounded-[60px] '> Semi Annually </button>
                    <button className='flex px-11 py-4 justify-center items-center text-[#E2E2E2]  font-medium text-[18px] hover:bg-[#123A60] border border-white rounded-[60px] '> Yearly </button> </div>
            
            <div className="grid grid-cols-12 pt-10 gap-10">
                <div className="col-span-4">
                    <SubscriptionPlan image={<img src={"/images/Ellipse.png"} className='rounded-full p-2.5 bg-[#6B7079] hover:bg-white' />} text1={'Basic'}
                        text2={'Best for personal use.'} text3={'$10'} />
                </div>
                <div className="col-span-4">
                    <SubscriptionPlan image={<img src={"/images/Ellipse.png"} className='rounded-full p-2.5 bg-[#6B7079] hover:bg-white' />} text1={'Basic'}
                        text2={'Best for personal use.'} text3={'$10'} />
                </div>
                <div className="col-span-4">
                    <SubscriptionPlan image={<img src={"/images/Ellipse.png"} className='rounded-full p-2.5 bg-[#6B7079] hover:bg-white' />} text1={'Basic'}
                        text2={'Best for personal use.'} text3={'$10'} />
                </div>

            </div>
            </div>

            <Footer />
        </div>
    )
}
