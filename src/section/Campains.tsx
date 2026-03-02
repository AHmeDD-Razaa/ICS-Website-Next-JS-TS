import React from 'react'
import Heading from '../app/components/Heading'
import Box from '../app/components/Box';
import Button from '../app/components/Button';
import { log } from 'node:console';

export default async function Campains({button}:{button?:boolean}) {
    const res = await fetch(
        "https://staging-api.icsglobal.ae/api/v1/users/category/get-all",
        { cache: "no-store" }
    );
 
    const result = await res.json();

    console.log("API Data:", result);

    const services = result?.data || [];
    console.log("Services:",services );
    
    return (
        <div className='px-12 pt-30'>
            {services.map((item: any, index: number) => (
                <div className='mt-37.5' key={index}>
                    <Heading text={item.name} />
                    <div className="text-white grid grid-cols-12 gap-5.25 gap-y-10 pt-12.5 pb-12.5 " >
                        {item?.childs && item?.childs.length > 0 ? item?.childs.map((child: any, index: number) => (
                            <div className="text-2xl  md:col-span-6 lg:col-span-3 col-span-12" key={index}>
                                <Box image={<img src={child.image} />} text={child.name} />
                            </div>
                        )): <div className="text-2xl  md:col-span-6 lg:col-span-3 col-span-12" key={index}>
                                <Box image={<img src={item.image} />} text={item.name} />
                            </div>}
                    </div>
                    <div className='flex justify-center items-center '>
                        {button && <Button text={'Request Services'} image={true}  />}

                    </div>
                </div>
            ))}

        </div>
    )
}