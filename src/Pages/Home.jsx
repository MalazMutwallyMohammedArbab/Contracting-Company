import React from 'react';
import About from './About';
import Services from './Services';
import Vision from './Vision';
import Letter from './Letter';
import Features from './Features';
import Contact from './Contact';
import SliderImage from '../Components/SliderImage';

export default function Home() {
  return (
    <div className=''>
      <About />
      <Services />
      <SliderImage />
      <Vision />
      <Letter />
      <Features />
      <Contact />
    </div>
  )
}
