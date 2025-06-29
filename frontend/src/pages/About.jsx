import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterbox from '../components/NewsLetterbox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={"US"}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]'  src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam accusamus numquam, esse odio consequuntur, repellat at alias molestiae dolorum minima ipsum sequi vero illo labore animi debitis, fugiat officiis.
          </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae doloremque veniam beatae unde et distinctio minima, aut ex esse quidem nostrum amet dicta provident molestias enim reprehenderit veritatis cupiditate maxime?</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem illum ab nisi, sapiente aut id obcaecati fugit deserunt numquam laborum odio nesciunt reprehenderit cum voluptatibus, earum aspernatur officiis cupiditate perferendis.</p>
        </div>
      </div>
      <div className='text-xl py-4 '>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Ouality Assurance</b>
          <p className='text-gray-600'>Quality select snd vet each product to ensure it meets our stringent quality standards.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>Quality select snd vet each product to ensure it meets our stringent quality standards.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Quality select snd vet each product to ensure it meets our stringent quality standards.
          </p>
        </div>
      </div>
      <NewsLetterbox/>
    </div>
  )
}

export default About