import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CV from './pages/CV.jsx'
import Motivation from './pages/Motivation.jsx'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/motivation" element={<Motivation />} />
      </Routes>
    </div>
  )
}

export default App
