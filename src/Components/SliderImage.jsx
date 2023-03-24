import React from 'react';
import Image from './Images';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './header.css';

export default function SliderImage() {
  return (
    <div className='mb-20 border border-sky-500 rounded-[40px] container py-12 w-[90%] lg:w-[60%] bg-[#f8f8f8] m-auto'>
        <AliceCarousel className='mb-0' autoPlay autoPlayInterval='2000'>
          <div className='sliderimg'>
            <Image className='w-[80%] h-80 m-auto rounded-[40px]' src='images/image33.jpg' alt='' />
          </div>
          <div className='sliderimg'>
            <Image className='w-[80%] h-80 m-auto rounded-[40px]' src='images/image34.jpg' alt='' />
          </div>
          <div className='sliderimg'>
            <Image className='w-[80%] h-80 m-auto rounded-[40px]' src='images/image35.jpg' alt='' />
          </div>   
          <div className='sliderimg'>
            <Image className='w-[80%] h-80 m-auto rounded-[40px]' src='images/image36.jpg' alt='' />
          </div>
          <div className='sliderimg'>
            <Image className='w-[80%] h-80 m-auto rounded-[40px]' src='images/image37.jpg' alt='' />
          </div>
          <div className='sliderimg'>
            <Image className='w-[80%] h-80 m-auto rounded-[40px]' src='images/image38.jpg' alt='' />
          </div>
          <div className='sliderimg'>
            <Image className='w-[80%] h-80 m-auto rounded-[40px]' src='images/image39.jpg' alt='' />
          </div>
          <div className='sliderimg'>
            <Image className='w-[80%] h-80 m-auto rounded-[40px]' src='images/image40.jpg' alt='' />
          </div>
          <div className='sliderimg'>
            <Image className='w-[80%] h-80 m-auto rounded-[40px]' src='images/image41.jpg' alt='' />
          </div>
          <div className='sliderimg'>
            <Image className='w-[80%] h-80 m-auto rounded-[40px]' src='images/image42.jpg' alt='' />
          </div>
          <div className='sliderimg'>
            <Image className='w-[80%] h-80 m-auto rounded-[40px]' src='images/image43.jpg' alt='' />
          </div>
          <div className='sliderimg'>
            <Image className='w-[80%] h-80 m-auto rounded-[40px]' src='images/image44.jpg' alt='' />
          </div>           
        </AliceCarousel>
    </div>
  )
}
