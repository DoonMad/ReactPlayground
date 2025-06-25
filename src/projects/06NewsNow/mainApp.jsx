// mainApp.jsx
import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import Header from './components/Header'
import { useNews } from './api'
import ArticleCard from './components/Article/ArticleCard'

function App() {
    const { category = 'general' } = useParams();
    const [country, setCountry] = useState("in");
    const [lang, setLang] = useState("en");
    const query = new URLSearchParams(useLocation().search);
    const searchTerm = query.get('q');

    const { news, loading, error, fetchNews, searchNews } = useNews();

    const handleFilterChange = (newLang, newCountry) => {
        setCountry(newCountry);
        setLang(newLang);
    }

    useEffect(() => {
        if(searchTerm){
            searchNews(searchTerm, lang, country);
        } else {
            fetchNews(category, lang, country);
        }
    }, [searchTerm, category, lang, country, fetchNews, searchNews])

    return (
        <div className="flex flex-col min-h-screen min-w-screen bg-white text-black dark:bg-neutral-900 dark:text-white">
            <div className='max-w-[1380px] mx-auto'>
                <Header onFilterChange={handleFilterChange}/>

                {loading && <h1 className='text-4xl text-red-600 text-center mt-10'>Loading... </h1>}
                {error && <h1 className='text-4xl text-red-600 text-center mt-10'>We got an error. Try again... </h1>}

                <main className='flex flex-wrap justify-center gap-6 p-6'>
                    {news && news.map((article) => (
                        <ArticleCard article={article} key={article.url} />
                    ))}
                </main>
            </div>
        </div>
    )
}

export default App
