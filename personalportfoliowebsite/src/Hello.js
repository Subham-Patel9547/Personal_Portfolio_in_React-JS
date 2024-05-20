import React from 'react'
import About from './Components/About'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Projects from './Components/Project/Project'

function Hello() {
  return (
    <div>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>    
    </div>
  )
}

export default Hello