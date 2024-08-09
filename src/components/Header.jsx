import React, { useState, useEffect } from 'react'
import { Button } from './Button'

export const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const isScrolling = window.scrollY > 10;
      setScrolling(isScrolling);
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);

  return (
    <nav className={`bg-[#0a192f] w-full flex items-center justify-between py-8 px-5 text-sm z-50 lg:fixed absolute ${scrolling ? 'shadow-lg' : ''}`}>
      <p className='text-white text-xl font-bold'>pau<span className='text-[#51cfb6]'>melia</span></p>
      <div className='hidden md:flex gap-10 items-center'>
        <a href="#about" className='text-[white] hover:text-[#51cfb6]'><span className='text-[#51cfb6] pe-2'>01.</span>About</a>
        <a href="#jobs" className='text-[white] hover:text-[#51cfb6]'><span className='text-[#51cfb6] pe-2'>02.</span>Experience</a>
        <a href="#works" className='text-[white] hover:text-[#51cfb6]'><span className='text-[#51cfb6] pe-2'>03.</span>Work</a>
        <a href="mailto:paumelia98@gmail.com" className='text-[white] hover:text-[#51cfb6]'><span className='text-[#51cfb6] pe-2'>04.</span>Contact</a>
      </div>
      <Button text="Contact" href="mailto:paumelia98@gmail.com"/>
      
    </nav>
  )
}
