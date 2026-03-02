import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Contact from '@/section/Contact'
import Footer from '../components/Footer'

export default function page() {
  return (
    <div><Header />
    <Banner text1={'Contact Us'}/>
    <Contact />
    <Footer />
    </div>
    
  )
}

