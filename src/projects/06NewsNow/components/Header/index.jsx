import React from 'react'
import Navbar from './Navbar'

function Header() {

    const getDate = () => {
        const date = new Date();
        const formattedDate = date.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        return formattedDate;
    }
  return (
    <header className='flex flex-col bg-red-500 w-[1380px] shadow-black shadow-lg'>
        <div className='flex flex-row place-content-around place-items-center'>
            <div>
                <span>
                    {getDate()}
                </span>
            </div>
            <div>
                <h1 className='text-4xl font-bold font-serif'>News Now</h1>
                <p className='italic text-sm'>Get real news, without any delay.</p>
            </div>
            <div>
                <a href="https://github.com/DoonMad">About NewsNow</a>
            </div>
        </div>

        <Navbar />
    </header>
  )
}

export default Header