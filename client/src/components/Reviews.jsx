import React from 'react'
import Review from './Review'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default function Reviews() {
    const [open, setOpen] = React.useState(false);
    const [name, setname] = React.useState('')
    const [message, setmessage] = React.useState('')
    const setCommentHandler = async () => {
        if (!name || !message) {
            alert("Please fill in all fields!");
            return
        }
        try {
            await axios.post('https://portfolio-server-9plw.onrender.com/api/telegram/comment_user', {
                name, message
            })
            setOpen(false)
        } catch (err) {
            console.log(err.message)
        }
    }
    return (
        <div className='mt-[150px] scroll-mt-32 px-4' id='reviews'>
            <p className='text-lg text-white'>Reviews</p>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 hover:opacity-50'>Clients who chose me:</h1>


            <div className='flex flex-col gap-5'>
                <Review />
                <Review />
                <Review />
            </div>


            <div className='flex gap-5 mt-10 flex-wrap'>
                <button className='text-white px-4 py-2 border border-primary hover:bg-primary'>Show more ..</button>
                <button className='text-white px-4 py-2 bg-primary hover:bg-transparent border border-primary' onClick={() => setOpen(true)}>Leave a comment</button>
            </div>


            {open && (
                <div className='fixed z-50 w-full h-full bg-black/50 top-0 left-0 flex items-center justify-center' onClick={() => setOpen(false)}>
                    <form className='bg-slate-800 p-7 flex flex-col gap-5 w-full max-w-[400px] rounded-lg' onClick={(e) => e.stopPropagation()}>
                        <h1 className='text-2xl font-medium text-white'>Leave a comment</h1>
                        <input className='text-black p-2 rounded' placeholder='Name' onChange={e => setname(e.target.value)} required />
                        <textarea className='text-black p-2 h-[100px] rounded' placeholder='Message' onChange={e => setmessage(e.target.value)} required />
                        <button className='bg-primary px-4 py-2 text-white border border-primary hover:bg-transparent rounded' onClick={setCommentHandler}>Leave</button>
                    </form>
                </div>
            )}
        </div>
    )
}
