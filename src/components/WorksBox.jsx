import React from 'react';




export const WorksBox = ({title, href,link}) => {
  return (
    <>
    <a className='flex flex-col' href={link}>
        <h3 className='text-[#ccd6f6] font-calibre text-2xl pb-2  '>{title} </h3>
        <div className='relative hover:bg-transparent'>
        
            <img src={href} alt="" className='object-contain transform  transition-all duration-300' />
            <div className="absolute inset-0 bg-[#174e43] opacity-50 hover:opacity-0 transition-all duration-300"></div>
        </div>

    </a>
    

    </>
    





  )
}
