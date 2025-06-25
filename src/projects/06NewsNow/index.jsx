import { Routes, Route, Navigate } from 'react-router-dom';
import App from './mainApp'

function NewsNowApp() {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/06NewsNow/general" replace />} />
        <Route path="/search" element={<App />} />
        <Route path="/:category" element={<App />} />
      </Routes>
  )
}

export default NewsNowApp
