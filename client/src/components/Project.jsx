import React, { useState } from 'react'

export default function Project() {
  const [hover, setHover] = useState(false)
  const [click, setClick] = useState(false)
  return (
    <a
      href='#!'
      className='w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[350px] rounded-md p-2 bg-[#141414] font-monserrat text-sm relative block'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className='flex flex-col'>
        <img src='/project.png' className='w-full h-auto rounded' />
        <h1 className='text-xl sm:text-2xl text-white font-bold mt-2'>Project</h1>
      </div>


      {hover && (
        <div className='absolute left-0 bottom-32 w-full p-2 bg-primary text-white z-50 transition-all rounded'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum culpa beatae perspiciatis.
        </div>
      )}
    </a>
  )
}
