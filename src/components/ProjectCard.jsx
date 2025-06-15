import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'

export default function ProjectCard({ folder, route }) {
  const [iframeState, setIframeState] = useState('loading') // 'loading' | 'loaded' | 'error'
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef(null)
  const [scaleFactor, setScaleFactor] = useState(0.3)
  const iframeRef = useRef(null)
  
  const formatProjectName = (name) => {
    return name
      .replace(/^\d+/, '')
      .replace(/([A-Z])/g, ' $1')
      .trim()
  }

  useEffect(() => {
    const calculateScale = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        const desktopWidth = 1280
        const newScale = containerWidth / desktopWidth
        setScaleFactor(newScale)
      }
    }

    calculateScale()
    window.addEventListener('resize', calculateScale)
    return () => window.removeEventListener('resize', calculateScale)
  }, [])

  useEffect(() => {
    // Small delay to allow the loading skeleton to show before iframe starts loading
    const timer = setTimeout(() => {
      if (iframeRef.current) {
        iframeRef.current.onload = () => setIframeState('loaded')
        iframeRef.current.onerror = () => setIframeState('error')
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const projectName = formatProjectName(folder)
  const iframeHeight = (9 / 16) * 1280 * scaleFactor

  return (
    <motion.div 
      className="block bg-white dark:bg-zinc-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
      ref={containerRef}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link to={route} className="block h-full relative group">
        {/* Preview container */}
        <div 
          className="relative w-full overflow-hidden bg-gray-100 dark:bg-zinc-700"
          style={{ height: `${iframeHeight}px` }}
        >
          {/* Loading skeleton */}
          {iframeState === 'loading' && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-zinc-600 dark:to-zinc-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-pulse flex space-x-2">
                  <div className="h-2 w-2 bg-gray-400 dark:bg-zinc-500 rounded-full"></div>
                  <div className="h-2 w-2 bg-gray-400 dark:bg-zinc-500 rounded-full"></div>
                  <div className="h-2 w-2 bg-gray-400 dark:bg-zinc-500 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Error state */}
          {iframeState === 'error' && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center p-4 bg-red-50 dark:bg-red-900/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-center text-red-500 dark:text-red-300">
                Preview unavailable
              </p>
            </motion.div>
          )}

          {/* Iframe - always present but hidden until loaded */}
          <motion.div
            className="absolute origin-top-left"
            style={{
              transform: `scale(${scaleFactor})`,
              width: '1280px',
              height: `${(9 / 16) * 1280}px`,
              transformOrigin: '0 0',
              opacity: iframeState === 'loaded' ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out'
            }}
          >
            <iframe
              ref={iframeRef}
              src={route}
              className="border-0 w-full h-full"
              loading="lazy"
              title={`Preview of ${projectName}`}
              sandbox="allow-scripts allow-same-origin"
            />
          </motion.div>
        </div>
        
        {/* Project info section */}
        <div className="p-4 relative">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-semibold mb-1">{projectName}</h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                Click to explore
              </p>
            </div>
            <motion.div
              animate={{ 
                opacity: isHovered ? 1 : 0,
                x: isHovered ? 0 : 10
              }}
              transition={{ duration: 0.2 }}
              className="text-blue-500"
            >
              <FiExternalLink size={18} />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}