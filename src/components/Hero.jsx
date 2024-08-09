import React from 'react'
import { Button } from './Button'



export const Hero = () => {

  return (
    <>
    
    <section id='hero' className='bg-[#0a192f] h-screen  w-full flex flex-col  justify-center items-start p-5 lg:p-0'>
        <p className='text-[#51dfc2] font-mono px-1'>Hi, my name is</p>
        <h1 className='text-white font-calibre-bold text-7xl pt-2 '>Pau Melià.</h1>
        <h2 className=' text-[#ffffffce] font-calibre-bold text-6xl lg:text-7xl pt-1 '>I create online experiences.</h2>
        <p className=' max-w-xl text-[#ffffffce] font-calibre text-xl mb-4'>Passionate Software Engineering student and Frontend Developer, specializing in creating intuitive and functional interfaces that enhance user experience and drive business objectives.</p>
        <div className='flex gap-4'>
        <Button text="Resume" href="#jobs"/>
        <a href="mailto:paumelia98@gmail.com" className='text-[#ffffff] duration-500  border-2 border-[#ffffff] p-2 rounded px-4 shadow transform transition-transform hover:scale-105'>Contact</a>
        </div>
       
    </section>
    
    </>
    
  )
}
