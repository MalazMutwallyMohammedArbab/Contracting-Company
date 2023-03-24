import React from 'react'
import Image from '../Components/Images'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../Components/header.css'

export default function Features() {
  return (
    <div className='mb-20'>
        <div className='container block mx-auto shadow shadow-sky-200 py-3 rounded-[40px] border border-sky-500 w-[90%] lg:w-[60%] bg-[#f8f8f8]'>
          <div className='m-auto mx-4 mt-4'>
            <AliceCarousel className='mb-0' autoPlay autoPlayInterval='2000'>
              <div className='sliderimg'>
                <div className='text-2xl text-sky-500 border-b-2 pb-2 block border-sky-500 w-fit m-auto md:text-4xl mb-16'>لماذا اعتمد المحدودة؟</div>
                <div className='shadow-xl text-center py-2 bg-white mb-7 w-[80%] m-auto'>
                  <Image className='w-56 h-10 m-auto md:w-80' src='images/logo.jpg' alt='' />
                  <div className='text-white bg-sky-500 font-medium rounded-lg text-[19px] md:text-[24px] py-3 px-5 w-fit m-auto text-center mt-2'>طريقة عمل مبتكرة</div>
                  <div className='text-lg md:text-xl my-4 px-3 md:w-[80%] m-auto'>نعمل وفق طريقة عمل مبتكرة تركز على الجانب العملي وتطبيق أفضل الممارسات العالمية، مع الالتزام بالوقت والعمل الجاد</div>
                </div>
              </div>

              <div className='sliderimg'>
                <div className='text-2xl text-sky-500 border-b-2 pb-2 block border-sky-500 w-fit m-auto md:text-4xl mb-12'>لماذا اعتمد المحدودة؟</div>
                <div className='shadow-xl text-center py-2 bg-white mb-7 w-[80%] m-auto'>
                  <Image className='w-56 h-10 m-auto md:w-80' src='images/logo.jpg' alt='' />
                  <div className='text-white bg-sky-500 font-medium rounded-lg text-[19px] md:text-[24px] py-3 px-5 w-fit m-auto text-center mt-2'>العمق المحلي</div>
                  <div className='text-lg md:text-xl my-4 px-3 md:w-[80%] m-auto'>عند تقديم منتجاتنا وحلولنا الاستثمارية، فإننا نأخذ بالاعتبار معرفتنا وخبرتنا المحلية وبالتالي نساهم في نشر المهارات والمعرفة من خلال العمل كامتداد لفريق العميل</div>
                </div>
              </div>

              <div className='sliderimg'>
                <div className='text-2xl text-sky-500 border-b-2 pb-2 block border-sky-500 w-fit m-auto md:text-4xl mb-20'>لماذا اعتمد المحدودة؟</div>
                <div className='shadow-xl text-center py-2 bg-white mb-7 w-[80%] m-auto'>
                  <Image className='w-56 h-10 m-auto md:w-80' src='images/logo.jpg' alt='' />
                  <div className='text-white bg-sky-500 font-medium rounded-lg text-[19px] md:text-[24px] py-3 px-5 w-fit m-auto text-center mt-2'>بيئة عمل جاذبة</div>
                  <div className='text-lg md:text-xl my-4 px-3 md:w-[80%] m-auto'>فريقنا يعمل في بيئة إبداعية جاذبة لأفضل الكفاءات في مجال الاستشارات الإدارية والمهنية</div>
                </div>
              </div>

              <div className='sliderimg'>
                <div className='text-2xl text-sky-500 border-b-2 pb-2 block border-sky-500 w-fit m-auto md:text-4xl mb-7'>لماذا اعتمد المحدودة؟</div>
                <div className='shadow-xl text-center py-2 bg-white mb-7 w-[80%] m-auto'>
                  <Image className='w-56 h-10 m-auto md:w-80' src='images/logo.jpg' alt='' />
                  <div className='text-white bg-sky-500 font-medium rounded-lg text-[19px] md:text-[24px] py-3 px-5 w-fit m-auto text-center mt-2'>توحيد المصالح المشتركة</div>
                  <div className='text-lg md:text-xl my-4 px-3 md:w-[80%] m-auto'>تحقيق الأداء المتميز هو دافعنا، فبالتالي فإن رسوم خدماتنا تعكس منهجنا. وكذلك تعد إدارتنا حاليا هي أكبر مساهم في الشركة. ولذلك، فإن مصالح عملاء وشركاء الشركة تعد مصالحها. ومنهجية العمل لدينا قائمة على تحقيق النتائج</div>
                </div>
              </div>

              <div className='sliderimg'>
                <div className='text-2xl text-sky-500 border-b-2 pb-2 block border-sky-500 w-fit m-auto md:text-4xl mb-7'>لماذا اعتمد المحدودة؟</div>
                <div className='shadow-xl text-center py-4 bg-white mb-7 w-[80%] m-auto'>
                  <Image className='w-56 h-10 m-auto md:w-80' src='images/logo.jpg' alt='' />
                  <div className='text-white bg-sky-500 font-medium rounded-lg text-[19px] md:text-[24px] py-3 px-5 w-fit m-auto text-center mt-2'>المصداقية والثقة</div>
                  <div className='text-lg md:text-xl my-4 px-3 md:w-[80%] m-auto'>حيث نسعى إلى بناء علاقات عمل وثيقة وبناءة طويلة الأمد مع شركائنا التجاريين، هذه العلاقات يجب أن تكون مبنية على مجموعة من القيم الثابتة، وأهمها الثقة والمصداقية والنزاهة والمصلحة المشتركة</div>
                </div>
              </div>

            </AliceCarousel>
          </div>
        </div>

    </div>
  )
}
