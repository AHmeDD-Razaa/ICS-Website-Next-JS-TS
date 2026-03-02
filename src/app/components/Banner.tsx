import React from 'react'

export default function Banner({text1, text2, text3, buttons}:{text1:string , text2?:string, text3?:string, buttons?: string[] }) {
  return (
    
         <div className="bg-[#0C1120] pl-50 pt-22.75 pb-19">
                <p className='text-[#85888F] font-medium text-[18px] pb-5' >Home  <span className='hover:text-white'> / {text1}</span> </p>
                {text2 && <h2 className=' text-white font-bold text-6xl'>{text2}</h2>}
                {buttons && buttons?.length > 0 && (
        <div className="flex flex-wrap gap-7.5 mt-7.5">
          {buttons.map((btn, index) => (
            <button
              key={index}
              className="px-3.25 py-4.25 font-medium text-[18px] text-white hover:bg-[#123A60] border rounded-full"
            >
              {btn}
            </button>
          ))}
        </div>
      )}
      {text3 && <p className='pt-5 text-white font-normal text-[20px]'>{text3}</p>}
            </div>
    
  )
}
