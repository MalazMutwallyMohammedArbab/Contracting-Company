import React from 'react';
import Image from '../Components/Images';

export default function Contact() {
  return (
    <div dir='rtl' className='container shadow shadow-sky-200 pt-4 rounded-[40px] m-auto border border-sky-500 w-[90%] md:w-[60%] bg-[#f8f8f8] pb-6 mb-20'>
      <div className='text-4xl text-sky-500 mt-7 border-b-2 pb-2 block border-sky-500 w-fit m-auto md:text-5xl mb-9'>تواصل معنا</div>
      <div className='text-xl lg:text-3xl bg-white text-center w-[80%] m-auto pt-9 pb-2 shadow-xl mb-7'>
        <Image className='w-56 h-10 m-auto md:w-80' src='images/logo.jpg' alt='' />
        <div className='tracking-wider'>شركـــة اعتـمـد المحـدودة</div>
        <div className='mb-12'>Atmiid Limited Company</div>

        <a href="tel:+966541848883" className='flex justify-center'>
          <div className='mb-2 md:text-xl'>00966541848883</div>
          <Image className='h-5 md:h-6' src='images/phone.png' alt='img' />
        </a>

        <a href='mailto:Sultan@atmiid.com' target='_blank' rel='noopener noreferrer' className='flex justify-center'>
          <div className='mb-2 md:text-xl'>Sultan@atmiid.com</div>
          <Image className='h-5 md:h-6' src='images/email.png' alt='img' />
        </a>

        <a href="http://atmiidcom.com/" rel="noreferrer noopener" target="_blank" className='flex justify-center'>
          <div className='mb-2 md:text-xl'>atmiidcom.com</div>
          <Image className='h-5 md:h-6' src='images/web2.png' alt='img' />
        </a>

        <div className='flex justify-center mx-6 mb-12'>
          <div className='md:text-xl'>الرياض- العليا تقاطع العروبة</div>
          <Image className='h-5 md:h-6' src='images/location2.jpg' alt='img' />
        </div>
      </div>
    </div>
  )
}
