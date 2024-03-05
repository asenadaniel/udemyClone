import { Search } from '@mui/icons-material'
import Image from 'next/image'
import React from 'react'

function Mobile() {

  const data = [
    {
      id: 1,
      img: '/A.svg'
    },
    {
      id: 2,
      img: '/2.svg'
    },
    {
      id: 3,
      img: '/3.svg'
    },
    {
      id: 4,
      img: '/4.svg'
    },
    {
      id: 5,
      img: '/5.svg'
    },
    {
      id: 6,
      img: '/6.svg'
    },
    {
      id: 7,
      img: '/7.svg'
    },
    {
      id: 8,
      img: '/8.svg'
    },
  ]

  return (
    <div className='flex flex-col  gap-16'>
      <div className='  '>
        <h1 className=' font-semibold text-xl  pb-2 pt-3'>Learning that gets you</h1>
        <p className=' text-sm'>Begin cultivating skills for today and tomorrow with our guidance and support. Take the first step towards your future success with us.</p>
      </div>

      <div className='border border-black flex py-2 px-3 '>
        <input type="text" placeholder='What do you want to learn' className=' w-full text-red-400 focus:outline-none bg-transparent' />
        <Search />
      </div>

      <div className=' flex flex-col justify-center items-center'>
        <p className=' text-center text-gray-500 mb-6'>Trusted by over 15,000 companies and millions of learners around the world</p>

        <div className=' grid grid-cols-4 gap-4'>
          {data.map(item => {
            return (
              <div className=' relative w-[50px] h-[50px] '>
                <Image key={item.id} src={item.img} alt='images' fill />
              </div>
            )
          })}
        </div>

      </div>

    </div>
  )
}

export default Mobile
