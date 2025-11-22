import React from 'react'

export default function Review() {
    return (
        <div className='w-full rounded-md p-4 bg-[#141414] hover:opacity-50 cursor-pointer'>
            <div className='flex gap-3 items-center'>
                <img src='user.png' className='w-[30px]' />
                <h1 className='text-lg sm:text-xl text-white font-bold'>Name Dull</h1>
            </div>


            <p className='text-sm sm:text-base text-white mt-3 leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugiat neque eveniet.
            </p>


            <div className='text-slate-300 font-monserrat flex justify-end pt-3 text-xs sm:text-sm'>11.22.3333</div>
        </div>
    )
}
