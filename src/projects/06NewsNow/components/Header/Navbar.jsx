import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { LANGUAGES, COUNTRIES } from '../../constants';

function Navbar({onFilterChange}) {
    const [lang, setLang] = useState("en");
    const [country, setCountry] = useState("in");
    
    function handleLangChange(e){
        setLang(e.target.value);
        onFilterChange(e.target.value, country);
    }
    function handleCountryChange(e){
        setCountry(e.target.value);
        onFilterChange(lang, e.target.value);
    }

  return (
    <nav className='flex flex-col place-items-center'>
        <ul
            className='flex flex-row gap-3 py-4 place-content-center w-[80%] font-semibold text-lg'
        >
            <Link 
                to={{ pathname: '/06NewsNow/' }}
                className='mx-1/2 p-1 px-2 hover:text-blue-400'
            >General</Link>
            <Link 
                to={{ pathname: '/06NewsNow/world' }}
                className='mx-1/2 p-1 px-2 hover:text-blue-400'
            >World</Link>
            <Link 
                to={{ pathname: '/06NewsNow/nation' }}
                className='mx-1/2 p-1 px-2 hover:text-blue-400'
            >Nation</Link>
            <Link 
                to={{ pathname: '/06NewsNow/business' }}
                className='mx-1/2 p-1 px-2 hover:text-blue-400'
            >Business</Link>
            <Link 
                to={{ pathname: '/06NewsNow/technology' }}
                className='mx-1/2 p-1 px-2 hover:text-blue-400'
            >Technology</Link>
            <Link 
                to={{ pathname: '/06NewsNow/entertainment' }}
                className='mx-1/2 p-1 px-2 hover:text-blue-400'
            >Entertainment</Link>
            <Link 
                to={{ pathname: '/06NewsNow/sports' }}
                className='mx-1/2 p-1 px-2 hover:text-blue-400'
            >Sports</Link>
            <Link 
                to={{ pathname: '/06NewsNow/science' }}
                className='mx-1/2 p-1 px-2 hover:text-blue-400'
            >Science</Link>
            <Link 
                to={{ pathname: '/06NewsNow/health' }}
                className='mx-1/2 p-1 px-2 hover:text-blue-400'
            >Health</Link>
            <select 
                name="country" 
                id="country" 
                className='bg-[rgba(255,0,0,0.5)] max-w-26' 
                onChange={handleCountryChange}
                value={country}
            >
                {COUNTRIES.map((country) => {
                    return (
                        <option value={country.value}>{country.name}</option>
                    )
                })}
            </select>
            <select 
                name="lang" 
                id="lang" 
                className='bg-[rgba(255,0,0,0.5)] max-w-26' 
                onChange={handleLangChange}
                value={lang}
            >
                {LANGUAGES.map((lang) => {
                    return (
                        <option value={lang.value}>{lang.name}</option>
                    )
                })}
            </select>
        <div className='flex justify-center items-center gap-3'>
            <input type="text" name="search" id="search" className='bg-white text-black w-45'/>
            <button type="submit" className='bg-black cursor-pointer px-1 rounded hover:bg-gray-800 active:bg-gray-600'>Search</button>
        </div>
        </ul>
    </nav>
  )
}

export default Navbar