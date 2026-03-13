import React from 'react'
import Heading from '../components/Heading'
import Campains from '../../section/Campains'

export default function page() {

    return (
        <div>
            <div className="bg-[#0C1120] pl-50 pt-27.75 pb-19">
                <p className='text-[#85888F] pb-5' >Home  <span className='hover:text-white'> / Services</span> </p>
                <h2 className='pl-[25px] text-white font-bold text-6xl'>Our Services</h2>
            </div>
            <div className='pb-37.5'>
                <Campains />
            </div>

        </div>
    )
}
