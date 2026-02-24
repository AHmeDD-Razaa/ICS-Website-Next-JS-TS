import Box from '@/app/components/Box'
import Heading from '@/app/components/Heading'
import Slider from '@/app/components/Slider'
import React from 'react'

export default function Excellence() {
    const data =[
        {img:"/images/Events.png"},
        {img:"/images/Events.png"},
        {img:"/images/Events.png"},
        {img:"/images/Events.png"},
        {img:"/images/Events.png"},
        {img:"/images/Events.png"},
        {img:"/images/Events.png"},
        {img:"/images/Events.png"},
        {img:"/images/Events.png"},
    ]
  return (
    <div className='max-lg:px-3 px-12.5 pb-15 lg:pb-25 xl:pb-45'>
        <Heading text={'Showcasing Our Excellence'} /> 

        <div className="pt-15 gap-10 lg:gap-7.5">
            <Slider>
                      {data.map((item, index) => (
                        <Box
                          key={index}
                          image={
                            <img
                              src={item.img}
                              className="object-cover transition"
                            />
                          }
                        />
                      ))}
                    </Slider>
        </div>
        </div>
  )
}
