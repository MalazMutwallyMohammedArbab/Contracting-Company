import React from 'react'

export default function About() {
  return (
    <div className='mb-20'>
      <div className='container block mx-auto shadow shadow-sky-200 py-1 rounded-[40px] border border-sky-500 w-[90%] lg:w-[60%] bg-[#f8f8f8]'>
        <div className='text-4xl text-sky-500 mt-7 border-b-2 pb-2 block border-sky-500 w-fit m-auto md:text-6xl mb-3'>نبذة عنا</div>
        <div className='shadow-xl text-center py-4 bg-sky-200 w-[80%] m-auto my-8 rounded-[40px]'>
          <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow mb-4 mx-4'>
            <div className='text-lg md:text-xl'>شركة خدمية رائدة متخصصة في تمثيل الشركات التجارية العالمية بالمملكة العربية السعودية في مجال توريد البضائع والأجهزة، ولتقديم خدماتها بشكل احترافي والعمل على تأمين البيئة المناسبة لتنفيذ كافة الأعمال المطلوبة.</div>
          </div>
          <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow mx-4'>
            <div className='text-lg md:text-xl'>حيث تقوم الشركة بتصميم وتركيب وصيانة جميع المعدات والأجهزة والخدمات الشاملة وفقا لمتطلبات العميل. والرسومات المقدمة وفاتورة الكميات وتقديم اختيارات متعددة وتنوع في أصناف المنتجات ما بين أجهزة الكترونية وكهربائية.</div>
          </div>
        </div>
      </div>
    </div>
  )
}
