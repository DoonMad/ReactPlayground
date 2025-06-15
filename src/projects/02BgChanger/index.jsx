import { useState } from 'react'

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
    <div className="w-full h-screen" style={{backgroundColor: color}}>
      <div className='flex flex-row inset-x-0 w-fit m-auto font-bold rounded-4xl items-center justify-center fixed bottom-20 bg-white'>
        <button onClick={() => setColor("Red")} className='bg-red-600 p-2 rounded min-w-20 m-4 cursor-pointer text-white shadow-black shadow'>Red</button>
        <button onClick={() => setColor("Green")} className='bg-green-600 p-2 rounded min-w-20 m-4 cursor-pointer text-white shadow-black shadow'>Green</button>
        <button onClick={() => setColor("Blue")} className='bg-blue-600 p-2 rounded min-w-20 m-4 cursor-pointer text-white shadow-black shadow'>Blue</button>
        <button onClick={() => setColor("Yellow")} className='bg-yellow-600 p-2 rounded min-w-20 m-4 cursor-pointer text-white shadow-black shadow'>Yellow</button>
        <button onClick={() => setColor("Black")} className='bg-black p-2 rounded min-w-20 m-4 cursor-pointer text-white shadow-black shadow'>Black</button>
        <button onClick={() => setColor("White")} className='bg-white p-2 rounded min-w-20 m-4 cursor-pointer text-black shadow-black shadow'>White</button>
        <button onClick={() => setColor("Orange")} className='bg-orange-600 p-2 rounded min-w-20 m-4 cursor-pointer text-white shadow-black shadow'>Orange</button>
        <button onClick={() => setColor("Purple")} className='bg-purple-600 p-2 rounded min-w-20 m-4 cursor-pointer text-white shadow-black shadow'>Purple</button>
      </div>
    </div>
    </>
  )
}

export default App
