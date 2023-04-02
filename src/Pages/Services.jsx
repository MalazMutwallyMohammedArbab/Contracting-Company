import React from 'react';
import Image from '../Components/Images';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../Components/header.css';

export default function Services() {
  return (
    <div className='mb-20'>
      <div className='container block mx-auto shadow shadow-sky-200 py-1 rounded-[40px] border border-sky-500 w-[90%] lg:w-[60%] bg-[#f8f8f8]'>
        <div className='text-4xl text-sky-500 mt-7 border-b-2 pb-2 block border-sky-500 w-fit m-auto md:text-6xl mb-3'>خدماتنا</div>
        <div className='shadow-xl text-center py-4 bg-[#f7f7f7] w-[80%] m-auto my-8 rounded-[40px]'>
          <div className='text-white bg-sky-600 font-medium rounded-lg text-[19px] md:text-[24px] py-3 px-5 w-fit m-auto text-center mb-4'>التوريد الصناعي</div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-4 text-[#555] font-medium'>
            <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow'>
              <div className='text-md md:text-xl'>تنفيذ أعمال التبريد (أمونيا، فريون)</div>
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

        <AliceCarousel className='mb-0' autoPlay autoPlayInterval='2000'>
          <div className='sliderimg'>
            <Image className='w-56 h-40 m-auto md:w-80' src='images/image1.jpg' alt='' />
          </div>
          <div className='sliderimg'>
            <Image className='w-56 h-40 m-auto md:w-80' src='images/image3.jpg' alt='' />
          </div>
          <div className='sliderimg'>
            <Image className='w-56 h-40 m-auto md:w-80' src='images/image14.jpg' alt='' />
          </div>              
        </AliceCarousel>

        <div className='shadow-xl text-center py-4 bg-[#f7f7f7] w-[80%] m-auto my-8 rounded-[40px]'>
          <div className='text-white bg-[#666] font-medium rounded-lg text-[16px] md:text-[22px] py-3 px-4 w-fit m-auto text-center mb-4'>توريد وتركيب تجهيزات الأسواق المركزية</div>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4 px-4 text-[#555] font-medium'>
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

        <AliceCarousel className='mb-0' autoPlay autoPlayInterval='2000'>
          <div className='sliderimg'>
            <Image className='w-56 h-40 m-auto md:w-80' src='images/image4.jpg' alt='' />
          </div>
          <div className='sliderimg'>
            <Image className='w-56 h-40 m-auto md:w-80' src='images/image5.jpg' alt='' />
          </div>
          <div className='sliderimg'>
            <Image className='w-56 h-40 m-auto md:w-80' src='images/image6.jpg' alt='' />
          </div>  
          <div className='sliderimg'>
            <Image className='w-56 h-40 m-auto md:w-80' src='images/image7.jpg' alt='' />
          </div>
          <div className='sliderimg'>
            <Image className='w-56 h-40 m-auto md:w-80' src='images/image2.jpg' alt='' />
          </div>
          <div className='sliderimg'>
            <Image className='w-56 h-40 m-auto md:w-80' src='images/image15.jpg' alt='' />
          </div>  
          <div className='sliderimg'>
            <Image className='w-56 h-40 m-auto md:w-80' src='images/image16.jpg' alt='' />
          </div>
          <div className='sliderimg'>
            <Image className='w-56 h-40 m-auto md:w-80' src='images/image26.jpg' alt='' />
          </div> 
          <div className='sliderimg'>
            <Image className='w-56 h-40 m-auto md:w-80' src='images/image27.jpg' alt='' />
          </div>               
        </AliceCarousel>

        <div className='shadow-xl text-center py-4 bg-[#f7f7f7] w-[80%] m-auto my-8 rounded-[40px]'>
          <div className='text-white bg-sky-600 font-medium rounded-lg text-[15px] md:text-[20px] py-3 px-4 w-fit m-auto text-center mb-4'>تقديم خدمات ما بعد البيع والصيانة الدورية</div>
          <div className='grid grid-cols-1 gap-4 px-4 text-[#555] font-medium'>
            <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow'>
              <div className='text-md md:text-xl'>تبدأ خدمات ما بعد البيع من يوم تفحص المكان، من خلال إدارة المشروع والتركيب وما يلي ذلك، وتمتد إلى سنوات عديدة</div>
            </div>
            <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow'>
              <div className='text-md md:text-xl'>نحن نقوم بعمليات الفحص الروتينية، ونجري الاتصالات للقيام بالصيانة عند الحاجة</div>
            </div>
          </div>
        </div>

        <AliceCarousel className='mb-0' autoPlay autoPlayInterval='2000'>
          <div className='sliderimg'>
            <Image className='w-56 h-40 m-auto md:w-80' src='images/image24.jpg' alt='' />
          </div>
          <div className='sliderimg'>
            <Image className='w-56 h-40 m-auto md:w-80' src='images/image17.jpg' alt='' />
          </div>
          <div className='sliderimg'>
            <Image className='w-56 h-40 m-auto md:w-80' src='images/image18.jpg' alt='' />
          </div>   
          <div className='sliderimg'>
            <Image className='w-56 h-40 m-auto md:w-80' src='images/image19.jpg' alt='' />
          </div>
          <div className='sliderimg'>
            <Image className='w-56 h-40 m-auto md:w-80' src='images/image25.jpg' alt='' />
          </div>
          <div className='sliderimg'>
            <Image className='w-56 h-40 m-auto md:w-80' src='images/image28.jpg' alt='' />
          </div>
          <div className='sliderimg'>
            <Image className='w-56 h-40 m-auto md:w-80' src='images/image29.jpg' alt='' />
          </div>              
        </AliceCarousel>

        <div className='shadow-xl text-center py-4 bg-[#f7f7f7] w-[80%] m-auto my-8 rounded-[40px]'>
          <div className='text-white bg-[#666] font-medium rounded-lg text-[19px] md:text-[24px] py-3 px-5 w-fit m-auto text-center mb-4'>محطات تحلية المياه</div>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4 px-4 text-[#555] font-medium'>
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

        <AliceCarousel className='mb-0' autoPlay autoPlayInterval='2000'>
          <div className='sliderimg'>
            <Image className='w-56 h-40 m-auto md:w-80' src='images/image30.jpg' alt='' />
          </div>
          <div className='sliderimg'>
            <Image className='w-56 h-40 m-auto md:w-80' src='images/image31.jpg' alt='' />
          </div>
          <div className='sliderimg'>
            <Image className='w-56 h-40 m-auto md:w-80' src='images/image32.jpg' alt='' />
          </div>              
        </AliceCarousel>

        <div className='shadow-xl text-center py-4 bg-[#f7f7f7] w-[80%] m-auto my-8 rounded-[40px]'>
          <div className='text-white bg-sky-600 font-medium rounded-[40px] text-[17px] md:text-[24px] py-3 px-5 w-[80%] m-auto text-center'>محطات تعقيم مع أنظمة الرش الخاصة بها</div>
        </div>

        <div className='shadow-xl text-center py-4 bg-[#f7f7f7] w-[80%] m-auto my-8 rounded-[40px]'>
          <div className='text-white bg-[#666] font-medium rounded-lg text-[19px] md:text-[24px] py-3 px-5 w-fit m-auto text-center mb-4'>خدمات التصميم والإشراف</div>
          <div className='grid grid-cols-2 gap-4 px-4 text-[#555] font-medium'>
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
    </div>
  )
}
