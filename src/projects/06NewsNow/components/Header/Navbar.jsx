import React, { useState } from 'react';
import { NavLink, Router, useNavigate } from 'react-router-dom'
import { LANGUAGES, COUNTRIES } from '../../constants';

function Navbar({onFilterChange}) {
    const [lang, setLang] = useState("en");
    const [country, setCountry] = useState("in");
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    
    function handleLangChange(e){
        setLang(e.target.value);
        onFilterChange(e.target.value, country);
    }
    function handleCountryChange(e){
        setCountry(e.target.value);
        onFilterChange(lang, e.target.value);
    }
    function handleSearch(){
        if (searchTerm.trim() !== '') {
            navigate(`/06NewsNow/search?q=${encodeURIComponent(searchTerm.trim())}`);
            setSearchTerm("");
        }
        else alert("Empty searches now allowed");
    }

  return (
    <nav className='flex flex-col place-items-center'>
        <ul
            className='flex flex-row gap-3 py-4 place-content-center w-[80%] font-semibold text-lg'
        >
            <NavLink 
                to={{ pathname: '/06NewsNow/' }}
                className='mx-1/2 p-1 px-2 hover:text-blue-400'
            >General</NavLink>
            <NavLink 
                to={{ pathname: '/06NewsNow/world' }}
                className='mx-1/2 p-1 px-2 hover:text-blue-400'
            >World</NavLink>
            <NavLink 
                to={{ pathname: '/06NewsNow/nation' }}
                className='mx-1/2 p-1 px-2 hover:text-blue-400'
            >Nation</NavLink>
            <NavLink 
                to={{ pathname: '/06NewsNow/business' }}
                className='mx-1/2 p-1 px-2 hover:text-blue-400'
            >Business</NavLink>
            <NavLink 
                to={{ pathname: '/06NewsNow/technology' }}
                className='mx-1/2 p-1 px-2 hover:text-blue-400'
            >Technology</NavLink>
            <NavLink 
                to={{ pathname: '/06NewsNow/entertainment' }}
                className='mx-1/2 p-1 px-2 hover:text-blue-400'
            >Entertainment</NavLink>
            <NavLink 
                to={{ pathname: '/06NewsNow/sports' }}
                className='mx-1/2 p-1 px-2 hover:text-blue-400'
            >Sports</NavLink>
            <NavLink 
                to={{ pathname: '/06NewsNow/science' }}
                className='mx-1/2 p-1 px-2 hover:text-blue-400'
            >Science</NavLink>
            <NavLink 
                to={{ pathname: '/06NewsNow/health' }}
                className='mx-1/2 p-1 px-2 hover:text-blue-400'
            >Health</NavLink>
            <select 
                name="country" 
                id="country" 
                className='bg-[rgba(255,0,0,0.5)] max-w-26' 
                onChange={handleCountryChange}
                value={country}
            >
                {COUNTRIES.map((country) => {
                    return (
                        <option key={country.value} value={country.value}>{country.name}</option>
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
                        <option key={lang.value} value={lang.value}>{lang.name}</option>
                    )
                })}
            </select>
        <div className='flex justify-center items-center gap-3'>
            <input 
                type="text" 
                name="search" 
                id="search" 
                className='bg-white text-black w-45'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button 
                type="submit" 
                className='bg-black cursor-pointer px-1 rounded hover:bg-gray-800 active:bg-gray-600'
                onClick={handleSearch}
            >Search</button>
        </div>
        </ul>
    </nav>
  )
}

export default Navbar