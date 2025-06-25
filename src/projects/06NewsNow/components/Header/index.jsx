import React from 'react'
import Navbar from './Navbar'

function Header({ onFilterChange }) {
    const getDate = () => {
        const date = new Date();
        return date.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }

    return (
        <header className="bg-white dark:bg-neutral-900 shadow-md py-4 px-6 mb-4 border-b border-neutral-300 dark:border-neutral-700">
            <div className="flex flex-col sm:flex-row justify-between items-center text-center gap-2">
                <span className="text-neutral-600 dark:text-neutral-300 text-sm">{getDate()}</span>
                <div>
                    <h1 className="text-4xl font-bold font-serif text-neutral-900 dark:text-white">News Now</h1>
                    <p className="italic text-sm text-neutral-500 dark:text-neutral-400">Get real news, without delay.</p>
                </div>
                <div>
                    <a href="https://github.com/DoonMad" className="text-red-600 hover:underline text-sm">About NewsNow</a>
                </div>
            </div>
            <Navbar onFilterChange={onFilterChange} />
        </header>
    )
}

export default Header
