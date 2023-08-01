import React from 'react'
import {About,Contact,Experience,Feedbacks,Hero,Tech,Works,Navbar,StarsCanvas,Resume} from './components'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    
    <Router>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar/>
          <Hero/>
        </div>
          <About/>
          <Experience/>
          <Tech/>
          <Works/>

          <div className='relative z-0'>
              <Contact/>
              <StarsCanvas/>
          </div>
      </div>
      
    </Router>
    
  )
}

export default App