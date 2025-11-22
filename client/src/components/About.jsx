import React from 'react'
export default function About() {
  return (
<div className='mt-[120px] scroll-mt-[200px] px-4' id='about'>
<h1 className='w-full max-w-[688px] text-center mx-auto text-3xl sm:text-4xl md:text-5xl font-bold font-monserrat text-white mb-11 relative leading-relaxed'>
Write to me and I will answer within the next 24 hours
<p className='text-base sm:text-lg text-white font-normal mt-2'>Discuss the project</p>
</h1>


<p className='text-lg font-monserrat text-white pt-20 sm:pt-40'>Little</p>


<h1 className='text-3xl sm:text-4xl md:text-5xl font-bold font-monserrat text-white mb-10 hover:opacity-50'>About me:</h1>


<p className='text-base sm:text-lg font-monserrat text-white leading-[28px] sm:leading-[32px] w-full max-w-[600px] text-center mx-auto'>
Hello! My name is John Doe and I enjoy creating things that live on the internet. My interest in web development started back in 2010 when I tried editing custom Tumblr themes — turns out hacking a custom reblog button taught me a lot about HTML & CSS!
</p>


<ul className='flex flex-wrap justify-center gap-6 sm:gap-10 pt-10'>
{['Telegram','Facebook','Instagram','Gmail'].map((t,i)=>(
<li key={i}><a className='flex items-center text-lg text-white hover:opacity-50 font-monserrat' href='/e'>{t} <img src={'/'+t.toLowerCase()+'.png'} className='w-10 pl-3'/></a></li>
))}
</ul>
</div>
  )
}
