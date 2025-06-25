import React from 'react'

function ArticleCard({ article }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block max-w-[640px] transition-transform hover:scale-[1.01]"
    >
      <article className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded shadow hover:shadow-lg transition-shadow duration-200">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-xl text-neutral-900 dark:text-white">{article.title}</h2>
          <div className="flex justify-between text-xs italic text-neutral-600 dark:text-neutral-400">
            <span>{article.source.name}</span>
            <span>{new Date(article.publishedAt).toLocaleString()}</span>
          </div>
        </div>
        {article.image && (
          <img
            src={article.image}
            alt="Article"
            className="w-full h-auto mt-3 rounded"
            onError={(e) => {e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/7/75/No_image_available.png'}} // fallback image
          />
        )}
        <p className="mt-2 text-sm text-neutral-800 dark:text-neutral-300">{article.description}</p>
      </article>
    </a>
  )
}

export default ArticleCard;
