import React from 'react'

function ArticleCard({article}) {
  return (
    <article className='p-3 w-[650px] bg-pink-900 rounded m-3'>
        <div className='flex flex-col p-2 shadow-md shadow-black gap-1'>
            <h2>{article.title}</h2>
            <div className='flex flex-row place-content-between text-sm italic'>
                <span>by {article.source["name"]}, {article.source["url"]}</span>
                <span>{article.publishedAt}</span>
            </div>
        </div>
        <div>
            <img src={article.image} alt="Image for this article" />
            <p>{article.description}</p>
        </div>
    </article>
  )
}

export default ArticleCard;