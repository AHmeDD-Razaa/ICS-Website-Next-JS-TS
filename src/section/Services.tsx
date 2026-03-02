import Box from '@/app/components/Box'
import Button from '@/app/components/Button'
import Heading from '@/app/components/Heading'
import React from 'react'

export default async function Services({heading,button}:{heading?:boolean,button?:boolean}) {
    const res = await fetch(
    "https://staging-api.icsglobal.ae/api/v1/users/category/get-all",
    { cache: "no-store" }
  );

  const result = await res.json();

  console.log("API Data:", result);

  const services = result?.data || [];

  return (
    <div className='max-lg:px-3 text-white pt-15 lg:pt-25 px-12.5'>
        
            {heading && <Heading text={'Our Services'} image ={true} />}
        
        <div className="text-white grid grid-cols-12 md:gap-x-5 gap-x-2 gap-y-10 pt-10 lg:pt-20">
            {services.slice(0,12).map((item:any, index:number) =>(
                <div className="text-2xl  md:col-span-6 lg:col-span-3 col-span-12" key={index}>
                   <Box image={<img src={item.image} />} text={item.name} />
            </div>
            ))}
        </div>
        <div className="flex justify-center pt-10 lg:pt-20">
        {button && <Button text={"View All Services"} image={true} /> }
        </div>

    </div>
  )
}
