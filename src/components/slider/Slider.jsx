'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { ArrowBack, ArrowForward } from '@mui/icons-material'
import Mobile from './Mobile'

function Slider() {

  // const data = [
  // {
  //   id: 1,
  //   img: '/udemi1.jpg',
  //   title: 'Skills that drive you forward',
  //   desc: 'Technology and the world of work change fast — with us, you’re faster. Get the skills to achieve goals and stay competitive.'
  // },
  // {
  //   id: 2,
  //   img: '/udemi2.jpg',
  //   title: 'Learning that gets you',
  //   desc: 'Skills for your present (and your future). Get started with us.'
  // }
  // ]

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  //   }, 6000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div >
      <div className=' relative lg:container  mx-auto '>
        <div className='  md:h-[400px] md:w-[100%] h-60  w-[100%]  '>
          <Image
            src='/udemi2.jpg'
            alt='img'
            fill
            className=" md:object-cover object-cover"
          />
        </div>
        <div className=' absolute bg-white w-[400px] text-black h-[200px] top-[70px] left-5 hidden md:block '>
          <div className=' mx-8'>
            <h1 className=' font-bold flex text-2xl py-3 leading-7'>Learning that gets you</h1>
            <p>Skills for your present and your future. Get started with us.</p>
          </div>
        </div>

      </div>
      <div className='md:hidden px-[20px] lg:container lg:px-20 mx-auto  '>
        <Mobile />
      </div>

    </div>

  )
}

export default Slider
