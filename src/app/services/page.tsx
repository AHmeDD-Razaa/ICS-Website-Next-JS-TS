import React from 'react'
import Header from '../components/Header'
import Heading from '../components/Heading'
import Campains from '../../section/Campains'
import Footer from '../components/Footer'

export default function page() {

    return (
        <div>
            <Header />
            <div className="bg-[#0C1120] pl-50 pt-27.75 pb-19">
                <p className='text-[#85888F] pb-5' >Home  <span className='hover:text-white'> / Services</span> </p>
                <h2 className='pl-[25px] text-white font-bold text-6xl'>Our Services</h2>
            </div>
            <Campains />
            <div className='pt-37.5' >
                <Footer /></div>

        </div>
    )
}
