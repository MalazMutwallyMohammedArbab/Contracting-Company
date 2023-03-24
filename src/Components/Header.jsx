import React from 'react'
import Image from './Images'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './header.css'

export default function Header() {
  return (
    <div className='text-center mb-20'>
      <div className='text-xl pt-5 md:text-3xl bg-white m-auto'>
          <Image className='w-56 h-10 m-auto md:w-80' src='images/logo.jpg' alt='' />
          <div className='tracking-wider'>شركـــة اعتـمـد المحـدودة</div>
          <div>Atmiid Limited Company</div>
        </div>
      <div className='flex justify-around mt-2'>
        <Image className='w-40 h-40 md:w-80 md:h-40 md:w-56' src='images/image1.jpg' alt='' />
        <Image className='w-40 h-40 md:w-80 md:h-40 md:w-56' src='images/image4.jpg' alt='' />
      </div>
        <div className='text-4xl text-sky-500 mt-7 border-b-2 block border-sky-500 w-fit m-auto md:text-6xl mb-3'>خـــدمــــــاتــــنــــا</div>
        <div className='container block mx-auto shadow shadow-sky-200 py-1 rounded-[40px] border border-sky-500 w-[90%] lg:w-[60%] bg-[#f8f8f8]'>
          <div className='m-auto mx-4 mt-4'>
            <AliceCarousel className='mb-0' autoPlay autoPlayInterval='2000'>
              <div className='sliderimg'>
                <div className='text-white bg-sky-500 font-medium rounded-lg text-[19px] md:text-[24px] py-3 px-5 w-fit m-auto text-center'>التوريد الصناعي</div>
                <div className='shadow-xl text-center py-2 bg-sky-200 mt-2'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-2 px-1 text-[#555] font-medium'>
                    <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow'>
                      <div className='text-md md:text-xl'>تنفيذ أعمال التبريد (امونيا / فريون)</div>
                    </div>
                    <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow'>
                      <div className='text-md md:text-xl'>تركيب المستودعات الخاصة بخزانةالتبريد اللوجستية</div>
                    </div>
                    <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow'>
                      <div className='text-md md:text-xl'>توريد وتركيب أنظمة التبريد الخاصة بخطوط الإنتاج للمواد الغذائية للمعامل والمصانع</div>
                    </div>
                    <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow'>
                      <div className='text-md md:text-xl'>تصميم وتوريد وتركيب المسالخ الغذائية (اللحوم والدواجن)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='sliderimg'>
                <div className='text-[16px] md:text-[20px] mb-2'>تركيب المستودعات الخاصة بخزانة التبريد اللوجستية</div>
                <Image className='h-40 w-40 m-auto md:w-80 md:h-40 mb-2' src='images/image1.jpg' alt='' />
                <Image className='h-40 w-40 m-auto md:w-80 md:h-40' src='images/image3.jpg' alt='' />
              </div>

              <div className='sliderimg'>
                <div className='text-white bg-sky-500 font-medium rounded-lg text-[19px] md:text-[24px] py-3 px-5 w-fit m-auto text-center'>توريد وتركيب تجهيزات الأسواق المركزية</div>
                <div className='shadow-xl text-center pb-6 bg-sky-200 mt-2'>
                  <div className='grid grid-cols-2 md:grid-cols-3 gap-3 px-1 text-[#555] font-medium mt-9 pt-6'>
                    <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow'>
                      <div className='text-md md:text-xl'>ثلاجات عرض</div>
                    </div>
                    <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow'>
                      <div className='text-md md:text-xl'>أنظمة تبريد</div>
                    </div>
                    <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow'>
                      <div className='text-md md:text-xl'>غرف وتبريد</div>
                    </div>
                    <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow'>
                      <div className='text-md md:text-xl'>أرفف</div>
                    </div>
                    <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow'>
                      <div className='text-md md:text-xl'>كاشيرات</div>
                    </div>
                    <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow'>
                      <div className='text-md md:text-xl'>عربات التسوق</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='sliderimg'>
                <div className='text-lg mb-2 md:text-2xl'>ثلاجات عرض</div>
                <div className='flex justify-around mb-2'>
                  <Image className='h-40 w-40 md:w-60 md:h-40' src='images/image4.jpg' alt='' />
                  <Image className='h-40 w-40 md:w-60 md:h-40' src='images/image5.jpg' alt='' />
                </div>
                <div className='flex justify-around'>
                  <Image className='h-40 w-40 md:w-60 md:h-40' src='images/image6.jpg' alt='' />
                  <Image className='h-40 w-40 md:w-60 md:h-40' src='images/image7.jpg' alt='' />
                </div>
              </div>

              <div className='sliderimg'>
                <div className='text-lg mb-2 md:text-2xl'>أنظمة تبريد - غرف وتبريد</div>
                <div className='flex justify-around mb-2'>
                  <Image className='h-40 w-40 md:w-60 md:h-40' src='images/image9.jpg' alt='' />
                  <Image className='h-40 w-40 md:w-60 md:h-40' src='images/image10.jpg' alt='' />
                </div>
                <div className='flex justify-around'>
                  <Image className='h-40 w-40 md:w-60 md:h-40' src='images/image11.jpg' alt='' />
                  <Image className='h-40 w-40 md:w-60 md:h-40' src='images/image12.jpg' alt='' />
                </div>
              </div>

              <div className='sliderimg'>
                <div className='text-white bg-sky-500 font-medium rounded-lg text-[19px] md:text-[24px] py-3 px-5 w-fit m-auto text-center'>تقديم خدمات ما بعد البيع والصيانة الدورية</div>
                <div className='shadow-xl text-center pb-6 bg-sky-200 mt-2'>
                  <div className='grid grid-cols-1 gap-3 px-1 text-[#555] font-medium mt-4 pt-6'>
                    <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow'>
                      <div className='text-md md:text-xl'>تبدأ خدمات ما بعد البيع من يوم تفحص المكان، من خلال إدارة المشروع والتركيب وما يلي ذلك، وتمتد إلى سنوات عديدة</div>
                    </div>
                    <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow'>
                      <div className='text-md md:text-xl'>نحن نقوم بعمليات الفحص الروتينية، ونجري الاتصالات للقيام بالصيانة عند الحاجة</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='sliderimg'>
                <div className='text-white bg-sky-500 font-medium rounded-lg text-[19px] md:text-[24px] py-3 px-5 w-fit m-auto text-center'>محطات تحلية المياه</div>
                <div className='shadow-xl text-center pb-6 bg-sky-200 mt-2'>
                  <div className='grid grid-cols-2 md:grid-cols-3 gap-3 px-1 text-[#555] font-medium mt-4 pt-6'>
                    <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow'>
                      <div className='text-md md:text-xl'>أنظمة التحلية</div>
                    </div>
                    <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow'>
                      <div className='text-md md:text-xl'>الفلاتر الميكانيكية</div>
                    </div>
                    <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow'>
                      <div className='text-md md:text-xl'>محطات التناضح العكسي المدمجة</div>
                    </div>
                    <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow'>
                      <div className='text-md md:text-xl'>الفلاتر الأتوماتيكية</div>
                    </div>
                    <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow'>
                      <div className='text-md md:text-xl'>أنظمة التناضح العكسي - تيترا</div>
                    </div>                
                  </div>
                </div>
              </div>
              
              <div className='sliderimg'>
                <div className='text-white bg-sky-500 font-medium rounded-lg text-[19px] md:text-[24px] py-3 px-5 w-fit m-auto text-center mt-20'>محطات تعقيم مع أنظمة الرش الخاصة بها</div>
              </div>

              <div className='sliderimg'>
                <div className='text-white bg-sky-500 font-medium rounded-lg text-[19px] md:text-[24px] py-3 px-5 w-fit m-auto text-center'>خدمات التصميم والإشراف</div>
                <div className='shadow-xl text-center pb-6 bg-sky-200 mt-2'>
                  <div className='grid grid-cols-2 gap-3 px-1 text-[#555] font-medium mt-9 pt-6'>
                    <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow'>
                      <div className='text-md md:text-xl'>التصميم الداخلي</div>
                    </div>
                    <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow'>
                      <div className='text-md md:text-xl'>إدارة المشاريع والإشراف الهندسي</div>
                    </div>
                    <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow'>
                      <div className='text-md md:text-xl'>استشارات كهروميكانيكية</div>
                    </div>
                    <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow'>
                      <div className='text-md md:text-xl'>استشارات السلامة</div>
                    </div>             
                  </div>
                </div>
              </div>
            </AliceCarousel>
          </div>
        </div>
        
    </div>
  )
}
