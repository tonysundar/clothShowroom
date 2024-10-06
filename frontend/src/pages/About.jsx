import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
             <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=''/>
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
             <p>An e-commerce website called "Forever" might focus on selling products that are designed to last or have a timeless appeal. This could include anything from sustainable fashion to high-quality home goods. The idea behind such a brand would likely emphasize durability, style, and a commitment to eco-friendly practices.</p>
             <p> the name "Forever" suggests a focus on long-lasting value and quality, appealing to consumers who want products that stand the test of time. </p>
             <b className='text-gray-800'>Our Mission</b>
             <p>The mission of "Forever" focuses on providing high-quality, sustainable products designed to last while fostering a strong customer connection. It emphasizes timeless design and affordability, appealing to those who value durability and eco-friendly practices.</p>
          </div>
      </div>

      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10  md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance :</b>
          <p className='text-gray-600'>"Forever is committed to ensuring customer satisfaction through quality products and reliable service, providing peace of mind with every purchase."</p>
        </div>
        <div className='border px-10  md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience :</b>
          <p className='text-gray-600'>"Forever prioritizes convenience, offering a seamless shopping experience with user-friendly navigation and fast delivery options."</p>
        </div>
        <div className='border px-10  md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service :</b>
          <p className='text-gray-600'>"Forever is dedicated to delivering exceptional service, ensuring every customer feels valued and supported throughout their shopping journey."</p>
        </div>
      </div>
        <NewsletterBox/>
    </div>
  )
}

export default About
