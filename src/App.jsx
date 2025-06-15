// App.jsx (your homepage with cards)
import { Link } from 'react-router-dom'

const projectList = import.meta.glob('./projects/*/index.jsx', { eager: true })

function App() {
  console.log("hey therer")
  const projectCards = Object.keys(projectList).map((path) => {
    const folder = path.split('/')[2] // e.g. "01ViteReact"
    console.log("hello world")
    console.log(folder)
    return (
      <Link
        key={folder}
        to={`/${folder}`}
        className="block bg-white dark:bg-zinc-800 p-5 rounded-xl shadow mb-4"
      >
        <h2 className="text-xl font-semibold capitalize">{folder}</h2>
        <p>Click to open project</p>
      </Link>
    )
  })

  return (
    <div className="min-h-screen px-6 py-10 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">🚀 React Playground</h1>
        <p className="text-lg text-center mb-10">
          Documenting my React journey through mini-projects.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">{projectCards}</div>
      </div>
    </div>
  )
}

export default App
