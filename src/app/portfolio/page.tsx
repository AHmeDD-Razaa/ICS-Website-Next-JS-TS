import React from 'react'
import Banner from '../components/Banner'
import Services from '@/section/Services'
import Portfolio from '@/section/Portfolio'
import Portfolio2 from '@/section/Portfolio2'

export default function page() {
  return (
    <div>
        <Banner text1={'Portfolio'} text2={'Portfolio'} 
        buttons={[
        "Marketing & Advertising",
        "Event Management",
        "Public Relations",
        "Digital Media Solutions",
        "Video Animation",
        "Website Design"
  ]}
        />
        <div className='pb-20'><Portfolio2 /></div>
    </div>
  )
}
