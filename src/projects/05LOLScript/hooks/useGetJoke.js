import { useEffect, useState, useCallback } from 'react';

const useGetJoke = (category) => {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchJoke = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://v2.jokeapi.dev/joke/${category}`);
      const data = await res.json();
      if (data.type === 'single') {
        setJoke(data.joke);
      } else {
        setJoke(`${data.setup} ... ${data.delivery}`);
      }
    } catch (err) {
      setJoke('Oops! Something went wrong.'+err);
    }
    setLoading(false);
  }, [category]);

  useEffect(() => {
    fetchJoke();
  }, [category, fetchJoke]); // re-fetch when category changes

  return { joke, loading, refetch: fetchJoke };
};

export default useGetJoke;
