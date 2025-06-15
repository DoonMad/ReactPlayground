import { useState } from 'react'
import Comp from './Comp'

function App() {
  const [count, setCount] = useState(0)
  const [msg, setMsg] = useState('')

  const add = () => {
    setCount(count + 1)
    if (msg !== '') setMsg('')
  }

  const sub = () => {
    if (count > 0) setCount(count - 1)
    else setMsg('Counter cannot go below 0 :")')
  }

  return (
    <div className="min-h-screen bg-black text-white/90 font-sans flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-6">Hello World</h1>
      <p className="text-xl">Counter: {count}</p>
      {msg && <p className="text-red-400">{msg}</p>}
      <div className="mt-4 space-x-4">
        <button
          onClick={add}
          className="bg-neutral-800 px-4 py-2 rounded-lg border border-transparent hover:border-blue-500 transition-colors"
        >
          Add
        </button>
        <button
          onClick={sub}
          className="bg-neutral-800 px-4 py-2 rounded-lg border border-transparent hover:border-blue-500 transition-colors"
        >
          Subtract
        </button>
      </div>
      <Comp />
    </div>
  )
}

export default App
