import Box from '@/app/components/Box'
import Button from '@/app/components/Button'
import Heading from '@/app/components/Heading'
import React from 'react'

export default async function Services() {
    // const data =[
    //     {img:"/images/Marketing.png",
    //     para:'Marketing & Advertising'
    //     },
    //     {img:"/images/Marketing.png",
    //     para:'Marketing & Advertising'
    //     },
    //     {img:"/images/Marketing.png",
    //     para:'Marketing & Advertising'
    //     },
    //     {img:"/images/Marketing.png",
    //     para:'Marketing & Advertising'
    //     },
    //     {img:"/images/Marketing.png",
    //     para:'Marketing & Advertising'
    //     },
    //     {img:"/images/Marketing.png",
    //     para:'Marketing & Advertising'
    //     },
    //     {img:"/images/Marketing.png",
    //     para:'Marketing & Advertising'
    //     },
    //     {img:"/images/Marketing.png",
    //     para:'Marketing & Advertising'
    //     }
    // ]

    const res = await fetch(
    "https://staging-api.icsglobal.ae/api/v1/users/category/get-all",
    { cache: "no-store" }
  );

  const result = await res.json();

  console.log("API Data:", result);

  const services = result?.data || [];

  return (
    <div className='max-lg:px-3 text-white pt-15 lg:pt-25 px-12.5'>
        
            <Heading text={'Our Services'} image ={true} />
        
        <div className="text-white grid grid-cols-12 md:gap-x-5 gap-x-2 gap-y-10 pt-10 lg:pt-20">
            {services.map((item:any, index:number) =>(
                <div className="text-2xl  md:col-span-6 lg:col-span-3 col-span-12" key={index}>
                   <Box image={<img src={item.image} />} text={item.name} />
            </div>
            ))}
        </div>
        <div className="flex justify-center pt-10 lg:pt-20">
        <Button text={"View All Services"} image={true} />
        </div>

    </div>
  )
}
