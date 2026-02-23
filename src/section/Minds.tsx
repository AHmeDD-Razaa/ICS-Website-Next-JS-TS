import Button from '@/app/components/Button'
import Heading from '@/app/components/Heading'
import React from 'react'

export default function Minds() {
    const Data = [
        {
            img: "/images/projects.png",
            heading: "ABDULLAH",
            para1: "CEO",
            para2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
        },
        {
            img: "/images/projects.png",
            heading: "AZAAN",
            para1: "Sale Manager",
            para2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
        },
        {
            img: "/images/projects.png",
            heading: "ARSHAD",
            para1: "Marketing Director",
            para2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
        },
        {
            img: "/images/projects.png",
            heading: "Amir",
            para1: "Marketing Director",
            para2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
        },
        {
            img: "/images/projects.png",
            heading: "Hamza",
            para1: "Marketing Director",
            para2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
        }
    ]
    return (
        <div className='max-lg:px-3 px-12.5'>
            <Heading text={'Meet the Minds Behind ICS Platform'} />
            <div className="pt-15 text-white md:gap-x-8.75 gap-5 grid grid-cols-5 pb-15">
                {Data.map((item,index) =>(
                    <div className="xl:col-span-1 md:flex flex-col gap-3 col-span-5" key={index}>
                    <img src={item.img} alt="" className='max-lg:w-full' />
                    <h2 className='pt-5 text-center font-bold text-[32px] '>{item.heading}</h2>
                    <p className='pt-1.25 text-center font-mundial-regular text-xl '>{item.para1}</p>
                    <p className='pt-1.25 text-center font-mundial-regular text-lg'>{item.para2}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center">
                <Button text='Explore More' image ={true} />
            </div>
            
        </div>
    )
}
