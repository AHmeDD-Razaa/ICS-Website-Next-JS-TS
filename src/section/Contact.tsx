"use client"
import { log } from "node:console";
import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [phone, setPhone] = useState("")
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const api = await fetch("https://staging-api.icsglobal.ae/api/v1/users/contact/create", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        message,
        phone
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    const result = await api.json()
    console.log("POST DATA:", result)
    setName("")
  }

  return (
    <div className="max-lg:px-3  relative bg-[url('/images/background.png')] bg-cover bg-center py-10 lg:py-[125px]">
      <div className="container mx-auto backdrop-blur-md md:px-20 px-3 pt-8 pb-5 md:pb-11">


        <div className="flex items-center justify-between">
          <img src="/images/iCSLOGO.png" alt="logo" className="max-md:max-w-32.5" />

          <button className="text-white md:text-2xl font-bold gap-2.5 items-center flex">
            <span className="max-md:text-sm" >Let’s Talk</span>
            <img src="/images/Arrow Right.png" className="max-md: w-[30px]" alt="arrow" />
          </button>
        </div>


        <div className="grid grid-cols-2 mt-8 gap-15">


          <div className="text-white col-span-2 lg:col-span-1">
            <ul className="pb-5">
              <li className="font-mundial-regular">• Contact Us</li>
            </ul>

            <h2 className="text-2xl md:text-4xl lg:text-[48px]">Lets Bring Your Vision To Life</h2>
            <p className="pt-5  lg:text-2xl font-mundial-regular">Have Questions? Ready To Start Your Journey</p>

            <div className="flex mt-12 mb-8 text-white gap-x-3.5 items-center">
              <img className="border rounded-[7.3px] p-2 lg:p-4" src="/images/SVG.png" alt="phone" />
              <span className="font-mundial-medium text-lg lg:text-[22px]">+1 840 841 256</span>
            </div>

            <div className="flex text-white gap-x-3.5 items-center mb-12">
              <img className="border rounded-[7.3px] p-2 lg:p-4" src="/images/SVG.png" alt="email" />
              <span className="font-mundial-medium text-lg lg:text-[22px]">info@domain.com</span>
            </div>

            <span className="text-xl font-mundial-regular">Follow Us</span>

            <div className="flex gap-x-2.5 mt-5">
              <img className="p-3 border rounded-full" src="/images/brand-dribbble.png" alt="" />
              <img className="p-3 border rounded-full" src="/images/brand-dribbble.png" alt="" />
              <img className="p-3 border rounded-full" src="/images/brand-dribbble.png" alt="" />
              <img className="p-3 border rounded-full" src="/images/brand-dribbble.png" alt="" />
            </div>
          </div>


          <div className=" col-span-2 lg:col-span-1">
            <form onSubmit={handleSubmit} className="text-white">

              <label htmlFor="name" className="font-mundial-bold text-[16px] mb-3 block">Full Name</label>
              <input
                type="text"
                value={name}
                id="name"
                placeholder="First name"
                className="mb-7 outline-none border-b px-3 py-4 w-full"
                onChange={(e) => setName(e.target.value)}
              />

              <label htmlFor="email" className="font-mundial-bold text-[16px] mb-3 block">Email</label>
              <input
                type="text"
                id="email"
                value = {email}
                placeholder="you@gmail.com"
                className="mb-7 outline-none border-b px-3 py-4 w-full"
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="number" className="font-mundial-bold text-[16px] mb-3 block">Phone Number</label>
              <input
                type="number"
                id="number"
                value={phone}
                placeholder="+671 800234756"
                className="mb-7 outline-none border-b px-3 py-4 w-full"
                onChange={(e) => setPhone(e.target.value)}
              />

              <label htmlFor="message" className="font-mundial-bold text-[16px] mb-3 block">Message</label>
              <input
                type="text"
                id="message"
                value={message}
                placeholder="Type"
                className="mb-7 outline-none border-b px-3 py-4 w-full"
                onChange={(e) => setMessage(e.target.value)}
              />

              <button className="border rounded-[60px] flex items-center justify-center gap-x-2.5 px-2 py-1.5 lg:px-4 lg:py-2">
                <span className="font-mundial-medium text-[18px]">Submit</span>
                <img src="/images/arrow.png" alt="arrow" />
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
