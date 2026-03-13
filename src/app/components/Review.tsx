"use client"

import React from 'react'
import ReactStars from 'react-stars'



export default function Review() {

    const ratingChanged = (newRating: number) => {
        console.log(newRating)
    }

    return (
        <div className=' bg-[#111928] rounded-[30px] border border-white'>

            <div className='text-white px-13.5 py-11.5'>

                <h2 className='font-bold text-[40px] text-center'>
                    Write A Review
                </h2>

                <p className='px-8 pt-4'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>

                <p className='pt-7.5 text-[20px] font-semibold'>
                    Rating
                </p>

                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    color2={'#ffd700'} />
                <textarea name="" className='w-full h-[130px] min-h-[70px] max-h-[200px] bg-[#192439] px-6 py-4 mt-7.5 text-[18px] border-b border-[#A3A7B0]' id="" placeholder='Type '></textarea>
                <button className='mt-7.5 text-black py-4.5 bg-white text-[20px] font-semibold justify-center items-center w-full rounded-[60px]'>Submit</button>

            </div>

        </div>
    )
}