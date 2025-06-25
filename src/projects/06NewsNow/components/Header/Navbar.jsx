import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LANGUAGES, COUNTRIES } from '../../constants';

function Navbar({ onFilterChange }) {
    const [lang, setLang] = useState("en");
    const [country, setCountry] = useState("in");
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleLangChange = (e) => {
        setLang(e.target.value);
        onFilterChange(e.target.value, country);
    }

    const handleCountryChange = (e) => {
        setCountry(e.target.value);
        onFilterChange(lang, e.target.value);
    }

    const handleSearch = () => {
        if (searchTerm.trim() !== '') {
            navigate(`/06NewsNow/search?q=${encodeURIComponent(searchTerm.trim())}`);
            setSearchTerm("");
        } else {
            alert("Empty searches not allowed");
        }
    }

    const categories = [
        'general', 'world', 'nation', 'business', 'technology',
        'entertainment', 'sports', 'science', 'health'
    ];

    return (
        <nav className="mt-4 w-full">
            <div className="flex flex-wrap justify-center gap-4 px-2">
                {categories.map((cat) => (
                    <NavLink
                        key={cat}
                        to={`/06NewsNow/${cat}`}
                        className={({ isActive }) =>
                            `text-sm sm:text-base px-3 py-1 rounded ${
                                isActive
                                    ? 'text-red-700 dark:text-red-500 font-bold'
                                    : 'text-neutral-800 dark:text-white hover:text-red-500'
                            }`
                        }
                    >
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </NavLink>
                ))}

                <select
                    onChange={handleCountryChange}
                    value={country}
                    className="text-sm px-2 py-1 rounded bg-neutral-200 dark:bg-neutral-700 text-black dark:text-white"
                >
                    {COUNTRIES.map((country) => (
                        <option key={country.value} value={country.value}>
                            {country.name}
                        </option>
                    ))}
                </select>

                <select
                    onChange={handleLangChange}
                    value={lang}
                    className="text-sm px-2 py-1 rounded bg-neutral-200 dark:bg-neutral-700 text-black dark:text-white"
                >
                    {LANGUAGES.map((lang) => (
                        <option key={lang.value} value={lang.value}>
                            {lang.name}
                        </option>
                    ))}
                </select>

                <div className="flex gap-1 items-center">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search..."
                        className="px-2 py-1 rounded border border-neutral-300 dark:border-neutral-600 text-black dark:text-white bg-white dark:bg-neutral-800"
                    />
                    <button
                        onClick={handleSearch}
                        className="px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700"
                    >
                        Search
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
