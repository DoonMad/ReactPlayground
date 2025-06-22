import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './mainApp'

function NewsNowApp() {
  return (
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:category" element={<App />} />
      </Routes>
  )
}

export default NewsNowApp
