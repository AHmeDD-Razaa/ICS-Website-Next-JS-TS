import Button from '@/app/components/Button'
import Heading from '@/app/components/Heading'
import React from 'react'

export default function Services() {
    const data =[
        {img:"/images/Marketing.png",
        para:'Marketing & Advertising'
        },
        {img:"/images/Marketing.png",
        para:'Marketing & Advertising'
        },
        {img:"/images/Marketing.png",
        para:'Marketing & Advertising'
        },
        {img:"/images/Marketing.png",
        para:'Marketing & Advertising'
        },
        {img:"/images/Marketing.png",
        para:'Marketing & Advertising'
        },
        {img:"/images/Marketing.png",
        para:'Marketing & Advertising'
        },
        {img:"/images/Marketing.png",
        para:'Marketing & Advertising'
        },
        {img:"/images/Marketing.png",
        para:'Marketing & Advertising'
        }
    ]
  return (
    <div className='max-lg:px-3 text-white pt-15 lg:pt-25 px-12.5'>
        
            <Heading text={'Our Services'} image ={true} />
        
        <div className="text-white grid grid-cols-12 md:gap-x-5 gap-x-2 gap-y-10 pt-10 lg:pt-20">
            {data.map((item, index) =>(
                <div className="text-2xl  md:col-span-6 lg:col-span-3 col-span-12" key={index}>
                    <img src={item.img} alt="" />
                    <p className='pt-5 text-center font-mundial-medium lg:text-2xl text-xl '>{item.para}</p>
            </div>
            ))}
        </div>
        <div className="flex justify-center pt-10 lg:pt-20">
        <Button text={"View All Services"} image={true} />
        </div>

    </div>
  )
}
