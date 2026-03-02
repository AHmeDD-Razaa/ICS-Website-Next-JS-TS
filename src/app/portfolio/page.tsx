import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Services from '@/section/Services'
import Footer from '../components/Footer'
import Portfolio from '@/section/Portfolio'
import Portfolio2 from '@/section/Portfolio2'

export default function page() {
  return (
    <div>
        <Header />
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
        <Portfolio2 />
        <div className='pt-20'>
          <Footer />
        </div>
    </div>
  )
}
