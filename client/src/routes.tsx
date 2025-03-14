import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Dashboard } from './pages/dashboard'
import { Auth } from './pages/auth'
import { AboutMe } from './pages/about-me'
import { FinancialRecordsProvider } from './contexts/financial-record-context'
import SideBar from './components/SideBar'
import { AboutTheApplication } from './pages/about-the-application'

function routes() {

  return (
    <Router>
      <Routes>
          <Route path='/' element={<Auth />}/>

          <Route path='/dashboard' element={
              <FinancialRecordsProvider>
                <div id='general-body'>
                  <SideBar/>
                  <Dashboard />
                </div>
              </FinancialRecordsProvider>
            }
          />

          <Route path='/auth' element={<Auth />}/>

          <Route path='/about-the-application' element={
            <div id='general-body'>
              <AboutTheApplication />
            </div>
          }
          />
          
          <Route path='/about-me' element={
            <div id='general-body'>
              <AboutMe />
            </div>
          }/>
        </Routes>
    </Router>
  )
}

export default routes
