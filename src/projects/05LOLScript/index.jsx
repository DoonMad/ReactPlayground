import { useState } from 'react';
import useGetJoke from './hooks/useGetJoke';

const categories = ['Any', 'Programming', 'Misc', 'Pun', 'Spooky', 'Dark'];

function App() {
  const [category, setCategory] = useState('Any');
  const { joke, loading, refetch } = useGetJoke(category);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-green-900 to-blue-900 text-white px-4">
      <h1 className="text-4xl font-extrabold text-amber-400 mb-6 tracking-wider">😂 LOLScript</h1>

      <select
        value={category}
        onChange={handleCategoryChange}
        className="mb-4 bg-gray-800 text-white py-2 px-4 rounded-lg shadow focus:outline-none"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <button
        onClick={refetch}
        className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-200"
      >
        {loading ? 'Loading...' : 'Get Joke'}
      </button>

      {!loading && joke && (
        <div className="mt-8 bg-gray-800 shadow-lg rounded-lg p-6 max-w-xl text-center text-lg text-amber-100">
          {joke}
        </div>
      )}
    </div>
  );
}

export default App;
