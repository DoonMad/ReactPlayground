import { Link } from 'react-router-dom'
import ProjectCard from './components/ProjectCard'
import { motion } from 'framer-motion'
import { FiGithub, FiCode, FiTrendingUp } from 'react-icons/fi'
import './App.css'

const projectList = import.meta.glob('./projects/*/index.jsx', { eager: true })

function App() {
  const projects = Object.keys(projectList).map((path) => {
    const folder = path.split('/')[2]
    return {
      folder,
      route: `/${folder}`
    }
  })

  // Sort projects by their leading numbers
  projects.sort((a, b) => {
    const numA = parseInt(a.folder.match(/^\d+/)?.[0] || 0)
    const numB = parseInt(b.folder.match(/^\d+/)?.[0] || 0)
    return numA - numB
  })

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen px-4 py-8 bg-gradient-to-br from-gray-300 via-blue-300 to-purple-300 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 text-zinc-900 dark:text-white relative overflow-hidden">

  <div className="max-w-6xl mx-auto relative z-10">
        <motion.header 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-600 dark:text-blue-400">React</span> Playground
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto mb-6">
            A collection of mini-projects documenting my React learning journey.
          </p>
        </motion.header>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {projects.map((project) => (
            <motion.div key={project.folder} variants={item}>
              <ProjectCard
                folder={project.folder}
                route={project.route}
              />
            </motion.div>
          ))}
        </motion.div>

        <footer className="mt-16 text-center text-zinc-500 dark:text-zinc-400 text-sm">
          <div className="flex justify-center gap-4 mb-2">
            <a href="https://github.com/DoonMad/ReactPlayground" 
               className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
               target="_blank"
               rel="noopener noreferrer">
              <FiGithub className="inline mr-1" /> View on GitHub
            </a>
          </div>
          <p>Built with React, Vite, and Tailwind CSS</p>
          <p className="mt-1">© {new Date().getFullYear()} React Playground</p>
        </footer>
      </div>
    </div>
  )
}

export default App