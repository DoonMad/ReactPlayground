import { useState } from "react";
// import GNEWS_API_KEY from './.env'
export const useNews = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const GNEWS_API_KEY = import.meta.env.VITE_GNEWS_API_KEY;
    // console.log(GNEWS_API_KEY);

    const fetchNews = async (category) => {
        setLoading(true);
        try {
            const response = await fetch(`https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&apikey=${GNEWS_API_KEY}`);
            const data = await response.json();
            setNews(data.articles);
        }
        catch{
            setError('Error fetching news')
        }
        finally{
            setLoading(false);
        }
    }

    return { news, loading, error, fetchNews };
}