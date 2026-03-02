import Box from '@/app/components/Box'
import React from 'react'

export default async function Portfolio2() {
    const portfolio = await fetch("https://staging-api.icsglobal.ae/api/v1/users/portfolio/get-all",
        { cache: "no-store" }
    )
    const res = await portfolio.json()
    console.log("Portfolio Data:", res)

    const result = res?.data || []
    console.log("Data:", res?.data[0])
    return (
        <div className='max-lg:px-3 text-white pt-15 lg:pt-25 px-12.5'>
            <div className="text-white grid grid-cols-12 md:gap-x-5 gap-x-2 gap-y-10 pt-10 lg:pt-20">
                {result.slice(0,8).map((item: any, index: number) => (
                    <div className="text-2xl  md:col-span-6 lg:col-span-3 col-span-12" key={index}>
                        <Box
                            key={index}
                            image={
                                <img
                                    src={item.images[0].image}
                                    className="object-cover transition"
                                />
                            }
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
