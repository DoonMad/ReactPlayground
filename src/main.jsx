// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'

// Auto-import all projects in `projects/*/index.jsx`
const modules = import.meta.glob('./projects/*/index.jsx', { eager: true })

const routes = Object.entries(modules).map(([path, module]) => {
  const name = path.split('/')[2] // Extract folder name (e.g. '01ViteReact')
  return <Route key={name} path={`/${name}`} element={ React.createElement(module.default)} />
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {routes}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
