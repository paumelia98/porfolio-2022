import React, { useEffect } from 'react';
import './App.css'
import './index.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Social } from './components/Social'
import { About } from './components/About'
import Jobs from './components/Jobs';
import { Work } from './components/Work';
import { Footer } from './components/Footer';






function App() {
  useEffect(() => {
    const spotlight = document.getElementById('spotlight');

    const moveSpotlight = e => {
      spotlight.style.left = `${e.clientX}px`;
      spotlight.style.top = `${e.clientY}px`;
    };

    document.addEventListener('mousemove', moveSpotlight);

    return () => {
      document.removeEventListener('mousemove', moveSpotlight);
    };
  }, []);

  
 

  return (
    <>
      <Header/>
      <main>
        <Social id="social"/>
        <Hero/>
      
        
        <About/>
      <Jobs/>
      <Work/>
        <Footer/>
        <div id="spotlight" className="spotlight"></div>
      </main>
    </>
  )
}

export default App;
