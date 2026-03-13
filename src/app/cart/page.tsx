"use client"

import { useAppSelector } from "@/app/hooks"

export default function cart(){

 const items = useAppSelector((state)=>state.cart.items)

 return(

  <div className="p-10 text-white flex gap-5">

   {items.map((item,index)=>(

    <div key={index} className="border p-5 ">

      <img src={item.img} alt="" />

      <h2 className="text-xl text-center font-bold mt-3">

        {item.heading}

      </h2>

    </div>

   ))}

  </div>

 )
}

