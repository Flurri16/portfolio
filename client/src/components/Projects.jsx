import React from 'react'
import Project from './Project'

export default function Projects() {
    return (
        <div className='mt-32 scroll-mt-32 px-4' id='projects'>
            <p className='text-lg font-monserrat text-white'>Some of</p>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 hover:opacity-50'>My projects:</h1>


            <div className='flex justify-center gap-6 sm:gap-10 flex-wrap'>
                <Project />
                <Project />
                <Project />
                <Project />
            </div>
        </div>
    )
}
