import React, {useEffect, useState} from 'react'
import { ThemeProvider } from '../contexts/theme'
import { useNavigate } from 'react-router';

function App() {
    const [theme, setTheme] = useState("light");
    const [title, setTitle] = useState("");
    const navigate = useNavigate();
    // const { theme, toggleTheme } = useTheme()
    const toggleTheme = () => {
        if(theme == "light"){
            setTheme("dark");
        }
        else{
            setTheme("light");
        }
    }

    useEffect(() => {
        document.querySelector('html').classList.remove("light", "dark");
        document.querySelector('html').classList.add(theme);
    }, [theme]);


  return (
    <ThemeProvider value={{theme, toggleTheme}}>
        <div className="flex justify-center flex-col items-center min-h-screen bg-white text-black dark:bg-neutral-900 dark:text-white p-4">
            <div className="mb-6">
                <h1 className="text-3xl font-bold">🛠️ Form Builder</h1>
                <button
                    onClick={toggleTheme}
                    className="bg-gray-200 dark:bg-gray-700 text-sm px-3 py-1 rounded hover:opacity-80 cursor-pointer"
                >
                    {theme === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode'}
                </button>
            </div>

            {/* Form Builder UI will go here */}
            <div
                className='border-2 border-amber-700 rounded-2xl m-3 text-lg overflow-hidden'
            >
                <input 
                    type="text" 
                    name="title" 
                    id="title" 
                    placeholder='Enter a title for your form'
                    className='p-3 bg-neutral-700 min-w-200'
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />
                <button
                    className='bg-amber-700 p-3 cursor-pointer hover:opacity-80 active:bg-amber-800'
                    onClick={() => {
                        if(title.trim() != ""){
                            console.log(title);
                            navigate('create');
                        }
                    }}
                >Let's Go</button>
            </div>
            <p className="text-gray-500 dark:text-gray-400">
                Start adding form fields to build your custom form!
            </p>
        </div>
    </ThemeProvider>
  )
}

export default App