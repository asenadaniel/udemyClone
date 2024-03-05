import { MenuOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import Image from 'next/image'
import React from 'react'

function Mobile() {
  return (
    <div className='  w-full border-b-[0px] border-black  shadow-md sticky z-10'>
      <div className=' flex justify-between items-center px-4 py-4 bg-white '>
        <div><MenuOutlined /></div>
        <div> <Image src='./logo-udemy.svg' alt='udemy'
          width={80}
          height={80}
        />
        </div>
        <div className='w-fit flex gap-3'>
          <SearchOutlined />
          <ShoppingCartOutlined />
        </div>
      </div>
    </div>
  )
}

export default Mobile
