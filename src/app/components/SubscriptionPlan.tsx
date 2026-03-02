import React from 'react'

export default function SubscriptionPlan({image,text1,text2,text3}:{image:any,text1?:string,text2?:string,text3?:string}) {
  return (
    <div className='bg-[#1D2433] p-10'>
        {image}
        {text1 && <h2 className='pt-6 text-white text-[32px] font-bold'> {text1}</h2>}
        {text2 && <p className='pt-2 text-[#D2D3D6] text-[20px] font-normal'> {text2}</p>}
        {text3 && <h2 className='pt-8 text-[#D2D3D6] text-[48px] font-semibold'> {text3} <span className='text-[#D2D3D6] text-sm'> / per month </span>  </h2>  }
        <div className='py-9 border-b border-[#414754]'>
            <button className='hover:bg-white hover:text-black text-sm font-bold rounded-[50px] py-3 px-[154px] justify-center items-center text-[#FFFFFF] border border-white'>Get Started</button>
        </div>
        <div className="flex flex-col pt-10 gap-4">
            <h2 className='font-bold text-[20px] text-[#FFFFFF]'>What you will get</h2>
            <ul className='text-[#D2D3D6] flex flex-col gap-4'>
                 <li className='flex gap-x-1 items-center'>
                <img src="/images/tick.png" alt="" />
                <p>Customizable employee directory </p>
            </li>
            <li className='flex gap-x-1 items-center'>
                <img src="/images/tick.png" alt="" />
                <p>Client project management </p>
            </li>
            <li className='flex gap-x-1 items-center'>
                <img src="/images/tick.png" alt="" />
                <p>Client meeting schedule </p>
            </li>
            <li className='flex gap-x-1 items-center'>
                <img src="/images/tick.png" alt="" />
                <p>Compliance tracking </p>
            </li>
            <li className='flex gap-x-1 items-center'>
                <img src="/images/tick.png" alt="" />
                <p>Client communication </p>
            </li>
            <li className='flex gap-x-1 items-center'>
                <img src="/images/tick.png" alt="" />
                <p>Create custom reports tailored   </p>
            </li>
            </ul>
           
        </div>

    </div>
  )
}
