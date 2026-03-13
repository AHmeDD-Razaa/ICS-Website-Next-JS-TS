import React from 'react'

export default function ProfileButton({ text, type = "button" }: { text: string, type?: "button" | "submit" | "reset" }) {
    return (
        <button type={type} className='flex justify-center px-[155px] py-4.5 text-white border text-[20px] font-semibold border-white items-center rounded-[60px] hover:bg-white hover:text-black'>{text}</button>
    )
}
