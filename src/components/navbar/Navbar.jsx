import { MenuOutlined, SearchOutlined, ShoppingCart, ShoppingCartOutlined } from '@mui/icons-material'
import Image from 'next/image'
import React from 'react'
import Mobile from './Mobile'

function Navbar() {
  return (
    <div className=' '>
      <div className='  sticky w-full lg:h-[60px] md:px-10   xl:border-b-[0px] xl:border-black xl:shadow-md xl:z-10 flex justify-between items-center  '>
        <div className=' lg:flex items-center gap-4 hidden'>
          <Image src='./logo-udemy.svg' alt='udemy' width={90} height={90} />
        </div>
        <p className='hidden lg:block '>category</p>
        <div className=' border border-black rounded-3xl p-2  lg:w-[400px]  xl:w-[700px] 2xl:w-[830px] hidden lg:block '>
          <SearchOutlined />
          <input type="text" />
        </div>

        <div className=' lg:flex items-center gap-4 hidden '>
          <p className=' text-sm lg:hidden 2xl:block'>Teach on Udemy</p>
          <p className='text-sm'>Udemy business</p>
        </div>
        <ShoppingCartOutlined className=' hidden lg:block' />

        <div className=' lg:flex gap-3 hidden'>
          <button className='border  border-black px-5'>Log in</button>
          <button className=' bg-black text-white px-5 py-2'>Sign in</button>
        </div>

      </div>
      <div className=' lg:hidden'>
        <Mobile />
      </div>
    </div>
  )
}

export default Navbar
