import React, { useEffect, useState } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import Header from './components/Header'
import { useNews } from './api'
import ArticleCard from './components/Article/ArticleCard'

function App() {
    const category = useParams().category || "general";
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
        }
        else{
            fetchNews(category, lang, country);
        }
    }, [searchTerm, category, lang, country, fetchNews, searchNews])


  return (
    <div className='flex flex-col min-h-screen min-w-screen bg-gradient-to-br from-blue-400 to-green-300 dark:from-green-900 dark:to-blue-900 place-items-center dark:text-white'>
        <div className='max-w-[1380px] place-items-center'>

            <Header onFilterChange={handleFilterChange}/>

            {loading && <h1 className='text-4xl text-amber-400'>Loading... </h1>}
            {error && <h1 className='text-4xl text-amber-400'>We got an error. Try again... </h1>}

            <main className='flex flex-row flex-wrap place-content-around'>
                {news && news.map((article) => {
                    return <ArticleCard article={article} key={article.url}/>
                })}
            </main>
            
        </div>
    </div>
  )
}

export default App