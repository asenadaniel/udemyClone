'use client'
import { Close } from '@mui/icons-material'
import React, { useState } from 'react'

function Notification() {

  const [open, setOpen] = useState(true)

  return (
    open && (<div className='hidden  h-7 bg-blue-900 py-6 lg:flex justify-center items-center text-white relative'>
      <div className=' flex'>
        <p className=' '> <span className=' font-bold'>Ready to get with the times? </span>| Get the skills with Udemy Business.</p>
        <div className=' absolute  right-5 cursor-pointer' >

          <Close onClick={() => setOpen(false)} />
        </div>
      </div>
    </div>)
  )
}

export default Notification
