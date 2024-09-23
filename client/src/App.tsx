import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Dashboard } from './pages/dashboard'
import { Auth } from './pages/auth'
import { AboutMe } from './pages/about-me'

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Dashboard />}/>
          <Route path='/auth' element={<Auth />}/>
          <Route path='/about-me' element={<AboutMe />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
