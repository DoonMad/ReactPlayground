import { useCallback, useState } from "react";
// import GNEWS_API_KEY from './.env'
export const useNews = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const GNEWS_API_KEY = import.meta.env.VITE_GNEWS_API_KEY;

    const fetchNews = useCallback(
        async (category, lang="en", country="in") => {
            setLoading(true);
            try {
                const response = await fetch(`https://gnews.io/api/v4/top-headlines?category=${category}&apikey=${GNEWS_API_KEY}&lang=${lang}&country=${country}`
                );
    
                if(response.status !== 200) {
                    throw new Error('Failed to fetch news');
                }
                const data = await response.json();
                console.log("from fetchnews: ", data.articles)
                setNews(data.articles);
            }
            catch (error) {
                setError(error);
            }
            finally{
                setLoading(false);
            }
        }, [GNEWS_API_KEY]);

    const searchNews = useCallback(
        async (searchTerm, lang="en", country="in") => {
            setLoading(true);
            try {
                const response = await fetch(`https://gnews.io/api/v4//search?q=${searchTerm}&apikey=${GNEWS_API_KEY}&lang=${lang}&country=${country}`
                );
    
                if(response.status !== 200) {
                    throw new Error('Failed to fetch news');
                }
                const data = await response.json();
                console.log("from searchNews: ", data.articles)
                setNews(data.articles);
            }
            catch (error) {
                setError(error);
            }
            finally{
                setLoading(false);
            }
        }, [GNEWS_API_KEY]);

    return { news, loading, error, fetchNews, searchNews };
}