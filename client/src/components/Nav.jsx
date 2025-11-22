import React from 'react'

export default function Nav() {
  const [isAuth, setIsAuth] = React.useState(false);
  return (
    <div className='flex flex-wrap justify-between items-center fixed top-0 left-0 w-full bg-[#2c2c2c] px-4 sm:px-10 md:px-20 lg:px-40 py-4 z-10 gap-4'>
      <div>
        <a href='#main' className='text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-none'>
          Portfoli
          <span className={isAuth ? 'text-green-500' : 'text-red-500'}>o</span>
        </a>
        <p className='text-sm sm:text-md text-white'>Web developer</p>
      </div>
      <ul className='flex gap-4 sm:gap-6 md:gap-10 lg:gap-16 text-sm sm:text-base'>
        <a href='#about' className='font-monserrat text-white hover:opacity-50'>About</a>
        <a href='#projects' className='font-monserrat text-white hover:opacity-50'>Projects</a>
        <a href='#reviews' className='font-monserrat text-white hover:opacity-50'>Reviews</a>
        <a href='#contact' className='font-monserrat text-white hover:opacity-50'>Contact</a>
      </ul>
    </div>
  )
}
