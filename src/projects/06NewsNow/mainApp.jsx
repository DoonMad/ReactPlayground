import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import Navbar from './components/Header/Navbar'
import Header from './components/Header'
import { useNews } from './api'
import ArticleCard from './components/Article/ArticleCard'
import { FaTruckLoading } from 'react-icons/fa'

function App() {
    const category = useParams().category || "general";
    const [articles, setArticles] = useState(null);
    const { news, loading, error, fetchNews } = useNews();
    const [country, setCountry] = useState("in");
    const [lang, setLang] = useState("en");

    const handleFilterChange = (newCountry, newLang) => {
        setCountry(newCountry);
        setLang(newLang);
    }

    useEffect(() => {
        const getNews = async() => {
            try {
                await fetchNews(category, lang, country);
                setArticles(news);
            }
            catch{
                alert("Error fetching news");
            }
            console.log(articles);
        }
        getNews();
    }, [category, lang, country])

    // const getNews = async() => {
    //     try {
    //         await fetchNews(category);
    //     }
    //     catch{
    //         setArticles(news);
    //         alert("Error fetching news");
    //     }
    //     console.log(articles);
    // }
  return (
    <div className='flex flex-col min-h-screen min-w-screen bg-gradient-to-br from-blue-400 to-green-300 dark:from-green-900 dark:to-blue-900 place-items-center dark:text-white'>
        <div className='max-w-[1380px] place-items-center'>
            <Header onFilterChange={handleFilterChange}/>
            {/* <button 
                onClick={() => {
                    console.log('hey' + count);
                    setCount(count + 1);
                    getNews();
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 cursor-pointer rounded"
            >Press This</button> */}
            {loading && <h1 className='text-4xl text-amber-400'>Loading... </h1>}
            {error && <h1 className='text-4xl text-amber-400'>We got an error. Try again... </h1>}
            <main className='flex flex-row flex-wrap place-content-around'>
                {articles && articles.map((article) => {
                    return <ArticleCard article={article} key={article.url}/>
                })}
            </main>
        </div>
    </div>
  )
}

export default App