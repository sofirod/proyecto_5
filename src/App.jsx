import React from 'react'
 import './App.css'
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary'
import GatosAzar from './components/GatosAzar.jsx';
 import InicioCard from './components/InicioCard.jsx';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
    <ErrorBoundary>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<InicioCard/>} />
          <Route path="/gatosazar" element={<GatosAzar />} />
        </Routes>
        
      </div>
    </ErrorBoundary>
  </Router>
  )
}

export default App
