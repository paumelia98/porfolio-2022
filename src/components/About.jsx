import React, { useRef, useEffect } from 'react';
import bootstrap from '/src/assets/images/bootstrap.svg';
import html from '/src/assets/images/html.svg';
import css from '/src/assets/images/css.svg';
import javascript from '/src/assets/images/javascript.svg';
import laravel from '/src/assets/images/laravel.svg';
import react from '/src/assets/images/react.svg';
import wordpress from '/src/assets/images/wordpress.svg';
import tailwind from '/src/assets/images/tailwind.svg';
import astro from '/src/assets/images/astro.svg';
import c from '/src/assets/images/c.svg';
export const About = () => {

    const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (centerY - y) / 15;
    const rotateY = (x - centerX) / 15;
    cardRef.current.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseOut = () => {
    cardRef.current.style.transform = `perspective(700px) rotateX(0) rotateY(0)`;
  };

  useEffect(() => {
    cardRef.current.addEventListener('mousemove', handleMouseMove);
    cardRef.current.addEventListener('mouseout', handleMouseOut);
    return () => {
      cardRef.current.removeEventListener('mousemove', handleMouseMove);
      cardRef.current.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);
    
    
  return (
    
    <section className=' px-4 lg:mb-20' id='about'>
        <h3 className='text-[#ccd6f6] font-calibre text-4xl pb-6 '><span className='font-mono text-[#51dfc2]  text-2xl'>01.</span>About me.</h3>
        
        <div className='grid grid-cols-10 gap-10'>
            <div className='lg:col-span-5 col-span-10'>
                <p className='max-w-xl text-[#ffffffce] font-calibre text-xl mb-4'> Hello! I'm Pau a  <span className=' text-[#51dfc2]'>Computer Engineering</span> student with a special focus on Software Engineering and a passionate frontend developer with a keen interest in <span className=' text-[#51dfc2]'>React</span>.</p>
                <p className='max-w-xl text-[#ffffffce] font-calibre text-xl mb-4'>Starting my journey at university, quickly fell in love with creating user-centric and <span className=' text-[#51dfc2]'>efficient interfaces</span>. I enjoy the productive synergy from working with UX and UI design teams, transforming ideas into interactive applications.</p>
                <p className='max-w-xl text-[#ffffffce] font-calibre text-xl '>My education provides a comprehensive understanding of the full software development process, which enriches my work as a frontend developer. Eager for the future, I intend to deepen my technical skills, further master development technologies, and continue to create applications that truly make an impact. Impatient to take on new challenges in this dynamic field.</p>
            </div>
            <div className='lg:col-span-5 col-span-10  transform transition-transform hover:scale-105 duration-500 px-10 '>
            <div ref={cardRef} className='card  border-2 border-[#51dfc2] '>
                <h3 className='text-3xl font-mono text-[#51dfc2] font-bold text-center'><span className='text-white pe-1'>My</span>Skills.</h3>
                <div class="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-5 gap-4 justify-center mt-8">
                  
                    <img src={html} alt="html" class="w-full h-auto" />
                    <img src={css} alt="css" class="w-full h-auto" />
                    <img src={javascript} alt="javascript" class="w-full h-auto" />
                    <img src={bootstrap} alt="bootstrap" class="w-full h-auto" />
                    <img src={tailwind} alt="tailwind" class="w-full h-auto" />
                    <img src={wordpress} alt="wordpress" class="w-full h-auto" />
                    <img src={astro} alt="astro" class="w-full h-auto" />
                    <img src={laravel} alt="laravel" class="w-full h-auto" />
                    <img src={react}alt="react" class="w-full h-auto" />
                    <img src={c} alt="c" class="w-full h-auto" />
                </div>

              
            </div>
                </div>

       </div>
       
       
    </section>
  )
}
