import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import Navbar from './components/Header/Navbar'
import Header from './components/Header'
import { useNews } from './api'
import ArticleCard from './components/Article/ArticleCard'

function App() {
    const [count, setCount] = useState(0)
    const [articles, setArticles] = useState(null);
    const { news, loading, error, fetchNews } = useNews();

    const getNews = async() => {
        await fetchNews();
        setArticles(news);
        console.log(articles);
    }
  return (
    <div className='flex flex-col min-h-screen min-w-screen bg-gradient-to-br from-blue-400 to-green-300 dark:from-green-900 dark:to-blue-900 place-items-center dark:text-white'>
        <div className='max-w-[1380px] place-items-center'>
            <Header />
            <button 
                onClick={() => {
                    console.log('hey' + count);
                    setCount(count + 1);
                    getNews();
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 cursor-pointer rounded"
            >Press This</button>
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