import React from 'react'

export default function DisputeDetail() {
    return (
        <div className='  z-50 bg-[#111928] text-white rounded-[20px] border border-white px-13.5 py-11.5'>
            <h2 className='text-[48px] text-center font-bold pb-7.5'>Raise a Dispute</h2>
            <form action="" className='flex flex-col gap-y-6.5'>
                <div>
                    <label className='font-cairo font-medium text-[20px] ' htmlFor="service">
                        Service
                        <div className='mt-4 px-6 py-4  flex justify-between items-center bg-[#192439] border-b border-[#A3A7B0]' >
                            <select
                                name="service"
                                id="service"
                                className=" bg-[#192439] text-[18px] w-full  outline-none "
                            >
                                <option value="select">Select </option>
                                <option value="business">Business</option>
                                <option value="consultancy">Consultancy</option>
                                <option value="marketing">Marketing</option>
                            </select>
                        </div>
                    </label>
                </div>
                <div>
                    <label className='font-cairo font-medium text-[20px] ' htmlFor="description">
                        Issue Description
                         
                            <textarea name="description" id="description" className=' min-h-[70px] max-h-[200px] h-[150px] mt-4 px-6 py-4 text-[18px] w-full bg-[#192439] border-b border-[#A3A7B0]' placeholder='Enter ' ></textarea>

                        
                    </label>
                </div>
                <div>
                    <label className='font-cairo font-medium text-[20px] ' htmlFor="evidence">
                        Attach Evidence
                        <div className='mt-4 px-6 py-4 border-white border border-dashed' >
                            <div className='flex flex-col justify-center items-center '>
                                <img src="/images/Icon.png" alt="" />
                                <p>Browse and chose the files you want to upload from your computer</p>
                            </div>

                        </div>
                    </label>
                    <input hidden type="file" id='evidence' accept='image/*' />
                </div>
            </form>
        </div>
    )
}
