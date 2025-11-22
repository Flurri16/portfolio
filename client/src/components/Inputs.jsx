import React, { useState } from 'react'
import axios from 'axios'
export default function Inputs() {
    const [name, setname] = useState('')
    const [phone, setphone] = useState('')
    const [email, setemail] = useState('')
    const [message, setmessage] = useState('')
    const sendHandler = async () => {
        if (!name || !phone || !email || !message) {
            alert("Please fill in all fields!");
            return;
        }
        try {
            await axios.post('https://portfolio-server-9plw.onrender.com/api/telegram/info_user', {
                name,
                phone,
                email,
                message
            })
            setemail('')
            setmessage('')
            setname('')
            setphone('')
        } catch (err) {
            console.log(err.message)
        }
    }
    return (
        <div className='flex flex-col md:flex-row bg-[#000000] mt-[150px] w-full px-4 pb-10' id='contact'>
            <div className='w-full md:w-1/2 flex justify-center'>
                <img src='/bg.png' alt='' className='w-full max-w-[400px]' />
            </div>


            <form className='flex flex-col w-full md:w-1/2 mt-10 md:mt-[100px] gap-6' onChange={e => e.preventDefault()}>
                <h1 className='text-2xl sm:text-3xl text-white font-bold'>Leave a message and I'll contact you</h1>


                <input className='bg-transparent text-white outline-0 p-2 border-b border-slate-500' placeholder='Name' onChange={(e) => setname(e.target.value)} required />
                <input className='bg-transparent text-white outline-0 p-2 border-b border-slate-500' placeholder='Phone' onChange={(e) => setphone(e.target.value)} required />
                <input className='bg-transparent text-white outline-0 p-2 border-b border-slate-500' placeholder='Email' onChange={(e) => setemail(e.target.value)} required />
                <textarea className='bg-transparent text-white outline-0 p-2 border-b border-slate-500 h-[120px]' placeholder='Message' onChange={(e) => setmessage(e.target.value)} required />


                <button className='text-white bg-primary py-2 rounded hover:opacity-50' onClick={sendHandler}>Send</button>
            </form>
        </div>
    )
}
