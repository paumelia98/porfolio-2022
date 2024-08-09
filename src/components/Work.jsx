import React from 'react'
import { WorksBox } from './WorksBox'
import aprobatus from '/src/assets/images/aprobatus.jpg';
import crossfit from '/src/assets/images/crossfit.jpg';
import campus from '/src/assets/images/campus.jpg';
import ratelist from '/src/assets/images/ratelist.jpg';
export const Work = () => {
  return (
    <section id='works' className='px-4'>
          <h3 className='text-[#ccd6f6] font-calibre text-4xl pb-6  '><span className='font-mono text-[#51dfc2]  text-2xl'>03.</span>My Works. </h3>
          <div className='works '>
            <WorksBox title="Aprobatus" href={aprobatus} link="https://www.aprobatus.es"/>
            <WorksBox title="CrossfitTorredembarra" href={crossfit}/>
            <WorksBox title="Campus Virtual" href={campus}  link="https://campus.aprobatus.es/public/login"/>
            <WorksBox title="Rate List App" href={ratelist} link="https://www.ratelist.app"/>
          </div>
          
    </section>
  )
}
